/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Prompts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, CheckboxFieldProps, DividerProps, FlexProps, HeadingProps, ImageProps, TextAreaFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddfriendsOverridesProps = {
    Addfriends?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    "Overlay Card"?: PrimitiveOverrideProps<CardProps>;
    CheckboxField38032683?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Divider38032562?: PrimitiveOverrideProps<DividerProps>;
    CheckboxField38032667?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Profile38032640?: PrimitiveOverrideProps<FlexProps>;
    "Finn 1"?: PrimitiveOverrideProps<ImageProps>;
    "Heading (Friend 1)38032642"?: PrimitiveOverrideProps<HeadingProps>;
    Divider38032560?: PrimitiveOverrideProps<DividerProps>;
    CheckboxField38032659?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Profile38032636?: PrimitiveOverrideProps<FlexProps>;
    "Liam 1"?: PrimitiveOverrideProps<ImageProps>;
    "Heading (Friend 1)38032638"?: PrimitiveOverrideProps<HeadingProps>;
    Divider38032558?: PrimitiveOverrideProps<DividerProps>;
    CheckboxField38032651?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Profile38032588?: PrimitiveOverrideProps<FlexProps>;
    "Sam 1"?: PrimitiveOverrideProps<ImageProps>;
    "Heading (Friend 1)38032574"?: PrimitiveOverrideProps<HeadingProps>;
    Divider38032556?: PrimitiveOverrideProps<DividerProps>;
    "Heading (Deselect)"?: PrimitiveOverrideProps<HeadingProps>;
    "Heading (Friends)"?: PrimitiveOverrideProps<HeadingProps>;
    Divider38032554?: PrimitiveOverrideProps<DividerProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Response Field"?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Prompt field"?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddfriendsProps = React.PropsWithChildren<Partial<ViewProps> & {
    prompts?: Prompts;
} & {
    overrides?: AddfriendsOverridesProps | undefined | null;
}>;
export default function Addfriends(props: AddfriendsProps): React.ReactElement;
