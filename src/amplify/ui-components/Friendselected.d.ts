/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Users } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, FlexProps, HeadingProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendselectedOverridesProps = {
    Friendselected?: PrimitiveOverrideProps<ViewProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    "Sam 1"?: PrimitiveOverrideProps<ImageProps>;
    "Heading (Friend 1)"?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type FriendselectedProps = React.PropsWithChildren<Partial<ViewProps> & {
    users?: Users;
} & {
    overrides?: FriendselectedOverridesProps | undefined | null;
}>;
export default function Friendselected(props: FriendselectedProps): React.ReactElement;
