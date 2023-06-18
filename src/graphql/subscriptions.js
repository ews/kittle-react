/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateAnswers = /* GraphQL */ `
  subscription OnCreateAnswers($filter: ModelSubscriptionAnswersFilterInput) {
    onCreateAnswers(filter: $filter) {
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
export const onUpdateAnswers = /* GraphQL */ `
  subscription OnUpdateAnswers($filter: ModelSubscriptionAnswersFilterInput) {
    onUpdateAnswers(filter: $filter) {
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
export const onDeleteAnswers = /* GraphQL */ `
  subscription OnDeleteAnswers($filter: ModelSubscriptionAnswersFilterInput) {
    onDeleteAnswers(filter: $filter) {
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
export const onCreatePromptTags = /* GraphQL */ `
  subscription OnCreatePromptTags(
    $filter: ModelSubscriptionPromptTagsFilterInput
  ) {
    onCreatePromptTags(filter: $filter) {
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
export const onUpdatePromptTags = /* GraphQL */ `
  subscription OnUpdatePromptTags(
    $filter: ModelSubscriptionPromptTagsFilterInput
  ) {
    onUpdatePromptTags(filter: $filter) {
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
export const onDeletePromptTags = /* GraphQL */ `
  subscription OnDeletePromptTags(
    $filter: ModelSubscriptionPromptTagsFilterInput
  ) {
    onDeletePromptTags(filter: $filter) {
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
export const onCreatePrompts = /* GraphQL */ `
  subscription OnCreatePrompts($filter: ModelSubscriptionPromptsFilterInput) {
    onCreatePrompts(filter: $filter) {
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
export const onUpdatePrompts = /* GraphQL */ `
  subscription OnUpdatePrompts($filter: ModelSubscriptionPromptsFilterInput) {
    onUpdatePrompts(filter: $filter) {
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
export const onDeletePrompts = /* GraphQL */ `
  subscription OnDeletePrompts($filter: ModelSubscriptionPromptsFilterInput) {
    onDeletePrompts(filter: $filter) {
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
