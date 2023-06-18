/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pictureURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        pictureURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAnswers = /* GraphQL */ `
  query GetAnswers($id: ID!) {
    getAnswers(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        AnswerText
        timestamp
        promptsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answersUsersId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAnswers = /* GraphQL */ `
  query SyncAnswers(
    $filter: ModelAnswersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        AnswerText
        timestamp
        promptsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answersUsersId
      }
      nextToken
      startedAt
    }
  }
`;
export const answersByPromptsID = /* GraphQL */ `
  query AnswersByPromptsID(
    $promptsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    answersByPromptsID(
      promptsID: $promptsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        AnswerText
        timestamp
        promptsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answersUsersId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPromptTags = /* GraphQL */ `
  query GetPromptTags($id: ID!) {
    getPromptTags(id: $id) {
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
export const listPromptTags = /* GraphQL */ `
  query ListPromptTags(
    $filter: ModelPromptTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromptTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tag
        promtsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPromptTags = /* GraphQL */ `
  query SyncPromptTags(
    $filter: ModelPromptTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPromptTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tag
        promtsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const promptTagsByPromtsID = /* GraphQL */ `
  query PromptTagsByPromtsID(
    $promtsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPromptTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promptTagsByPromtsID(
      promtsID: $promtsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tag
        promtsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrompts = /* GraphQL */ `
  query GetPrompts($id: ID!) {
    getPrompts(id: $id) {
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
export const listPrompts = /* GraphQL */ `
  query ListPrompts(
    $filter: ModelPromptsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PromptText
        active
        numer_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrompts = /* GraphQL */ `
  query SyncPrompts(
    $filter: ModelPromptsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrompts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        PromptText
        active
        numer_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
