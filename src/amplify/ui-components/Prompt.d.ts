/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Prompts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, HeadingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptOverridesProps = {
    Prompt?: PrimitiveOverrideProps<ViewProps>;
    Card37572698?: PrimitiveOverrideProps<CardProps>;
    Card37572696?: PrimitiveOverrideProps<CardProps>;
    Card37563586?: PrimitiveOverrideProps<CardProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    PromptText?: PrimitiveOverrideProps<HeadingProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Let\u2019s respond to today\u2019s prompt"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PromptProps = React.PropsWithChildren<Partial<ViewProps> & {
    prompts?: Prompts;
} & {
    overrides?: PromptOverridesProps | undefined | null;
}>;
export default function Prompt(props: PromptProps): React.ReactElement;
