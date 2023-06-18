/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import AnswerCardUser from "./AnswerCardUser";
import { View } from "@aws-amplify/ui-react";
export default function AnswerCardFriend(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="442px"
      height="270px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AnswerCardFriend")}
      {...rest}
    >
      <AnswerCardUser
        width="442px"
        height="345px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="-27.78%"
        left="0%"
        right="0%"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(249,251,252,1)"
        {...getOverrideProps(overrides, "Answer Card Friend")}
      ></AnswerCardUser>
    </View>
  );
}
