import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pictureURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pictureURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AnswerText?: string | null;
  readonly timestamp?: string | null;
  readonly Users?: Users | null;
  readonly Prompts?: Prompts | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly answersUsersId?: string | null;
  readonly answersPromptsId?: string | null;
}

type LazyAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Answers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AnswerText?: string | null;
  readonly timestamp?: string | null;
  readonly Users: AsyncItem<Users | undefined>;
  readonly Prompts: AsyncItem<Prompts | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly answersUsersId?: string | null;
  readonly answersPromptsId?: string | null;
}

export declare type Answers = LazyLoading extends LazyLoadingDisabled ? EagerAnswers : LazyAnswers

export declare const Answers: (new (init: ModelInit<Answers>) => Answers) & {
  copyOf(source: Answers, mutator: (draft: MutableModel<Answers>) => MutableModel<Answers> | void): Answers;
}

type EagerPrompts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prompts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PromptText?: string | null;
  readonly active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrompts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prompts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PromptText?: string | null;
  readonly active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prompts = LazyLoading extends LazyLoadingDisabled ? EagerPrompts : LazyPrompts

export declare const Prompts: (new (init: ModelInit<Prompts>) => Prompts) & {
  copyOf(source: Prompts, mutator: (draft: MutableModel<Prompts>) => MutableModel<Prompts> | void): Prompts;
}