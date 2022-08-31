/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ActionCardWithTags(props) {
  const { products, brandArea, tags, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ActionCardWithTags")}
    >
      <Image
        height="408px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={products?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={products?.name}
            {...getOverrideProps(overrides, "Card Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={products?.description}
            {...getOverrideProps(overrides, "Card Description")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children={brandArea}
          {...getOverrideProps(overrides, "Brand Area")}
        ></Flex>
        <Button
          display="flex"
          gap="0"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Primary Button"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="10px"
          direction="column"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          children={tags}
          {...getOverrideProps(overrides, "Tags")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
