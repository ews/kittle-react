/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      name
      pictureURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      name
      pictureURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      name
      pictureURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAnswers = /* GraphQL */ `
  mutation CreateAnswers(
    $input: CreateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    createAnswers(input: $input, condition: $condition) {
      id
      AnswerText
      timestamp
      promptsID
      Users {
        id
        name
        pictureURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answersUsersId
    }
  }
`;
export const updateAnswers = /* GraphQL */ `
  mutation UpdateAnswers(
    $input: UpdateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    updateAnswers(input: $input, condition: $condition) {
      id
      AnswerText
      timestamp
      promptsID
      Users {
        id
        name
        pictureURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answersUsersId
    }
  }
`;
export const deleteAnswers = /* GraphQL */ `
  mutation DeleteAnswers(
    $input: DeleteAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    deleteAnswers(input: $input, condition: $condition) {
      id
      AnswerText
      timestamp
      promptsID
      Users {
        id
        name
        pictureURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answersUsersId
    }
  }
`;
export const createPromptTags = /* GraphQL */ `
  mutation CreatePromptTags(
    $input: CreatePromptTagsInput!
    $condition: ModelPromptTagsConditionInput
  ) {
    createPromptTags(input: $input, condition: $condition) {
      id
      tag
      promtsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePromptTags = /* GraphQL */ `
  mutation UpdatePromptTags(
    $input: UpdatePromptTagsInput!
    $condition: ModelPromptTagsConditionInput
  ) {
    updatePromptTags(input: $input, condition: $condition) {
      id
      tag
      promtsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePromptTags = /* GraphQL */ `
  mutation DeletePromptTags(
    $input: DeletePromptTagsInput!
    $condition: ModelPromptTagsConditionInput
  ) {
    deletePromptTags(input: $input, condition: $condition) {
      id
      tag
      promtsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPrompts = /* GraphQL */ `
  mutation CreatePrompts(
    $input: CreatePromptsInput!
    $condition: ModelPromptsConditionInput
  ) {
    createPrompts(input: $input, condition: $condition) {
      id
      PromptText
      PromptTags {
        nextToken
        startedAt
      }
      active
      AnswersPrompts {
        nextToken
        startedAt
      }
      numer_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePrompts = /* GraphQL */ `
  mutation UpdatePrompts(
    $input: UpdatePromptsInput!
    $condition: ModelPromptsConditionInput
  ) {
    updatePrompts(input: $input, condition: $condition) {
      id
      PromptText
      PromptTags {
        nextToken
        startedAt
      }
      active
      AnswersPrompts {
        nextToken
        startedAt
      }
      numer_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePrompts = /* GraphQL */ `
  mutation DeletePrompts(
    $input: DeletePromptsInput!
    $condition: ModelPromptsConditionInput
  ) {
    deletePrompts(input: $input, condition: $condition) {
      id
      PromptText
      PromptTags {
        nextToken
        startedAt
      }
      active
      AnswersPrompts {
        nextToken
        startedAt
      }
      numer_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
