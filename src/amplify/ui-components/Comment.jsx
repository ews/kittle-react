/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, TextField, View } from "@aws-amplify/ui-react";
export default function Comment(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="480px"
      height="99px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(212,195,200,1)"
      {...getOverrideProps(overrides, "Comment")}
      {...rest}
    >
      <TextField
        width="360px"
        height="unset"
        placeholder="add a comment..."
        position="absolute"
        top="30px"
        left="98px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="32px"
        left="399px"
        size="small"
        isDisabled={true}
        variation="link"
        children="post"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <View
        padding="0px 0px 0px 0px"
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20px"
        left="20px"
        {...getOverrideProps(overrides, "Photo")}
      >
        <Image
          width="60px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="150px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Luna 2")}
        ></Image>
      </View>
    </View>
  );
}
