import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  Grid,
  Card,
  useTheme,
  withAuthenticator,
} from "@aws-amplify/ui-react";

// Auth and user information
import { Amplify, Auth, Hub } from 'aws-amplify';
//import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
//

// router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// models
import { Prompts, Answers } from "./amplify/models";

// API work

import { API, DataStore } from "aws-amplify";
import { listPrompts } from "./graphql/queries";

import Prompt from './amplify/ui-components/Prompt'
import Nav from './amplify/ui-components/Nav'
import PromptBox from './amplify/ui-components/PromptBox'
import PromptCollection from './amplify/ui-components/PromptCollection'
import AnswerCardUserCollection from './amplify/ui-components/AnswerCardUserCollection'
import ResponseFeed from './amplify/ui-components/ResponseFeed'
import AnswerCardUser from './amplify/ui-components/AnswerCardUser'
import AnswerCardFriend from './amplify/ui-components/AnswerCardFriend'

import AnswersCreate from './amplify/ui-components/AnswersCreate';
import AnswersCreateForm from './amplify/ui-components/AnswersCreateForm';
//import AnswersUpdatefrom './amplify/ui-components/AnswersUpdateForm';


function ViewAllPrompts({ prompts }) {
  return (
    <View margin="3rem 0">
      {prompts.map((note) => (
        <Flex
          key={note.id || note.name}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="strong" fontWeight={700}>
            {note.PromptText}
          </Text>
          <Text as="span">{note.PromptText}</Text>
        </Flex>
      ))}
    </View>
  )
}


function CustomPrompt({ overrides }) {
  // if there's a label in overrides, use it; otherwise use the default Prompt
  if (overrides && overrides.PromptText && overrides.PromptText.label) {
    return <h2 className="amplify-heading amplify-heading--2">{overrides.PromptText.label}</h2>
  }

  // render the original Prompt component if no label in overrides
  return <Prompt overrides={overrides} />
}


async function createAnswer(promptId, userId, answer) {
  await DataStore.save(
    new Answers({
      AnswerText: answer.AnswerText,
      answersUsersId: userId,
      answersPromptsId: promptId
    })
  )
}

function PromptAndAnswer({ prompts }) {

  //console.log('from the container', prompts)


  return (
    <View>
      <Nav />
      <PromptBox prompts={prompts[0]} />
      <AnswersCreateForm
        onSubmit={(fields) => {
          // Example function to trim all string inputs
          const updatedFields = {}

          const promptId = prompts[0].id
          const username = window.user.username
          const userId = window.user.attributes.sub

          Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
              updatedFields[key] = fields[key].trim()
            } else {
              updatedFields[key] = fields[key]
            }
          })
          console.log('results', updatedFields)
          createAnswer(promptId, userId, updatedFields)


          return updatedFields
        }}
      />
    </View>
  )
}

function AnswersList({ answers }) {
  console.log('internal answers', answers)
  if (answers.length > 0) {
    return (
      <View>
        <AnswerCardUser answers={answers[0]} />
      </View>
    )
  } else {
    return (
      <View>
      </View>
    )
  }
}

function App({ signOut, user }) {

  console.log('USER', user)
  window.user = user

  const [prompts, setPrompts] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchPromptsDatastore();
  }, []);


  useEffect(() => {
    fetchAnswersDatastore();
  }, []);


  async function fetchPromptsDatastore() {
    try {
      const prompts = await DataStore.query(Prompts);
      console.log('Prompts retrieved successfully!', prompts);
      setPrompts(prompts)
    } catch (error) {
      console.log('Error retrieving posts', error);
    }
  }

  async function fetchAnswersDatastore() {
    try {
      const answers = await DataStore.query(Answers);
      window.answers = answers
      console.log('answers retrieved successfully!', answers);
      setAnswers(answers)
    } catch (error) {
      console.log('Error retrieving answers!!!', error);
    }
  }


  return (
    <View className="App">
      <Heading level={1}>Kittle</Heading>

      <header className="App-header">
        <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 1fr 1fr"
        >
          <Card
            columnStart="1"
            columnEnd="2"
          >
            {/* <PromptBox prompts={prompts} /> */}
            <PromptAndAnswer prompts={prompts} />
          </Card>
          <Card
            columnStart="2"
            columnEnd="3"
          >
            <AnswerCardUserCollection />
          </Card>

          <Card
            columnStart="3"
            columnEnd="-1"
          >
            <ResponseFeed />
          </Card>

        </Grid>


        {/* <BrowserRouter> */}
        {/*   <Routes> */}
        {/*     <Route path="/" element={<PromptAndAnswer prompts={prompts} />} /> */}
        {/*     <Route path="/list" element={<ViewAllPrompts />} /> */}
        {/*     {/\* <Route path="/answersUser" element={<AnswersList answers={answers} />} /> *\/} */}
        {/*     <Route path="/answersUser" element={<AnswerCardUserCollection />} /> */}
        {/*   </Routes> */}
        {/* </BrowserRouter> */}

      </header>


      <Button onClick={signOut}>Sign Out</Button>
    </View>



  );
}

export default withAuthenticator(App);
