/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PromptProps } from "./Prompt";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptCollectionOverridesProps = {
    PromptCollection?: PrimitiveOverrideProps<CollectionProps>;
    Prompt?: PromptProps;
} & EscapeHatchProps;
export declare type PromptCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PromptProps;
} & {
    overrides?: PromptCollectionOverridesProps | undefined | null;
}>;
export default function PromptCollection(props: PromptCollectionProps): React.ReactElement;
