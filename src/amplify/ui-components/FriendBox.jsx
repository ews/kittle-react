/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CheckboxField, View } from "@aws-amplify/ui-react";
export default function FriendBox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="404px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FriendBox")}
      {...rest}
    >
      <View
        width="404px"
        height="100px"
        {...getOverrideProps(overrides, "Friend selected")}
      ></View>
      <CheckboxField
        width="unset"
        height="unset"
        position="absolute"
        top="40px"
        left="372px"
        size="large"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
    </View>
  );
}
