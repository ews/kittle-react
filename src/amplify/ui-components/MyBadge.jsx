/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex } from "@aws-amplify/ui-react";
export default function MyBadge(props) {
  const { test, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction=""
      width="unset"
      height="102px"
      justifyContent="space-between"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="36px 52px 36px 52px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MyBadge")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="default"
        children="cucudrulu"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </Flex>
  );
}
