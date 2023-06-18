/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Answers, Users, Prompts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswerCardUserOverridesProps = {
    "12"?: PrimitiveOverrideProps<TextProps>;
    AnswerCardUser?: PrimitiveOverrideProps<ViewProps>;
    "Card Emily"?: PrimitiveOverrideProps<FlexProps>;
    Photo?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 7"?: PrimitiveOverrideProps<IconProps>;
    "christopher-campbell-rDEOVtE7vOs-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "edward-cisneros-_H6wpor9mjs-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    Frame38452681?: PrimitiveOverrideProps<FlexProps>;
    Frame38452682?: PrimitiveOverrideProps<FlexProps>;
    Frame38452683?: PrimitiveOverrideProps<FlexProps>;
    You?: PrimitiveOverrideProps<TextProps>;
    "9:55 AM"?: PrimitiveOverrideProps<TextProps>;
    Icon3959775?: PrimitiveOverrideProps<ViewProps>;
    SocialB?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    "Who made you feel special this week?"?: PrimitiveOverrideProps<TextProps>;
    "Delilah complimented the pin on my jacket. She mentioned how it reminded her of her grandmother."?: PrimitiveOverrideProps<TextProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    Comments?: PrimitiveOverrideProps<FlexProps>;
    Icon38452690?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Frame38452697?: PrimitiveOverrideProps<FlexProps>;
    Emojis?: PrimitiveOverrideProps<FlexProps>;
    "\u2764\uFE0F 2"?: PrimitiveOverrideProps<TextProps>;
    "\uD83E\uDD70\uFE0F 3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AnswerCardUserProps = React.PropsWithChildren<Partial<ViewProps> & {
    answers?: Answers;
    users?: Users;
    prompts?: Prompts;
} & {
    overrides?: AnswerCardUserOverridesProps | undefined | null;
}>;
export default function AnswerCardUser(props: AnswerCardUserProps): React.ReactElement;
