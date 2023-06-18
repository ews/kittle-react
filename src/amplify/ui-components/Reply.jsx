/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Reply(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="480px"
      height="260px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Reply")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="480px"
        height="260px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="35px 35px 0px 0px"
        padding="16px 0px 16px 16px"
        backgroundColor="rgba(236,231,236,1)"
        {...getOverrideProps(overrides, "Card Emily")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="60px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
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
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="378px"
          height="142px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="42px 100px 42px 100px"
          {...getOverrideProps(overrides, "Frame39591758")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="103px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame39591760")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="700"
              color="rgba(8,16,18,1)"
              lineHeight="28px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Emily"
              {...getOverrideProps(overrides, "Emily")}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(62,66,66,1)"
              lineHeight="28px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="9:55 AM"
              {...getOverrideProps(overrides, "9:55 AM")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(236,231,236,1)"
          {...getOverrideProps(overrides, "SocialB")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="400"
            color="rgba(8,16,18,1)"
            lineHeight="28px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="352px"
            height="188px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="No one can pick a better avocado than @luna. When we were in high school she taught me how to put them up to my ear, tap them lightly and figure out exactly how many days it would be ..."
            {...getOverrideProps(
              overrides,
              "No one can pick a better avocado than @luna. When we were in high school she taught me how to put them up to my ear, tap them lightly and figure out exactly how many days it would be ..."
            )}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
