/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Prompts } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PromptsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    PromptText: "",
    active: false,
    numer_id: "",
  };
  const [PromptText, setPromptText] = React.useState(initialValues.PromptText);
  const [active, setActive] = React.useState(initialValues.active);
  const [numer_id, setNumer_id] = React.useState(initialValues.numer_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPromptText(initialValues.PromptText);
    setActive(initialValues.active);
    setNumer_id(initialValues.numer_id);
    setErrors({});
  };
  const validations = {
    PromptText: [],
    active: [],
    numer_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          PromptText,
          active,
          numer_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Prompts(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PromptsCreateForm")}
      {...rest}
    >
      <TextField
        label="Prompt text"
        isRequired={false}
        isReadOnly={false}
        value={PromptText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PromptText: value,
              active,
              numer_id,
            };
            const result = onChange(modelFields);
            value = result?.PromptText ?? value;
          }
          if (errors.PromptText?.hasError) {
            runValidationTasks("PromptText", value);
          }
          setPromptText(value);
        }}
        onBlur={() => runValidationTasks("PromptText", PromptText)}
        errorMessage={errors.PromptText?.errorMessage}
        hasError={errors.PromptText?.hasError}
        {...getOverrideProps(overrides, "PromptText")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              PromptText,
              active: value,
              numer_id,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Id"
        type="number"
        step="any"
        value={numer_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PromptText,
              active,
              numer_id: value,
            };
            const result = onChange(modelFields);
            value = result?.numer_id ?? value;
          }
          if (errors.numer_id?.hasError) {
            runValidationTasks("numer_id", value);
          }
          setNumer_id(value);
        }}
        onBlur={() => runValidationTasks("numer_id", numer_id)}
        errorMessage={errors.numer_id?.errorMessage}
        hasError={errors.numer_id?.hasError}
        {...getOverrideProps(overrides, "numer_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
