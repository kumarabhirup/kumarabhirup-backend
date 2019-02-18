// Code generated by Prisma (prisma@1.26.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  contact: (where?: ContactWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  contact: (where: ContactWhereUniqueInput) => ContactPromise;
  contacts: (args?: {
    where?: ContactWhereInput;
    orderBy?: ContactOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Contact>;
  contactsConnection: (args?: {
    where?: ContactWhereInput;
    orderBy?: ContactOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ContactConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createContact: (data: ContactCreateInput) => ContactPromise;
  updateContact: (args: {
    data: ContactUpdateInput;
    where: ContactWhereUniqueInput;
  }) => ContactPromise;
  updateManyContacts: (args: {
    data: ContactUpdateManyMutationInput;
    where?: ContactWhereInput;
  }) => BatchPayloadPromise;
  upsertContact: (args: {
    where: ContactWhereUniqueInput;
    create: ContactCreateInput;
    update: ContactUpdateInput;
  }) => ContactPromise;
  deleteContact: (where: ContactWhereUniqueInput) => ContactPromise;
  deleteManyContacts: (where?: ContactWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  contact: (
    where?: ContactSubscriptionWhereInput
  ) => ContactSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ContactOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "fullname_ASC"
  | "fullname_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "email_ASC"
  | "email_DESC"
  | "subject_ASC"
  | "subject_DESC"
  | "message_ASC"
  | "message_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ContactWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ContactWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  fullname?: String;
  fullname_not?: String;
  fullname_in?: String[] | String;
  fullname_not_in?: String[] | String;
  fullname_lt?: String;
  fullname_lte?: String;
  fullname_gt?: String;
  fullname_gte?: String;
  fullname_contains?: String;
  fullname_not_contains?: String;
  fullname_starts_with?: String;
  fullname_not_starts_with?: String;
  fullname_ends_with?: String;
  fullname_not_ends_with?: String;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  subject?: String;
  subject_not?: String;
  subject_in?: String[] | String;
  subject_not_in?: String[] | String;
  subject_lt?: String;
  subject_lte?: String;
  subject_gt?: String;
  subject_gte?: String;
  subject_contains?: String;
  subject_not_contains?: String;
  subject_starts_with?: String;
  subject_not_starts_with?: String;
  subject_ends_with?: String;
  subject_not_ends_with?: String;
  message?: String;
  message_not?: String;
  message_in?: String[] | String;
  message_not_in?: String[] | String;
  message_lt?: String;
  message_lte?: String;
  message_gt?: String;
  message_gte?: String;
  message_contains?: String;
  message_not_contains?: String;
  message_starts_with?: String;
  message_not_starts_with?: String;
  message_ends_with?: String;
  message_not_ends_with?: String;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: ContactWhereInput[] | ContactWhereInput;
  OR?: ContactWhereInput[] | ContactWhereInput;
  NOT?: ContactWhereInput[] | ContactWhereInput;
}

export interface ContactCreateInput {
  fullname: String;
  phone?: String;
  email: String;
  subject: String;
  message: String;
}

export interface ContactUpdateInput {
  fullname?: String;
  phone?: String;
  email?: String;
  subject?: String;
  message?: String;
}

export interface ContactUpdateManyMutationInput {
  fullname?: String;
  phone?: String;
  email?: String;
  subject?: String;
  message?: String;
}

export interface ContactSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ContactWhereInput;
  AND?: ContactSubscriptionWhereInput[] | ContactSubscriptionWhereInput;
  OR?: ContactSubscriptionWhereInput[] | ContactSubscriptionWhereInput;
  NOT?: ContactSubscriptionWhereInput[] | ContactSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Contact {
  id: ID_Output;
  fullname: String;
  phone?: String;
  email: String;
  subject: String;
  message: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface ContactPromise extends Promise<Contact>, Fragmentable {
  id: () => Promise<ID_Output>;
  fullname: () => Promise<String>;
  phone: () => Promise<String>;
  email: () => Promise<String>;
  subject: () => Promise<String>;
  message: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ContactSubscription
  extends Promise<AsyncIterator<Contact>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  fullname: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  subject: () => Promise<AsyncIterator<String>>;
  message: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ContactConnection {
  pageInfo: PageInfo;
  edges: ContactEdge[];
}

export interface ContactConnectionPromise
  extends Promise<ContactConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ContactEdge>>() => T;
  aggregate: <T = AggregateContactPromise>() => T;
}

export interface ContactConnectionSubscription
  extends Promise<AsyncIterator<ContactConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ContactEdgeSubscription>>>() => T;
  aggregate: <T = AggregateContactSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ContactEdge {
  node: Contact;
  cursor: String;
}

export interface ContactEdgePromise extends Promise<ContactEdge>, Fragmentable {
  node: <T = ContactPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ContactEdgeSubscription
  extends Promise<AsyncIterator<ContactEdge>>,
    Fragmentable {
  node: <T = ContactSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateContact {
  count: Int;
}

export interface AggregateContactPromise
  extends Promise<AggregateContact>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateContactSubscription
  extends Promise<AsyncIterator<AggregateContact>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ContactSubscriptionPayload {
  mutation: MutationType;
  node: Contact;
  updatedFields: String[];
  previousValues: ContactPreviousValues;
}

export interface ContactSubscriptionPayloadPromise
  extends Promise<ContactSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ContactPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ContactPreviousValuesPromise>() => T;
}

export interface ContactSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ContactSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ContactSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ContactPreviousValuesSubscription>() => T;
}

export interface ContactPreviousValues {
  id: ID_Output;
  fullname: String;
  phone?: String;
  email: String;
  subject: String;
  message: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface ContactPreviousValuesPromise
  extends Promise<ContactPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  fullname: () => Promise<String>;
  phone: () => Promise<String>;
  email: () => Promise<String>;
  subject: () => Promise<String>;
  message: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ContactPreviousValuesSubscription
  extends Promise<AsyncIterator<ContactPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  fullname: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  subject: () => Promise<AsyncIterator<String>>;
  message: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Contact",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
