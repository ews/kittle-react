/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReplyOverridesProps = {
    Reply?: PrimitiveOverrideProps<ViewProps>;
    "Card Emily"?: PrimitiveOverrideProps<FlexProps>;
    Photo?: PrimitiveOverrideProps<FlexProps>;
    "Luna 2"?: PrimitiveOverrideProps<ImageProps>;
    Frame39591758?: PrimitiveOverrideProps<FlexProps>;
    Frame39591760?: PrimitiveOverrideProps<FlexProps>;
    Emily?: PrimitiveOverrideProps<TextProps>;
    "9:55 AM"?: PrimitiveOverrideProps<TextProps>;
    SocialB?: PrimitiveOverrideProps<FlexProps>;
    "No one can pick a better avocado than @luna. When we were in high school she taught me how to put them up to my ear, tap them lightly and figure out exactly how many days it would be ..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReplyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ReplyOverridesProps | undefined | null;
}>;
export default function Reply(props: ReplyProps): React.ReactElement;
