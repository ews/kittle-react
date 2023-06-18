/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendBoxOverridesProps = {
    FriendBox?: PrimitiveOverrideProps<ViewProps>;
    "Friend selected"?: PrimitiveOverrideProps<ViewProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type FriendBoxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FriendBoxOverridesProps | undefined | null;
}>;
export default function FriendBox(props: FriendBoxProps): React.ReactElement;
