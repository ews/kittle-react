/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Card, Heading, View } from "@aws-amplify/ui-react";
export default function PromptBox(props) {
  const { prompts, overrides, ...rest } = props;
  return (
    <View
      width="480px"
      height="565px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PromptBox")}
      {...rest}
    >
      <Card
        width="480px"
        height="565px"
        position="absolute"
        backgroundColor="rgba(247,243,246,1)"
        top="0px"
        left="0px"
        variation="default"
        {...getOverrideProps(overrides, "Card39591600")}
      ></Card>
      <Card
        width="440px"
        height="525px"
        position="absolute"
        backgroundColor="rgba(223,219,240,1)"
        top="20px"
        left="20px"
        borderRadius="35px"
        variation="default"
        {...getOverrideProps(overrides, "Card39591596")}
      ></Card>
      <Button
        width="160px"
        height="70px"
        position="absolute"
        borderRadius="54px"
        top="455px"
        left="280px"
        backgroundColor="rgba(82,209,228,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Next"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="245px"
        left="57px"
        level="3"
        children='""'
        {...getOverrideProps(overrides, "Response")}
      ></Heading>
      <Heading
        width="318px"
        height="181px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="52px"
        left="58px"
        level="1"
        children={prompts?.PromptText}
        {...getOverrideProps(overrides, "Question")}
      ></Heading>
    </View>
  );
}
