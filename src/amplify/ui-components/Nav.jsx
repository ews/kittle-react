/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="442px"
      height="167px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(56,54,132,1)"
      {...getOverrideProps(overrides, "Nav")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="123px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45px"
        left="calc(50% - 61.5px - -0.5px)"
        {...getOverrideProps(overrides, "Nav39591561")}
      >
        <View
          width="40px"
          height="5px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="26px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(247,243,246,1)"
          {...getOverrideProps(overrides, "Selected State")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(247,243,246,1)"
          lineHeight="28px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Feed"
          {...getOverrideProps(overrides, "Feed")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(247,243,246,1)"
          lineHeight="28px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="76px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Prompt"
          {...getOverrideProps(overrides, "Prompt")}
        ></Text>
      </View>
    </View>
  );
}
