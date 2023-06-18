/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnswersCreateInputValues = {
    AnswerText?: string;
};
export declare type AnswersCreateValidationValues = {
    AnswerText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswersCreateOverridesProps = {
    AnswersCreateGrid?: PrimitiveOverrideProps<GridProps>;
    AnswerText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnswersCreateProps = React.PropsWithChildren<{
    overrides?: AnswersCreateOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnswersCreateInputValues) => AnswersCreateInputValues;
    onSuccess?: (fields: AnswersCreateInputValues) => void;
    onError?: (fields: AnswersCreateInputValues, errorMessage: string) => void;
    onChange?: (fields: AnswersCreateInputValues) => AnswersCreateInputValues;
    onValidate?: AnswersCreateValidationValues;
} & React.CSSProperties>;
export default function AnswersCreate(props: AnswersCreateProps): React.ReactElement;
