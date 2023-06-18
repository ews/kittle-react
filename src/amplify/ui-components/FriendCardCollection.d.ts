/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FriendCardProps } from "./FriendCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendCardCollectionOverridesProps = {
    FriendCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    FriendCard?: FriendCardProps;
} & EscapeHatchProps;
export declare type FriendCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FriendCardProps;
} & {
    overrides?: FriendCardCollectionOverridesProps | undefined | null;
}>;
export default function FriendCardCollection(props: FriendCardCollectionProps): React.ReactElement;
