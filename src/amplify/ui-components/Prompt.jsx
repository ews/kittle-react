/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Card, Heading, Text, View } from "@aws-amplify/ui-react";
export default function Prompt(props) {
  const { prompts, overrides, ...rest } = props;
  const [
    letsrespondtotodayspromptChildren,
    setLetsrespondtotodayspromptChildren,
  ] = useStateMutationAction("Let\u2019s respond to today\u2019s prompt");
  const buttonOnClick = () => {
    setLetsrespondtotodayspromptChildren('""');
  };
  return (
    <View
      width="480px"
      height="1040px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Prompt")}
      {...rest}
    >
      <Card
        width="480px"
        height="1040px"
        position="absolute"
        backgroundColor="rgba(56,54,132,1)"
        top="0px"
        left="0px"
        variation="default"
        {...getOverrideProps(overrides, "Card37572698")}
      ></Card>
      <Card
        width="480px"
        height="947px"
        position="absolute"
        backgroundColor="rgba(247,243,246,1)"
        top="93px"
        left="0px"
        borderRadius="35px 35px 0px 0px"
        variation="default"
        {...getOverrideProps(overrides, "Card37572696")}
      ></Card>
      <Card
        width="440px"
        height="527px"
        position="absolute"
        backgroundColor="rgba(223,219,240,1)"
        top="117px"
        left="20px"
        borderRadius="35px"
        variation="default"
        {...getOverrideProps(overrides, "Card37563586")}
      ></Card>
      <Button
        width="160px"
        height="70px"
        position="absolute"
        borderRadius="35px"
        top="552px"
        left="284px"
        backgroundColor="rgba(82,209,228,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Next"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Heading
        width="353px"
        height="167px"
        position="absolute"
        top="140px"
        left="64px"
        level="2"
        children={prompts?.PromptText}
        {...getOverrideProps(overrides, "PromptText")}
      ></Heading>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="240px"
        left="640px"
        transformOrigin="top left"
        transform="rotate(180deg)"
        level="1"
        children="“"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="400"
        color="rgba(62,66,66,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="305px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="340px"
        left="64px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={letsrespondtotodayspromptChildren}
        {...getOverrideProps(
          overrides,
          "Let\u2019s respond to today\u2019s prompt"
        )}
      ></Text>
    </View>
  );
}
