/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromptsCreateFormInputValues = {
    PromptText?: string;
    active?: boolean;
    numer_id?: string;
};
export declare type PromptsCreateFormValidationValues = {
    PromptText?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    numer_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptsCreateFormOverridesProps = {
    PromptsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PromptText?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    numer_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromptsCreateFormProps = React.PropsWithChildren<{
    overrides?: PromptsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PromptsCreateFormInputValues) => PromptsCreateFormInputValues;
    onSuccess?: (fields: PromptsCreateFormInputValues) => void;
    onError?: (fields: PromptsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromptsCreateFormInputValues) => PromptsCreateFormInputValues;
    onValidate?: PromptsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PromptsCreateForm(props: PromptsCreateFormProps): React.ReactElement;
