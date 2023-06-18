/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YourCardOverridesProps = {
    "3"?: PrimitiveOverrideProps<TextProps>;
    "99"?: PrimitiveOverrideProps<TextProps>;
    YourCard?: PrimitiveOverrideProps<ViewProps>;
    "Card You"?: PrimitiveOverrideProps<FlexProps>;
    SocialB?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    "Luna 2"?: PrimitiveOverrideProps<ImageProps>;
    Frame38452657?: PrimitiveOverrideProps<FlexProps>;
    Frame38452658?: PrimitiveOverrideProps<FlexProps>;
    Frame38452659?: PrimitiveOverrideProps<FlexProps>;
    You?: PrimitiveOverrideProps<TextProps>;
    "9:55 AM"?: PrimitiveOverrideProps<TextProps>;
    "Delilah complimented the pin on my jacket. She mentioned how it reminded her of her grandmother."?: PrimitiveOverrideProps<TextProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    Comments?: PrimitiveOverrideProps<FlexProps>;
    Icon38452666?: PrimitiveOverrideProps<ViewProps>;
    Vector38452667?: PrimitiveOverrideProps<IconProps>;
    Memebers?: PrimitiveOverrideProps<FlexProps>;
    Icon38452670?: PrimitiveOverrideProps<ViewProps>;
    Vector38452671?: PrimitiveOverrideProps<IconProps>;
    Frame38452673?: PrimitiveOverrideProps<FlexProps>;
    Icon38452674?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type YourCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: YourCardOverridesProps | undefined | null;
}>;
export default function YourCard(props: YourCardProps): React.ReactElement;
