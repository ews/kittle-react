/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Prompts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptBoxOverridesProps = {
    PromptBox?: PrimitiveOverrideProps<ViewProps>;
    Card39591600?: PrimitiveOverrideProps<CardProps>;
    Card39591596?: PrimitiveOverrideProps<CardProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Response?: PrimitiveOverrideProps<HeadingProps>;
    Question?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type PromptBoxProps = React.PropsWithChildren<Partial<ViewProps> & {
    prompts?: Prompts;
} & {
    overrides?: PromptBoxOverridesProps | undefined | null;
}>;
export default function PromptBox(props: PromptBoxProps): React.ReactElement;
