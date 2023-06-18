/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  CheckboxField,
  Flex,
  Heading,
  Image,
  View,
} from "@aws-amplify/ui-react";
export default function Friendselected(props) {
  const { users, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "Friendselected")}
      {...rest}
    >
      <CheckboxField
        width="unset"
        height="unset"
        position="absolute"
        top="40px"
        left="372px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
      <Flex
        gap="16px"
        direction="row"
        width="404px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="20px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Profile")}
      >
        <Image
          width="60px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="80px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Sam 1")}
        ></Image>
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="5"
          children={users?.name}
          {...getOverrideProps(overrides, "Heading (Friend 1)")}
        ></Heading>
      </Flex>
    </View>
  );
}
