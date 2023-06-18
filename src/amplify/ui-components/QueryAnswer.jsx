/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextAreaField } from "@aws-amplify/ui-react";
export default function QueryAnswer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="9px 29px 9px 29px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "QueryAnswer")}
      {...rest}
    >
      <TextAreaField
        width="300px"
        height="unset"
        shrink="0"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
    </Flex>
  );
}
