/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AnswerCardUserProps } from "./AnswerCardUser";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswerCardFriendOverridesProps = {
    AnswerCardFriend?: PrimitiveOverrideProps<ViewProps>;
    "Answer Card Friend"?: AnswerCardUserProps;
} & EscapeHatchProps;
export declare type AnswerCardFriendProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AnswerCardFriendOverridesProps | undefined | null;
}>;
export default function AnswerCardFriend(props: AnswerCardFriendProps): React.ReactElement;
