/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents whole numeric values. */
  BigInt: any;
  /** A date string, such as `2007-12-25`, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as `2007-12-25T16:15:30Z`, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A time string at UTC, such as `16:15:30Z`, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
};

export enum AggregationFunctionType {
  AnyValue = 'ANY_VALUE',
  Avg = 'AVG',
  Count = 'COUNT',
  GroupConcat = 'GROUP_CONCAT',
  Max = 'MAX',
  Min = 'MIN',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

export type ApiToken = {
  __typename?: 'ApiToken';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ApiTokenRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String'];
  roles?: InputMaybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ApiTokenFilter = {
  AND?: InputMaybe<Array<ApiTokenFilter>>;
  OR?: InputMaybe<Array<ApiTokenFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiTokenGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: ApiTokenGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ApiTokenGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  __typename?: 'ApiTokenListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ApiToken>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  __typename?: 'ApiTokenManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<ApiToken>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  __typename?: 'ApiTokenPayload';
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  previousValues?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ApiTokenRelationFilter = {
  every?: InputMaybe<ApiTokenFilter>;
  none?: InputMaybe<ApiTokenFilter>;
  some?: InputMaybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  __typename?: 'ApiTokenResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type ApiTokenSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ApiTokenFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  token?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<ApiTokensRolesUpdateRelationInput>;
};

export type ApiToken_PermissionFilter = {
  AND?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  OR?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiToken_PermissionRelationFilter = {
  every?: InputMaybe<ApiToken_PermissionFilter>;
  none?: InputMaybe<ApiToken_PermissionFilter>;
  some?: InputMaybe<ApiToken_PermissionFilter>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<ApiTokens_RoleUpdateInput>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Application */
export type Application = {
  __typename?: 'Application';
  appType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  __typename?: 'ApplicationListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Application>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  __typename?: 'AsyncSession';
  sessionId: Scalars['String'];
};

export type AsyncSessionStatusResponse = {
  __typename?: 'AsyncSessionStatusResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

/** Auth response */
export type Auth = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpiresAt?: Maybe<Scalars['Int']>;
  idToken?: Maybe<Scalars['String']>;
  idTokenExpiresAt?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type AuthenticationProfile = {
  __typename?: 'AuthenticationProfile';
  _description?: Maybe<Scalars['String']>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  databaseName?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Int']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  managementDomain?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  secret?: Maybe<Scalars['String']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AuthenticationProfileRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  __typename?: 'AuthenticationProfileConnectionOptions';
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
  google?: Maybe<GoogleOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  facebook?: InputMaybe<FacebookOptionsInput>;
  github?: InputMaybe<GithubOptionsInput>;
  google?: InputMaybe<GoogleOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId?: InputMaybe<Scalars['String']>;
  databaseName?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  managementDomain?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId?: InputMaybe<Scalars['String']>;
  databaseName?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  managementDomain?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  roles?: InputMaybe<AuthenticationProfilesRolesManyRelationInput>;
  secret?: InputMaybe<Scalars['String']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthenticationProfileFilter = {
  AND?: InputMaybe<Array<AuthenticationProfileFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfileFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfileGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: AuthenticationProfileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AuthenticationProfileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  audiences?: InputMaybe<Array<GroupByField>>;
  clientId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  databaseName?: InputMaybe<Array<GroupByField>>;
  domain?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  managementDomain?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  secret?: InputMaybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: InputMaybe<Array<GroupByField>>;
  selfSignUpEnabled?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  __typename?: 'AuthenticationProfileListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  __typename?: 'AuthenticationProfileManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  __typename?: 'AuthenticationProfilePayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  previousValues?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthenticationProfileRelationFilter = {
  every?: InputMaybe<AuthenticationProfileFilter>;
  none?: InputMaybe<AuthenticationProfileFilter>;
  some?: InputMaybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfileSort = {
  clientId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  databaseName?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  managementDomain?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secret?: InputMaybe<SortOrder>;
  selfSignUpEnabled?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationProfileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  audiences?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  clientId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  databaseName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  domain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  managementDomain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  secret?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  selfSignUpEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId?: InputMaybe<Scalars['String']>;
  databaseName?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  managementDomain?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<AuthenticationProfilesRolesUpdateRelationInput>;
  secret?: InputMaybe<Scalars['String']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AuthenticationProfile_PermissionFilter = {
  AND?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  every?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  none?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  some?: InputMaybe<AuthenticationProfile_PermissionFilter>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

export type AuthenticationSetting = {
  __typename?: 'AuthenticationSetting';
  _description?: Maybe<Scalars['String']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthenticationSettingFilter = {
  AND?: InputMaybe<Array<AuthenticationSettingFilter>>;
  OR?: InputMaybe<Array<AuthenticationSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  __typename?: 'AuthenticationSettingPayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  previousValues?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedLogouts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedWebOrigins?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  connections?: InputMaybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  avatarId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

export type AwsSignInfoResponse = {
  __typename?: 'AwsSignInfoResponse';
  fields: Scalars['JSON'];
  path: Scalars['String'];
  url: Scalars['String'];
};

export type BigIntPredicateHaving = {
  AND?: InputMaybe<Array<BigIntPredicateHaving>>;
  OR?: InputMaybe<Array<BigIntPredicateHaving>>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not_equals?: InputMaybe<Scalars['BigInt']>;
  not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BillingCurrentPlanResponse = {
  __typename?: 'BillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<WorkspaceStatus>;
  trialEnd?: Maybe<Scalars['DateTime']>;
};

export enum BillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type BillingDetailsResponse = {
  __typename?: 'BillingDetailsResponse';
  brand?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
  origin: BillingDetailsOrigin;
};

/** BillingDetailsUpdateMutationInput */
export type BillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type BillingInvoiceItem = {
  __typename?: 'BillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endingBalance?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoicePdf?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  organization?: Maybe<BillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  periodStart?: Maybe<Scalars['DateTime']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  workspace?: Maybe<BillingInvoiceItemWorkspaceInfo>;
};

export type BillingInvoiceItemOrganizationInfo = {
  __typename?: 'BillingInvoiceItemOrganizationInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type BillingInvoiceItemPlanInfo = {
  __typename?: 'BillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type BillingInvoiceItemWorkspaceInfo = {
  __typename?: 'BillingInvoiceItemWorkspaceInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum BillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Workspace = 'WORKSPACE'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  __typename?: 'BillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<BillingInvoiceItem>;
};

export type BillingLimitMetricItem = {
  __typename?: 'BillingLimitMetricItem';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  tooltip?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type BillingMetricOverageItem = {
  __typename?: 'BillingMetricOverageItem';
  value?: Maybe<Scalars['Float']>;
  warning?: Maybe<Scalars['String']>;
};

export type BillingMetricUsageItem = {
  __typename?: 'BillingMetricUsageItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  overage?: Maybe<BillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']>;
};

export type BillingMetricUsageQuotaItem = {
  __typename?: 'BillingMetricUsageQuotaItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  __typename?: 'BillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  __typename?: 'BillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<BillingMetricUsageItem>;
};

export type BillingNextPlanResponse = {
  __typename?: 'BillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type BillingPlanBaseInfo = {
  __typename?: 'BillingPlanBaseInfo';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type BillingPlanLimitMetricItem = {
  __typename?: 'BillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']>;
  hardLimit?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  overagePrice?: Maybe<Scalars['Int']>;
  softLimit?: Maybe<Scalars['Float']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export type Block = {
  __typename?: 'Block';
  _description?: Maybe<Scalars['String']>;
  canStudentEdit?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  pages?: Maybe<Page>;
  pagesId?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Blocks create input */
export type BlockCreateInput = {
  canStudentEdit?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['JSON']>;
  pages?: InputMaybe<BlocksPagesRelationInput>;
  pagesId?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Blocks create many input */
export type BlockCreateManyInput = {
  canStudentEdit?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['JSON']>;
  pages?: InputMaybe<BlocksPagesManyRelationInput>;
  pagesId?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Blocks delete input */
export type BlockDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** BlockFieldsPermissions create input */
export type BlockFieldsPermissions = {
  canStudentEdit?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['Boolean']>;
  pagesId?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['Boolean']>;
};

export type BlockFilter = {
  AND?: InputMaybe<Array<BlockFilter>>;
  OR?: InputMaybe<Array<BlockFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  canStudentEdit?: InputMaybe<BoolPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  pages?: InputMaybe<PageFilter>;
  pagesId?: InputMaybe<StringPredicate>;
  position?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type BlockGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: BlockGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type BlockGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  canStudentEdit?: InputMaybe<Array<GroupByField>>;
  content?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  pages?: InputMaybe<PageGroupByQuery>;
  pagesId?: InputMaybe<Array<GroupByField>>;
  position?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type BlockKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
};

/** BlockListResponse output */
export type BlockListResponse = {
  __typename?: 'BlockListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Block>;
};

/** BlockManyResponse output */
export type BlockManyResponse = {
  __typename?: 'BlockManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Block>;
};

/** No longer supported. Use `sort` instead. */
export enum BlockOrderBy {
  CanStudentEditAsc = 'canStudentEdit_ASC',
  CanStudentEditDesc = 'canStudentEdit_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PagesIdAsc = 'pagesId_ASC',
  PagesIdDesc = 'pagesId_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Blocks subscription payload */
export type BlockPayload = {
  __typename?: 'BlockPayload';
  mutation: MutationType;
  node?: Maybe<Block>;
  previousValues?: Maybe<Block>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BlockRelationFilter = {
  every?: InputMaybe<BlockFilter>;
  none?: InputMaybe<BlockFilter>;
  some?: InputMaybe<BlockFilter>;
};

export type BlockSort = {
  canStudentEdit?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pages?: InputMaybe<PageSort>;
  pagesId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Blocks subscription filter */
export type BlockSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<BlockFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Blocks update input */
export type BlockUpdateByFilterInput = {
  canStudentEdit?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  content?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  pagesId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  position?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** Blocks update input */
export type BlockUpdateInput = {
  canStudentEdit?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  pages?: InputMaybe<BlocksPagesUpdateRelationInput>;
  pagesId?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

export type Block_PermissionFilter = {
  AND?: InputMaybe<Array<Block_PermissionFilter>>;
  OR?: InputMaybe<Array<Block_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  canStudentEdit?: InputMaybe<BoolPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  pages?: InputMaybe<Page_PermissionFilter>;
  pagesId?: InputMaybe<StringPredicate>;
  position?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Block_PermissionRelationFilter = {
  every?: InputMaybe<Block_PermissionFilter>;
  none?: InputMaybe<Block_PermissionFilter>;
  some?: InputMaybe<Block_PermissionFilter>;
};

/** Blocks relation input */
export type BlocksPagesManyRelationInput = {
  connect?: InputMaybe<PageKeyFilter>;
};

/** Blocks relation input */
export type BlocksPagesRelationInput = {
  connect?: InputMaybe<PageKeyFilter>;
  create?: InputMaybe<Blocks_PageCreateInput>;
};

/** Blocks relation input */
export type BlocksPagesUpdateRelationInput = {
  connect?: InputMaybe<PageKeyFilter>;
  create?: InputMaybe<Blocks_PageCreateInput>;
  disconnect?: InputMaybe<PageKeyFilter>;
  reconnect?: InputMaybe<PageKeyFilter>;
  update?: InputMaybe<Blocks_PageUpdateInput>;
};

/** Pages create input from blocks */
export type Blocks_PageCreateInput = {
  blocks?: InputMaybe<PagesBlocksRelationInput>;
  courses?: InputMaybe<PagesCoursesRelationInput>;
  coursesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Pages update input from blocks */
export type Blocks_PageUpdateInput = {
  blocks?: InputMaybe<PagesBlocksUpdateRelationInput>;
  courses?: InputMaybe<PagesCoursesUpdateRelationInput>;
  coursesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

export type BoolPredicate = {
  equals?: InputMaybe<Scalars['Boolean']>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type BoolPredicateHaving = {
  AND?: InputMaybe<Array<BoolPredicateHaving>>;
  OR?: InputMaybe<Array<BoolPredicateHaving>>;
  equals?: InputMaybe<Scalars['Boolean']>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  authProfileId: Scalars['ID'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  __typename?: 'CognitoAuthProfileAttributes';
  clientAuthDomain?: Maybe<Scalars['String']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

export type Course = {
  __typename?: 'Course';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  /** Description of the Course */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Name of the Course */
  name?: Maybe<Scalars['String']>;
  pages?: Maybe<PageListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CoursePagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<PageGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PageSort>>;
};

/** Courses create input */
export type CourseCreateInput = {
  /** Description of the Course */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the Course */
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<CoursesPagesRelationInput>;
};

/** Courses create many input */
export type CourseCreateManyInput = {
  /** Description of the Course */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the Course */
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<CoursesPagesManyRelationInput>;
};

/** Courses delete input */
export type CourseDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** CourseFieldsPermissions create input */
export type CourseFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['Boolean']>;
};

export type CourseFilter = {
  AND?: InputMaybe<Array<CourseFilter>>;
  OR?: InputMaybe<Array<CourseFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  pages?: InputMaybe<PageRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type CourseGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: CourseGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type CourseGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  pages?: InputMaybe<PageGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type CourseKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
};

/** CourseListResponse output */
export type CourseListResponse = {
  __typename?: 'CourseListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Course>;
};

/** CourseManyResponse output */
export type CourseManyResponse = {
  __typename?: 'CourseManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Course>;
};

/** No longer supported. Use `sort` instead. */
export enum CourseOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Courses subscription payload */
export type CoursePayload = {
  __typename?: 'CoursePayload';
  mutation: MutationType;
  node?: Maybe<Course>;
  previousValues?: Maybe<Course>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CourseSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Courses subscription filter */
export type CourseSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<CourseFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Courses update input */
export type CourseUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Courses update input */
export type CourseUpdateInput = {
  /** Description of the Course */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** Name of the Course */
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<CoursesPagesUpdateRelationInput>;
};

export type Course_PermissionFilter = {
  AND?: InputMaybe<Array<Course_PermissionFilter>>;
  OR?: InputMaybe<Array<Course_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  pages?: InputMaybe<Page_PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Courses relation input */
export type CoursesPagesManyRelationInput = {
  connect?: InputMaybe<Array<PageKeyFilter>>;
};

/** Courses relation input */
export type CoursesPagesRelationInput = {
  connect?: InputMaybe<Array<PageKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Courses_PageCreateInput>>>;
};

/** Courses relation input */
export type CoursesPagesUpdateRelationInput = {
  connect?: InputMaybe<Array<PageKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Courses_PageCreateInput>>>;
  disconnect?: InputMaybe<Array<PageKeyFilter>>;
  reconnect?: InputMaybe<Array<PageKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Courses_PageUpdateInput>>>;
};

/** Pages create input from courses */
export type Courses_PageCreateInput = {
  blocks?: InputMaybe<PagesBlocksRelationInput>;
  courses?: InputMaybe<PagesCoursesRelationInput>;
  coursesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Pages update input from courses */
export type Courses_PageUpdateInput = {
  data: PageUpdateInput;
  filter?: InputMaybe<PageKeyFilter>;
};

/** Custom Table Field Type */
export type CustomTableField = {
  __typename?: 'CustomTableField';
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  __typename?: 'DateFieldTypeAttributes';
  format: Scalars['String'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Day = 'DAY',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  LastDay = 'LAST_DAY',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK'
}

export type DatePredicateHaving = {
  AND?: InputMaybe<Array<DatePredicateHaving>>;
  OR?: InputMaybe<Array<DatePredicateHaving>>;
  equals?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  not_equals?: InputMaybe<Scalars['Date']>;
  not_in?: InputMaybe<Array<Scalars['Date']>>;
};

export type DateRelativePredicateType = {
  op?: InputMaybe<RelativePredicateOpEnum>;
  unit?: InputMaybe<RelativePredicateUnitEnum>;
  value: Scalars['String'];
};

export type DateRelativePredicates = {
  gt?: InputMaybe<DateRelativePredicateType>;
  gte?: InputMaybe<DateRelativePredicateType>;
  lt?: InputMaybe<DateRelativePredicateType>;
  lte?: InputMaybe<DateRelativePredicateType>;
};

export type DateTimePredicate = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  relative?: InputMaybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  AND?: InputMaybe<Array<DateTimePredicateHaving>>;
  OR?: InputMaybe<Array<DateTimePredicateHaving>>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse = {
  __typename?: 'DeployDataResponse';
  buildName: Scalars['String'];
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
};

export enum DeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type DeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mode?: InputMaybe<DeployModeEnum>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum DeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** DeployStatusResult */
export type DeployStatusResult = {
  __typename?: 'DeployStatusResult';
  message?: Maybe<Scalars['String']>;
  status: DeployStatusEnum;
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String'];
  options?: InputMaybe<DeployOptions>;
};

export type EnvironmentBackupItem = {
  __typename?: 'EnvironmentBackupItem';
  name: Scalars['String'];
  size: Scalars['Float'];
};

export type EnvironmentItem = {
  __typename?: 'EnvironmentItem';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: InputMaybe<Scalars['Boolean']>;
  introspection?: InputMaybe<Scalars['Boolean']>;
};

export type EnvironmentVariable = {
  __typename?: 'EnvironmentVariable';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EnvironmentVariableFilter = {
  AND?: InputMaybe<Array<EnvironmentVariableFilter>>;
  OR?: InputMaybe<Array<EnvironmentVariableFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<StringPredicate>;
};

export type EnvironmentVariableGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: EnvironmentVariableGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnvironmentVariableGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  value?: InputMaybe<Array<GroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  __typename?: 'EnvironmentVariableListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  __typename?: 'EnvironmentVariableManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  __typename?: 'EnvironmentVariablePayload';
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  previousValues?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EnvironmentVariableSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnvironmentVariableFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Facebook connection params */
export type FacebookOptions = {
  __typename?: 'FacebookOptions';
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  __typename?: 'FieldDataFeatures';
  create: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  __typename?: 'FieldSchemaFeatures';
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field types */
export enum FieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | GeoFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  expiration?: InputMaybe<Scalars['Int']>;
  fieldSize?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
  isBigInt?: InputMaybe<Scalars['Boolean']>;
  listOptions?: InputMaybe<Array<Scalars['String']>>;
  maxSize?: InputMaybe<Scalars['Int']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minValue?: InputMaybe<Scalars['Float']>;
  precision?: InputMaybe<Scalars['Int']>;
  srid?: InputMaybe<Scalars['Int']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']>>;
};

export type File = {
  __typename?: 'File';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  /** No longer supported. Use `downloadUrl` instead. */
  downloadStorageUrl?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  /** No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead. */
  fields?: Maybe<Scalars['JSON']>;
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  shareUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** No longer supported */
  uploadUrl?: Maybe<Scalars['String']>;
  /** No longer supported */
  uploaded?: Maybe<Scalars['Boolean']>;
  users_avatar?: Maybe<UserListResponse>;
};


export type FileSettings_LandingPageImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileSettings_MenuBarLogoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileUsers_AvatarArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mods?: InputMaybe<Scalars['JSON']>;
  public?: InputMaybe<Scalars['Boolean']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mods?: InputMaybe<Scalars['JSON']>;
  public?: InputMaybe<Scalars['Boolean']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  __typename?: 'FileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']>;
  downloadUrl?: InputMaybe<Scalars['Boolean']>;
  fields?: InputMaybe<Scalars['Boolean']>;
  fileId?: InputMaybe<Scalars['Boolean']>;
  filename?: InputMaybe<Scalars['Boolean']>;
  meta?: InputMaybe<Scalars['Boolean']>;
  mods?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['Boolean']>;
  public?: InputMaybe<Scalars['Boolean']>;
  shareUrl?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['Boolean']>;
  uploadUrl?: InputMaybe<Scalars['Boolean']>;
  uploaded?: InputMaybe<Scalars['Boolean']>;
};

export type FileFilter = {
  AND?: InputMaybe<Array<FileFilter>>;
  OR?: InputMaybe<Array<FileFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<SettingRelationFilter>;
  settings_menuBarLogo?: InputMaybe<SettingRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<UserRelationFilter>;
};

export type FileGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: FileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  downloadUrl?: InputMaybe<Array<GroupByField>>;
  fields?: InputMaybe<Array<GroupByField>>;
  fileId?: InputMaybe<Array<GroupByField>>;
  filename?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  meta?: InputMaybe<Array<GroupByField>>;
  mods?: InputMaybe<Array<GroupByField>>;
  provider?: InputMaybe<Array<GroupByField>>;
  public?: InputMaybe<Array<GroupByField>>;
  settings_landingPageImage?: InputMaybe<SettingGroupByQuery>;
  settings_menuBarLogo?: InputMaybe<SettingGroupByQuery>;
  shareUrl?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  uploadUrl?: InputMaybe<Array<GroupByField>>;
  uploaded?: InputMaybe<Array<GroupByField>>;
  users_avatar?: InputMaybe<UserGroupByQuery>;
};

export type FileKeyFilter = {
  fileId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** FileListResponse output */
export type FileListResponse = {
  __typename?: 'FileListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<File>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  __typename?: 'FileManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<File>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC'
}

/** Files subscription payload */
export type FilePayload = {
  __typename?: 'FilePayload';
  mutation: MutationType;
  node?: Maybe<File>;
  previousValues?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  downloadUrl?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  shareUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploadUrl?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type FileStackSignInfoResponse = {
  __typename?: 'FileStackSignInfoResponse';
  apiKey: Scalars['String'];
  path: Scalars['String'];
  policy: Scalars['String'];
  signature: Scalars['String'];
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  fileId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  filename?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  meta?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  mods?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  provider?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  public?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  shareUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploaded?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mods?: InputMaybe<Scalars['JSON']>;
  public?: InputMaybe<Scalars['Boolean']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  __typename?: 'FileUploadInfoResponse';
  apiKey: Scalars['String'];
  path: Scalars['String'];
  policy: Scalars['String'];
  signature: Scalars['String'];
};

export type File_PermissionFilter = {
  AND?: InputMaybe<Array<File_PermissionFilter>>;
  OR?: InputMaybe<Array<File_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<Setting_PermissionRelationFilter>;
  settings_menuBarLogo?: InputMaybe<Setting_PermissionRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<User_PermissionRelationFilter>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Avatar_UserUpdateInput>>>;
};

export type FloatPredicateHaving = {
  AND?: InputMaybe<Array<FloatPredicateHaving>>;
  OR?: InputMaybe<Array<FloatPredicateHaving>>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
  not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** FunctionInfo */
export type FunctionInfo = {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  name: Scalars['String'];
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']>;
  functionType?: InputMaybe<FunctionType>;
  name?: InputMaybe<Scalars['String']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  __typename?: 'FunctionListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<FunctionInfo>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  __typename?: 'FunctionResolverInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  gqlType: Scalars['String'];
  name: Scalars['String'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  __typename?: 'FunctionTaskInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  name: Scalars['String'];
  scheduleExpression?: Maybe<Scalars['String']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  __typename?: 'FunctionTriggerInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  name: Scalars['String'];
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  __typename?: 'FunctionWebhookInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  httpMethod: Scalars['String'];
  name: Scalars['String'];
  workspaceFullPath: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  __typename?: 'GeoFieldTypeAttributes';
  format: Scalars['String'];
  srid?: Maybe<Scalars['Int']>;
};

/** Github connection params */
export type GithubOptions = {
  __typename?: 'GithubOptions';
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Google connection params */
export type GoogleOptions = {
  __typename?: 'GoogleOptions';
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: InputMaybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  __typename?: 'GraphQLFileItemResponse';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type GroupByField = {
  as?: InputMaybe<Scalars['String']>;
  fn?: InputMaybe<Array<InputMaybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  abs?: InputMaybe<Scalars['Boolean']>;
  aggregate?: InputMaybe<AggregationFunctionType>;
  ascii?: InputMaybe<Scalars['Boolean']>;
  bitLength?: InputMaybe<Scalars['Boolean']>;
  ceil?: InputMaybe<Scalars['Boolean']>;
  charLength?: InputMaybe<Scalars['Boolean']>;
  crc32?: InputMaybe<Scalars['Boolean']>;
  datePart?: InputMaybe<DatePartFunctionType>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  floor?: InputMaybe<Scalars['Boolean']>;
  hex?: InputMaybe<Scalars['Boolean']>;
  ifNull?: InputMaybe<Scalars['String']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  left?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PatternFunctionArguments>;
  locate?: InputMaybe<LocateFunctionArguments>;
  lower?: InputMaybe<Scalars['Boolean']>;
  lpad?: InputMaybe<StringPadFunctionArguments>;
  ltrim?: InputMaybe<Scalars['Boolean']>;
  mod?: InputMaybe<Scalars['Int']>;
  notLike?: InputMaybe<PatternFunctionArguments>;
  nullIf?: InputMaybe<Scalars['String']>;
  replace?: InputMaybe<ReplaceFunctionArguments>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  right?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['Int']>;
  rpad?: InputMaybe<StringPadFunctionArguments>;
  rtrim?: InputMaybe<Scalars['Boolean']>;
  sign?: InputMaybe<Scalars['Boolean']>;
  substring?: InputMaybe<SubstringFunctionArguments>;
  trim?: InputMaybe<TrimFunctionArguments>;
  truncate?: InputMaybe<Scalars['Int']>;
  upper?: InputMaybe<Scalars['Boolean']>;
};

export type GroupByResponse = {
  __typename?: 'GroupByResponse';
  ApiTokenGroup: ApiTokenListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  BigInt?: Maybe<Scalars['BigInt']>;
  BlockGroup: BlockListResponse;
  Boolean?: Maybe<Scalars['Boolean']>;
  CourseGroup: CourseListResponse;
  Date?: Maybe<Scalars['Date']>;
  DateTime?: Maybe<Scalars['DateTime']>;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  FileGroup: FileListResponse;
  Float?: Maybe<Scalars['Float']>;
  GroupIds?: Maybe<Array<Scalars['ID']>>;
  ID?: Maybe<Scalars['ID']>;
  Int?: Maybe<Scalars['Int']>;
  JSON?: Maybe<Scalars['JSON']>;
  PageGroup: PageListResponse;
  RoleGroup: RoleListResponse;
  String?: Maybe<Scalars['String']>;
  UserGroup: UserListResponse;
};


export type GroupByResponseApiTokenGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type GroupByResponseAuthenticationProfileGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type GroupByResponseBlockGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<BlockGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<BlockOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<BlockSort>>;
};


export type GroupByResponseCourseGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CourseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<CourseGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<CourseOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CourseSort>>;
};


export type GroupByResponseEnvironmentVariableGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
};


export type GroupByResponseFileGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FileSort>>;
};


export type GroupByResponsePageGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<PageGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PageSort>>;
};


export type GroupByResponseRoleGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoleSort>>;
};


export type GroupByResponseUserGroupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserSort>>;
};

export type GroupBySort = {
  alias: Scalars['String'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String'];
};

export type Having = {
  AND?: InputMaybe<Array<Having>>;
  OR?: InputMaybe<Array<Having>>;
  alias?: InputMaybe<Scalars['String']>;
  bigint?: InputMaybe<BigIntPredicateHaving>;
  bool?: InputMaybe<BoolPredicateHaving>;
  date?: InputMaybe<DatePredicateHaving>;
  datetime?: InputMaybe<DateTimePredicateHaving>;
  float?: InputMaybe<FloatPredicateHaving>;
  id?: InputMaybe<IdPredicateHaving>;
  int?: InputMaybe<IntPredicateHaving>;
  string?: InputMaybe<StringPredicateHaving>;
};

export type IdPredicate = {
  contains?: InputMaybe<Scalars['ID']>;
  ends_with?: InputMaybe<Scalars['ID']>;
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not_contains?: InputMaybe<Scalars['ID']>;
  not_ends_with?: InputMaybe<Scalars['ID']>;
  not_equals?: InputMaybe<Scalars['ID']>;
  not_in?: InputMaybe<Array<Scalars['ID']>>;
  not_starts_with?: InputMaybe<Scalars['ID']>;
  starts_with?: InputMaybe<Scalars['ID']>;
};

export type IdPredicateHaving = {
  AND?: InputMaybe<Array<IdPredicateHaving>>;
  OR?: InputMaybe<Array<IdPredicateHaving>>;
  contains?: InputMaybe<Scalars['ID']>;
  ends_with?: InputMaybe<Scalars['ID']>;
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not_contains?: InputMaybe<Scalars['ID']>;
  not_ends_with?: InputMaybe<Scalars['ID']>;
  not_equals?: InputMaybe<Scalars['ID']>;
  not_in?: InputMaybe<Array<Scalars['ID']>>;
  not_starts_with?: InputMaybe<Scalars['ID']>;
  starts_with?: InputMaybe<Scalars['ID']>;
};

/** ImportedTable */
export type ImportedTable = {
  __typename?: 'ImportedTable';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Inbox Events List Filter */
export type InboxEventsListFilter = {
  isCompleted?: InputMaybe<IntPredicate>;
};

/** Table Create Index Input */
export type IndexCreateInput = {
  columns: Array<TableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tableId: Scalars['ID'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  columns?: InputMaybe<Array<TableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TableIndexType>;
};

export type IntPredicate = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not_equals?: InputMaybe<Scalars['Int']>;
  not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntPredicateHaving = {
  AND?: InputMaybe<Array<IntPredicateHaving>>;
  OR?: InputMaybe<Array<IntPredicateHaving>>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not_equals?: InputMaybe<Scalars['Int']>;
  not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntrospectionQueryResponse = {
  __typename?: 'IntrospectionQueryResponse';
  url: Scalars['String'];
};

/** Invited By Name */
export type InvitedByName = {
  __typename?: 'InvitedByName';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String'];
  inputArgs?: InputMaybe<Scalars['String']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  __typename?: 'InvokeFunctionResponse';
  responseData: Scalars['String'];
};

export type LocateFunctionArguments = {
  pos?: InputMaybe<Scalars['Int']>;
  str: Scalars['String'];
};

/** LoginResponse */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  auth?: Maybe<Auth>;
  success?: Maybe<Scalars['Boolean']>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** MissingRelation */
export type MissingRelation = {
  __typename?: 'MissingRelation';
  table: Scalars['String'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  __typename?: 'MissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  /** @deprecated No longer supported. Use `system.memberPaymentDetailsUpdate, system.organizationPaymentDetailsUpdate or system.workspacePaymentDetailsUpdate` instead. */
  billingDetailsUpdate?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  blockCreate: Block;
  blockCreateMany: BlockManyResponse;
  blockDelete?: Maybe<SuccessResponse>;
  blockDeleteByFilter?: Maybe<SuccessResponse>;
  blockDestroy?: Maybe<SuccessResponse>;
  blockDestroyByFilter?: Maybe<SuccessResponse>;
  blockRestore: Block;
  blockUpdate: Block;
  blockUpdateByFilter: BlockManyResponse;
  courseCreate: Course;
  courseCreateMany: CourseManyResponse;
  courseDelete?: Maybe<SuccessResponse>;
  courseDeleteByFilter?: Maybe<SuccessResponse>;
  courseDestroy?: Maybe<SuccessResponse>;
  courseDestroyByFilter?: Maybe<SuccessResponse>;
  courseRestore: Course;
  courseUpdate: Course;
  courseUpdateByFilter: CourseManyResponse;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']>;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  pageCreate: Page;
  pageCreateMany: PageManyResponse;
  pageDelete?: Maybe<SuccessResponse>;
  pageDeleteByFilter?: Maybe<SuccessResponse>;
  pageDestroy?: Maybe<SuccessResponse>;
  pageDestroyByFilter?: Maybe<SuccessResponse>;
  pageRestore: Page;
  pageUpdate: Page;
  pageUpdateByFilter: PageManyResponse;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceDelete` instead. */
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};


export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  data?: InputMaybe<ApiTokenDeleteInput>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationApiTokenDestroyArgs = {
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationApiTokenRestoreArgs = {
  id: Scalars['String'];
};


export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: InputMaybe<ApiTokenFilter>;
};


export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};


export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};


export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};


export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};


export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<InputMaybe<AuthenticationProfileCreateManyInput>>;
};


export type MutationAuthenticationProfileDeleteArgs = {
  data?: InputMaybe<AuthenticationProfileDeleteInput>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileDestroyArgs = {
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String'];
};


export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: InputMaybe<AuthenticationProfileFilter>;
};


export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};


export type MutationBillingDetailsUpdateArgs = {
  data: BillingDetailsUpdateMutationInput;
};


export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};


export type MutationBlockCreateArgs = {
  data: BlockCreateInput;
};


export type MutationBlockCreateManyArgs = {
  data: Array<InputMaybe<BlockCreateManyInput>>;
};


export type MutationBlockDeleteArgs = {
  data?: InputMaybe<BlockDeleteInput>;
  filter?: InputMaybe<BlockKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationBlockDeleteByFilterArgs = {
  filter: BlockFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationBlockDestroyArgs = {
  filter?: InputMaybe<BlockKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationBlockDestroyByFilterArgs = {
  filter: BlockFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationBlockRestoreArgs = {
  id: Scalars['String'];
};


export type MutationBlockUpdateArgs = {
  data: BlockUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BlockKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationBlockUpdateByFilterArgs = {
  data: BlockUpdateByFilterInput;
  filter?: InputMaybe<BlockFilter>;
};


export type MutationCourseCreateArgs = {
  data: CourseCreateInput;
};


export type MutationCourseCreateManyArgs = {
  data: Array<InputMaybe<CourseCreateManyInput>>;
};


export type MutationCourseDeleteArgs = {
  data?: InputMaybe<CourseDeleteInput>;
  filter?: InputMaybe<CourseKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCourseDeleteByFilterArgs = {
  filter: CourseFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCourseDestroyArgs = {
  filter?: InputMaybe<CourseKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCourseDestroyByFilterArgs = {
  filter: CourseFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCourseRestoreArgs = {
  id: Scalars['String'];
};


export type MutationCourseUpdateArgs = {
  data: CourseUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<CourseKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCourseUpdateByFilterArgs = {
  data: CourseUpdateByFilterInput;
  filter?: InputMaybe<CourseFilter>;
};


export type MutationDeployArgs = {
  data?: InputMaybe<DeployingBuildInput>;
};


export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};


export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<InputMaybe<EnvironmentVariableCreateManyInput>>;
};


export type MutationEnvironmentVariableDeleteArgs = {
  data?: InputMaybe<EnvironmentVariableDeleteInput>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableDestroyArgs = {
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String'];
};


export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: InputMaybe<EnvironmentVariableFilter>;
};


export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};


export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};


export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};


export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};


export type MutationFileCreateArgs = {
  data: FileCreateInput;
};


export type MutationFileCreateManyArgs = {
  data: Array<InputMaybe<FileCreateManyInput>>;
};


export type MutationFileDeleteArgs = {
  data?: InputMaybe<FileDeleteInput>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationFileDestroyArgs = {
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationFileRestoreArgs = {
  id: Scalars['String'];
};


export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: InputMaybe<FileFilter>;
};


export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};


export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};


export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};


export type MutationInvokeArgs = {
  data?: InputMaybe<InvokeData>;
};


export type MutationPageCreateArgs = {
  data: PageCreateInput;
};


export type MutationPageCreateManyArgs = {
  data: Array<InputMaybe<PageCreateManyInput>>;
};


export type MutationPageDeleteArgs = {
  data?: InputMaybe<PageDeleteInput>;
  filter?: InputMaybe<PageKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPageDeleteByFilterArgs = {
  filter: PageFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPageDestroyArgs = {
  filter?: InputMaybe<PageKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPageDestroyByFilterArgs = {
  filter: PageFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPageRestoreArgs = {
  id: Scalars['String'];
};


export type MutationPageUpdateArgs = {
  data: PageUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PageKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPageUpdateByFilterArgs = {
  data: PageUpdateByFilterInput;
  filter?: InputMaybe<PageFilter>;
};


export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};


export type MutationRoleCreateManyArgs = {
  data: Array<InputMaybe<RoleCreateManyInput>>;
};


export type MutationRoleDeleteArgs = {
  data?: InputMaybe<RoleDeleteInput>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRoleDestroyArgs = {
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRoleRestoreArgs = {
  id: Scalars['String'];
};


export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: InputMaybe<RoleFilter>;
};


export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String'];
};


export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};


export type MutationTableCreateArgs = {
  data: TableCreateInput;
};


export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};


export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};


export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  data: Array<InputMaybe<UserCreateManyInput>>;
};


export type MutationUserDeleteArgs = {
  data?: InputMaybe<UserDeleteInput>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserDestroyArgs = {
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserLoginArgs = {
  data: UserLoginInput;
};


export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};


export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};


export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};


export type MutationUserRestoreArgs = {
  id: Scalars['String'];
};


export type MutationUserSignUpArgs = {
  authProfileId?: InputMaybe<Scalars['ID']>;
  user: UserCreateInput;
};


export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};


export type MutationUserSignUpWithPasswordArgs = {
  authProfileId?: InputMaybe<Scalars['ID']>;
  password: Scalars['String'];
  user: UserCreateInput;
};


export type MutationUserSignUpWithTokenArgs = {
  authProfileId?: InputMaybe<Scalars['ID']>;
  user: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: InputMaybe<UserFilter>;
};


export type MutationUserVerificationEmailResendArgs = {
  authProfileId?: InputMaybe<Scalars['ID']>;
  data: VerificationEmailResendInput;
};


export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};


export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};


export type MutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Delete = 'delete',
  Destroy = 'destroy',
  Update = 'update'
}

export enum NotificationStatusType {
  Done = 'done'
}

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  __typename?: 'NumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  format: Scalars['String'];
  isBigInt?: Maybe<Scalars['Boolean']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type OrganizationUserInvitationResponse = {
  __typename?: 'OrganizationUserInvitationResponse';
  invitationId: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  _description?: Maybe<Scalars['String']>;
  blocks?: Maybe<BlockListResponse>;
  courses?: Maybe<Course>;
  coursesId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageBlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<BlockGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<BlockOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<BlockSort>>;
};

/** Pages create input */
export type PageCreateInput = {
  blocks?: InputMaybe<PagesBlocksRelationInput>;
  courses?: InputMaybe<PagesCoursesRelationInput>;
  coursesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Pages create many input */
export type PageCreateManyInput = {
  blocks?: InputMaybe<PagesBlocksManyRelationInput>;
  courses?: InputMaybe<PagesCoursesManyRelationInput>;
  coursesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Pages delete input */
export type PageDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** PageFieldsPermissions create input */
export type PageFieldsPermissions = {
  coursesId?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['Boolean']>;
};

export type PageFilter = {
  AND?: InputMaybe<Array<PageFilter>>;
  OR?: InputMaybe<Array<PageFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  blocks?: InputMaybe<BlockRelationFilter>;
  courses?: InputMaybe<CourseFilter>;
  coursesId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  position?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PageGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: PageGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type PageGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  blocks?: InputMaybe<BlockGroupByQuery>;
  courses?: InputMaybe<CourseGroupByQuery>;
  coursesId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  position?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type PageKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
};

/** PageListResponse output */
export type PageListResponse = {
  __typename?: 'PageListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Page>;
};

/** PageManyResponse output */
export type PageManyResponse = {
  __typename?: 'PageManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Page>;
};

/** No longer supported. Use `sort` instead. */
export enum PageOrderBy {
  CoursesIdAsc = 'coursesId_ASC',
  CoursesIdDesc = 'coursesId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Pages subscription payload */
export type PagePayload = {
  __typename?: 'PagePayload';
  mutation: MutationType;
  node?: Maybe<Page>;
  previousValues?: Maybe<Page>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PageRelationFilter = {
  every?: InputMaybe<PageFilter>;
  none?: InputMaybe<PageFilter>;
  some?: InputMaybe<PageFilter>;
};

export type PageSort = {
  courses?: InputMaybe<CourseSort>;
  coursesId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Pages subscription filter */
export type PageSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PageFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Pages update input */
export type PageUpdateByFilterInput = {
  coursesId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  position?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** Pages update input */
export type PageUpdateInput = {
  blocks?: InputMaybe<PagesBlocksUpdateRelationInput>;
  courses?: InputMaybe<PagesCoursesUpdateRelationInput>;
  coursesId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

export type Page_PermissionFilter = {
  AND?: InputMaybe<Array<Page_PermissionFilter>>;
  OR?: InputMaybe<Array<Page_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  blocks?: InputMaybe<Block_PermissionRelationFilter>;
  courses?: InputMaybe<Course_PermissionFilter>;
  coursesId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  position?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Page_PermissionRelationFilter = {
  every?: InputMaybe<Page_PermissionFilter>;
  none?: InputMaybe<Page_PermissionFilter>;
  some?: InputMaybe<Page_PermissionFilter>;
};

/** Pages relation input */
export type PagesBlocksManyRelationInput = {
  connect?: InputMaybe<Array<BlockKeyFilter>>;
};

/** Pages relation input */
export type PagesBlocksRelationInput = {
  connect?: InputMaybe<Array<BlockKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Pages_BlockCreateInput>>>;
};

/** Pages relation input */
export type PagesBlocksUpdateRelationInput = {
  connect?: InputMaybe<Array<BlockKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Pages_BlockCreateInput>>>;
  disconnect?: InputMaybe<Array<BlockKeyFilter>>;
  reconnect?: InputMaybe<Array<BlockKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Pages_BlockUpdateInput>>>;
};

/** Pages relation input */
export type PagesCoursesManyRelationInput = {
  connect?: InputMaybe<CourseKeyFilter>;
};

/** Pages relation input */
export type PagesCoursesRelationInput = {
  connect?: InputMaybe<CourseKeyFilter>;
  create?: InputMaybe<Pages_CourseCreateInput>;
};

/** Pages relation input */
export type PagesCoursesUpdateRelationInput = {
  connect?: InputMaybe<CourseKeyFilter>;
  create?: InputMaybe<Pages_CourseCreateInput>;
  disconnect?: InputMaybe<CourseKeyFilter>;
  reconnect?: InputMaybe<CourseKeyFilter>;
  update?: InputMaybe<Pages_CourseUpdateInput>;
};

/** Blocks create input from pages */
export type Pages_BlockCreateInput = {
  canStudentEdit?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['JSON']>;
  pages?: InputMaybe<BlocksPagesRelationInput>;
  pagesId?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Blocks update input from pages */
export type Pages_BlockUpdateInput = {
  data: BlockUpdateInput;
  filter?: InputMaybe<BlockKeyFilter>;
};

/** Courses create input from pages */
export type Pages_CourseCreateInput = {
  /** Description of the Course */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the Course */
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<CoursesPagesRelationInput>;
};

/** Courses update input from pages */
export type Pages_CourseUpdateInput = {
  /** Description of the Course */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the Course */
  name?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<CoursesPagesUpdateRelationInput>;
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  authProfileId: Scalars['ID'];
  code: Scalars['String'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  authProfileId: Scalars['ID'];
  email: Scalars['String'];
};

export type PatternFunctionArguments = {
  escape?: InputMaybe<Scalars['String']>;
  pattern: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  _description?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PermissionFilter = {
  AND?: InputMaybe<Array<PermissionFilter>>;
  OR?: InputMaybe<Array<PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<RoleFilter>;
  roleId?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PermissionGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  appId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  permission?: InputMaybe<Array<GroupByField>>;
  resource?: InputMaybe<Array<GroupByField>>;
  resourceType?: InputMaybe<Array<GroupByField>>;
  role?: InputMaybe<RoleGroupByQuery>;
  roleId?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  action?: InputMaybe<Scalars['String']>;
  applicationName?: InputMaybe<Scalars['String']>;
  resource?: InputMaybe<Scalars['String']>;
  resourceType?: InputMaybe<PermissionResourceTypeEnum>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  __typename?: 'PermissionListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permission>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  __typename?: 'PermissionPayload';
  mutation: MutationType;
  node?: Maybe<Permission>;
  previousValues?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PermissionRelationFilter = {
  every?: InputMaybe<PermissionFilter>;
  none?: InputMaybe<PermissionFilter>;
  some?: InputMaybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Custom = 'custom',
  Data = 'data'
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PermissionFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

export type Permission_PermissionFilter = {
  AND?: InputMaybe<Array<Permission_PermissionFilter>>;
  OR?: InputMaybe<Array<Permission_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<Role_PermissionFilter>;
  roleId?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Permission_PermissionRelationFilter = {
  every?: InputMaybe<Permission_PermissionFilter>;
  none?: InputMaybe<Permission_PermissionFilter>;
  some?: InputMaybe<Permission_PermissionFilter>;
};

/** custom permissions input */
export type PermissionsCustom = {
  data?: InputMaybe<PermissionsCustomData>;
  logic?: InputMaybe<PermissionsCustomLogic>;
  settings?: InputMaybe<PermissionsCustomSettings>;
  users?: InputMaybe<PermissionsCustomUsers>;
};

export type PermissionsCustomData = {
  schemaManagement?: InputMaybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: InputMaybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogic = {
  deploy?: InputMaybe<PermissionsCustomLogicDeploy>;
  invoke?: InputMaybe<PermissionsCustomLogicInvoke>;
  logs?: InputMaybe<PermissionsCustomLogicLogs>;
  view?: InputMaybe<PermissionsCustomLogicView>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: InputMaybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: InputMaybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  Blocks?: InputMaybe<PermissionsDataBlocks>;
  Courses?: InputMaybe<PermissionsDataCourses>;
  Files?: InputMaybe<PermissionsDataFiles>;
  Pages?: InputMaybe<PermissionsDataPages>;
  Roles?: InputMaybe<PermissionsDataRoles>;
  Users?: InputMaybe<PermissionsDataUsers>;
};

export type PermissionsDataBlocks = {
  create?: InputMaybe<PermissionsDataBlocksCreate>;
  delete?: InputMaybe<PermissionsDataBlocksDelete>;
  destroy?: InputMaybe<PermissionsDataBlocksDestroy>;
  read?: InputMaybe<PermissionsDataBlocksRead>;
  update?: InputMaybe<PermissionsDataBlocksUpdate>;
};

export type PermissionsDataBlocksCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataBlocksDelete = {
  allow: Scalars['Boolean'];
  restore?: InputMaybe<Scalars['Boolean']>;
  review?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsDataBlocksDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataBlocksRead = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<BlockFieldsPermissions>;
  filter?: InputMaybe<Block_PermissionFilter>;
};

export type PermissionsDataBlocksUpdate = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<BlockFieldsPermissions>;
  filter?: InputMaybe<Block_PermissionFilter>;
};

export type PermissionsDataCourses = {
  create?: InputMaybe<PermissionsDataCoursesCreate>;
  delete?: InputMaybe<PermissionsDataCoursesDelete>;
  destroy?: InputMaybe<PermissionsDataCoursesDestroy>;
  read?: InputMaybe<PermissionsDataCoursesRead>;
  update?: InputMaybe<PermissionsDataCoursesUpdate>;
};

export type PermissionsDataCoursesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCoursesDelete = {
  allow: Scalars['Boolean'];
  restore?: InputMaybe<Scalars['Boolean']>;
  review?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsDataCoursesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCoursesRead = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<CourseFieldsPermissions>;
  filter?: InputMaybe<Course_PermissionFilter>;
};

export type PermissionsDataCoursesUpdate = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<CourseFieldsPermissions>;
  filter?: InputMaybe<Course_PermissionFilter>;
};

export type PermissionsDataFiles = {
  create?: InputMaybe<PermissionsDataFilesCreate>;
  delete?: InputMaybe<PermissionsDataFilesDelete>;
  destroy?: InputMaybe<PermissionsDataFilesDestroy>;
  read?: InputMaybe<PermissionsDataFilesRead>;
  update?: InputMaybe<PermissionsDataFilesUpdate>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean'];
  restore?: InputMaybe<Scalars['Boolean']>;
  review?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataPages = {
  create?: InputMaybe<PermissionsDataPagesCreate>;
  delete?: InputMaybe<PermissionsDataPagesDelete>;
  destroy?: InputMaybe<PermissionsDataPagesDestroy>;
  read?: InputMaybe<PermissionsDataPagesRead>;
  update?: InputMaybe<PermissionsDataPagesUpdate>;
};

export type PermissionsDataPagesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataPagesDelete = {
  allow: Scalars['Boolean'];
  restore?: InputMaybe<Scalars['Boolean']>;
  review?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsDataPagesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataPagesRead = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<PageFieldsPermissions>;
  filter?: InputMaybe<Page_PermissionFilter>;
};

export type PermissionsDataPagesUpdate = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<PageFieldsPermissions>;
  filter?: InputMaybe<Page_PermissionFilter>;
};

export type PermissionsDataRoles = {
  create?: InputMaybe<PermissionsDataRolesCreate>;
  delete?: InputMaybe<PermissionsDataRolesDelete>;
  destroy?: InputMaybe<PermissionsDataRolesDestroy>;
  read?: InputMaybe<PermissionsDataRolesRead>;
  update?: InputMaybe<PermissionsDataRolesUpdate>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean'];
  restore?: InputMaybe<Scalars['Boolean']>;
  review?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataUsers = {
  create?: InputMaybe<PermissionsDataUsersCreate>;
  delete?: InputMaybe<PermissionsDataUsersDelete>;
  destroy?: InputMaybe<PermissionsDataUsersDestroy>;
  read?: InputMaybe<PermissionsDataUsersRead>;
  update?: InputMaybe<PermissionsDataUsersUpdate>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean'];
  restore?: InputMaybe<Scalars['Boolean']>;
  review?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  custom?: InputMaybe<PermissionsCustom>;
  data?: InputMaybe<PermissionsData>;
};

export type Query = {
  __typename?: 'Query';
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  /** @deprecated No longer supported. Use `system.asyncSessionStatus` instead. */
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  block?: Maybe<Block>;
  blocksList: BlockListResponse;
  companyName?: Maybe<Scalars['String']>;
  course?: Maybe<Course>;
  coursesList: CourseListResponse;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  file?: Maybe<File>;
  /** @deprecated No longer supported. Use `fileUploadSignInfo` instead. */
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Page>;
  pagesList: PageListResponse;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  viewDryRun?: Maybe<ViewDryRunOutput>;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};


export type QueryApiTokenArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryApiTokensListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryApplicationArgs = {
  id: Scalars['String'];
};


export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String'];
};


export type QueryAuthenticationProfileArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAuthenticationProfilesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type QueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  by?: InputMaybe<BillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type QueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<BillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type QueryBlockArgs = {
  id?: InputMaybe<Scalars['ID']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlocksListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<BlockGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<BlockOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<BlockSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCoursesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CourseFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<CourseGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<CourseOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CourseSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDeployStatusArgs = {
  buildName: Scalars['String'];
};


export type QueryEnvironmentVariableArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEnvironmentVariablesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFileArgs = {
  fileId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFilesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<FunctionInfoOrderBy>>>;
};


export type QueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['DateTime']>;
  functionName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPagesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<PageGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<PageOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PageSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRolesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoleSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTableArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryTableFieldArgs = {
  id: Scalars['ID'];
};


export type QueryTablesListArgs = {
  filter?: InputMaybe<TableListFilter>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUserBillingConfigurationArgs = {
  kind?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  region?: InputMaybe<Scalars['String']>;
};


export type QueryUsersListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryViewDryRunArgs = {
  sql: Scalars['String'];
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  authProfileId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  refreshToken: Scalars['String'];
};

/** Relation */
export type Relation = {
  __typename?: 'Relation';
  refField?: Maybe<TableField>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
  refFieldName?: Maybe<Scalars['String']>;
  refTable: Table;
  relationFieldName?: Maybe<Scalars['String']>;
  relationTableName?: Maybe<Scalars['String']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
  refFieldName?: InputMaybe<Scalars['String']>;
  refTableId: Scalars['ID'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']>;
  refFieldName?: InputMaybe<Scalars['String']>;
  refTableId?: InputMaybe<Scalars['ID']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Day = 'DAY',
  DayHour = 'DAY_HOUR',
  DayMicrosecond = 'DAY_MICROSECOND',
  DayMinute = 'DAY_MINUTE',
  DaySecond = 'DAY_SECOND',
  Hour = 'HOUR',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourMinute = 'HOUR_MINUTE',
  HourSecond = 'HOUR_SECOND',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  Week = 'WEEK',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type ResizeImageDirectiveCropOptions = {
  height: Scalars['Int'];
  offsetX?: InputMaybe<Scalars['Int']>;
  offsetY?: InputMaybe<Scalars['Int']>;
  width: Scalars['Int'];
};

export type ResizeImageDirectiveFlipOptions = {
  horizontally?: InputMaybe<Scalars['Boolean']>;
  vertically?: InputMaybe<Scalars['Boolean']>;
};

export type ResizeImageDirectiveResizeOptions = {
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Role = {
  __typename?: 'Role';
  _description?: Maybe<Scalars['String']>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  membersCount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<PermissionListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserListResponse>;
};


export type RoleApiTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type RoleAuthenticationProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type RolePermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Roles create input */
export type RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  apiTokens?: InputMaybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesManyRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  users?: InputMaybe<RolesUsersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['Boolean']>;
};

export type RoleFilter = {
  AND?: InputMaybe<Array<RoleFilter>>;
  OR?: InputMaybe<Array<RoleFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  apiTokens?: InputMaybe<ApiTokenRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<UserRelationFilter>;
};

export type RoleGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: RoleGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type RoleGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  apiTokens?: InputMaybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  permissions?: InputMaybe<PermissionGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  users?: InputMaybe<UserGroupByQuery>;
};

export type RoleKeyFilter = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  __typename?: 'RoleListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Role>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  __typename?: 'RoleManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Role>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Roles subscription payload */
export type RolePayload = {
  __typename?: 'RolePayload';
  mutation: MutationType;
  node?: Maybe<Role>;
  previousValues?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoleRelationFilter = {
  every?: InputMaybe<RoleFilter>;
  none?: InputMaybe<RoleFilter>;
  some?: InputMaybe<RoleFilter>;
};

export type RoleSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<RoleFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  systemType?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  apiTokens?: InputMaybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesUpdateRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersUpdateRelationInput>;
};

export type Role_PermissionFilter = {
  AND?: InputMaybe<Array<Role_PermissionFilter>>;
  OR?: InputMaybe<Array<Role_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  apiTokens?: InputMaybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfile_PermissionRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<Permission_PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<User_PermissionRelationFilter>;
};

export type Role_PermissionRelationFilter = {
  every?: InputMaybe<Role_PermissionFilter>;
  none?: InputMaybe<Role_PermissionFilter>;
  some?: InputMaybe<Role_PermissionFilter>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  disconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  reconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
  disconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileUpdateInput>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_UserUpdateInput>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  data: ApiTokenUpdateInput;
  filter?: InputMaybe<ApiTokenKeyFilter>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId?: InputMaybe<Scalars['String']>;
  databaseName?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  managementDomain?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  data: AuthenticationProfileUpdateInput;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  avatarId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

/** Schema Origin */
export type SchemaOrigin = {
  __typename?: 'SchemaOrigin';
  provider?: Maybe<Scalars['String']>;
  type: SchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type Setting = {
  __typename?: 'Setting';
  _description?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  currency?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  landingPageImage?: Maybe<File>;
  landingPageImageId?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  menuBarLogo?: Maybe<File>;
  menuBarLogoId?: Maybe<Scalars['String']>;
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  vanityUrl?: Maybe<Scalars['String']>;
};

export type SettingFilter = {
  AND?: InputMaybe<Array<SettingFilter>>;
  OR?: InputMaybe<Array<SettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<FileFilter>;
  landingPageImageId?: InputMaybe<StringPredicate>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<FileFilter>;
  menuBarLogoId?: InputMaybe<StringPredicate>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type SettingGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: SettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  bgColor?: InputMaybe<Array<GroupByField>>;
  buttonLinkColor?: InputMaybe<Array<GroupByField>>;
  containerColor?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  currency?: InputMaybe<Array<GroupByField>>;
  dateFormat?: InputMaybe<Array<GroupByField>>;
  landingPageImage?: InputMaybe<FileGroupByQuery>;
  landingPageImageId?: InputMaybe<Array<GroupByField>>;
  language?: InputMaybe<Array<GroupByField>>;
  leftNavColor?: InputMaybe<Array<GroupByField>>;
  menuBarBGColor?: InputMaybe<Array<GroupByField>>;
  menuBarIconsColor?: InputMaybe<Array<GroupByField>>;
  menuBarLogo?: InputMaybe<FileGroupByQuery>;
  menuBarLogoId?: InputMaybe<Array<GroupByField>>;
  passwordMinLength?: InputMaybe<Array<GroupByField>>;
  passwordRequireLowercase?: InputMaybe<Array<GroupByField>>;
  passwordRequireNumbers?: InputMaybe<Array<GroupByField>>;
  passwordRequireSpecial?: InputMaybe<Array<GroupByField>>;
  passwordRequireUppercase?: InputMaybe<Array<GroupByField>>;
  passwordUpdateInterval?: InputMaybe<Array<GroupByField>>;
  rememberDevice?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  userInterfaceStyle?: InputMaybe<Array<GroupByField>>;
  vanityUrl?: InputMaybe<Array<GroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  __typename?: 'SettingListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Setting>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LandingPageImageIdAsc = 'landingPageImageId_ASC',
  LandingPageImageIdDesc = 'landingPageImageId_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  MenuBarLogoIdAsc = 'menuBarLogoId_ASC',
  MenuBarLogoIdDesc = 'menuBarLogoId_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC'
}

/** Settings subscription payload */
export type SettingPayload = {
  __typename?: 'SettingPayload';
  mutation: MutationType;
  node?: Maybe<Setting>;
  previousValues?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SettingRelationFilter = {
  every?: InputMaybe<SettingFilter>;
  none?: InputMaybe<SettingFilter>;
  some?: InputMaybe<SettingFilter>;
};

export type SettingSort = {
  bgColor?: InputMaybe<SortOrder>;
  buttonLinkColor?: InputMaybe<SortOrder>;
  containerColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  currency?: InputMaybe<SortOrder>;
  dateFormat?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  landingPageImage?: InputMaybe<FileSort>;
  landingPageImageId?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  leftNavColor?: InputMaybe<SortOrder>;
  menuBarBGColor?: InputMaybe<SortOrder>;
  menuBarIconsColor?: InputMaybe<SortOrder>;
  menuBarLogo?: InputMaybe<FileSort>;
  menuBarLogoId?: InputMaybe<SortOrder>;
  passwordMinLength?: InputMaybe<SortOrder>;
  passwordRequireLowercase?: InputMaybe<SortOrder>;
  passwordRequireNumbers?: InputMaybe<SortOrder>;
  passwordRequireSpecial?: InputMaybe<SortOrder>;
  passwordRequireUppercase?: InputMaybe<SortOrder>;
  passwordUpdateInterval?: InputMaybe<SortOrder>;
  rememberDevice?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userInterfaceStyle?: InputMaybe<SortOrder>;
  vanityUrl?: InputMaybe<SortOrder>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  bgColor?: InputMaybe<Scalars['String']>;
  buttonLinkColor?: InputMaybe<Scalars['String']>;
  containerColor?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  dateFormat?: InputMaybe<Scalars['String']>;
  landingPageImageId?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  leftNavColor?: InputMaybe<Scalars['String']>;
  menuBarBGColor?: InputMaybe<Scalars['String']>;
  menuBarIconsColor?: InputMaybe<Scalars['String']>;
  menuBarLogoId?: InputMaybe<Scalars['String']>;
  passwordMinLength?: InputMaybe<Scalars['Int']>;
  passwordRequireLowercase?: InputMaybe<Scalars['Boolean']>;
  passwordRequireNumbers?: InputMaybe<Scalars['Boolean']>;
  passwordRequireSpecial?: InputMaybe<Scalars['Boolean']>;
  passwordRequireUppercase?: InputMaybe<Scalars['Boolean']>;
  passwordUpdateInterval?: InputMaybe<Scalars['Int']>;
  rememberDevice?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  userInterfaceStyle?: InputMaybe<Scalars['String']>;
  vanityUrl?: InputMaybe<Scalars['String']>;
};

export type Setting_PermissionFilter = {
  AND?: InputMaybe<Array<Setting_PermissionFilter>>;
  OR?: InputMaybe<Array<Setting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<File_PermissionFilter>;
  landingPageImageId?: InputMaybe<StringPredicate>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<File_PermissionFilter>;
  menuBarLogoId?: InputMaybe<StringPredicate>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type Setting_PermissionRelationFilter = {
  every?: InputMaybe<Setting_PermissionFilter>;
  none?: InputMaybe<Setting_PermissionFilter>;
  some?: InputMaybe<Setting_PermissionFilter>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  __typename?: 'SmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringPadFunctionArguments = {
  len: Scalars['Int'];
  str: Scalars['String'];
};

export type StringPredicate = {
  contains?: InputMaybe<Scalars['String']>;
  ends_with?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  not_contains?: InputMaybe<Scalars['String']>;
  not_ends_with?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<Scalars['String']>>;
  not_starts_with?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
};

export type StringPredicateHaving = {
  AND?: InputMaybe<Array<StringPredicateHaving>>;
  OR?: InputMaybe<Array<StringPredicateHaving>>;
  contains?: InputMaybe<Scalars['String']>;
  ends_with?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']>;
  not_contains?: InputMaybe<Scalars['String']>;
  not_ends_with?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<Scalars['String']>>;
  not_starts_with?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING'
}

export type Subscription = {
  __typename?: 'Subscription';
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  Blocks?: Maybe<BlockPayload>;
  Courses?: Maybe<CoursePayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Files?: Maybe<FilePayload>;
  Pages?: Maybe<PagePayload>;
  Permissions?: Maybe<PermissionPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  Users?: Maybe<UserPayload>;
};


export type SubscriptionApiTokensArgs = {
  filter?: InputMaybe<ApiTokenSubscriptionFilter>;
};


export type SubscriptionAuthenticationProfilesArgs = {
  filter?: InputMaybe<AuthenticationProfileSubscriptionFilter>;
};


export type SubscriptionAuthenticationSettingsArgs = {
  filter?: InputMaybe<AuthenticationSettingSubscriptionFilter>;
};


export type SubscriptionBlocksArgs = {
  filter?: InputMaybe<BlockSubscriptionFilter>;
};


export type SubscriptionCoursesArgs = {
  filter?: InputMaybe<CourseSubscriptionFilter>;
};


export type SubscriptionEnvironmentVariablesArgs = {
  filter?: InputMaybe<EnvironmentVariableSubscriptionFilter>;
};


export type SubscriptionFilesArgs = {
  filter?: InputMaybe<FileSubscriptionFilter>;
};


export type SubscriptionPagesArgs = {
  filter?: InputMaybe<PageSubscriptionFilter>;
};


export type SubscriptionPermissionsArgs = {
  filter?: InputMaybe<PermissionSubscriptionFilter>;
};


export type SubscriptionRolesArgs = {
  filter?: InputMaybe<RoleSubscriptionFilter>;
};


export type SubscriptionSettingsArgs = {
  filter?: InputMaybe<SettingSubscriptionFilter>;
};


export type SubscriptionUsersArgs = {
  filter?: InputMaybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  len?: InputMaybe<Scalars['Int']>;
  pos: Scalars['Int'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type SuccessWithMessageResponse = {
  __typename?: 'SuccessWithMessageResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  __typename?: 'SwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Application */
export type SystemApplication = {
  __typename?: 'SystemApplication';
  appType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  __typename?: 'SystemApplicationListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemApplication>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

export type SystemAsyncSessionStatusResponse = {
  __typename?: 'SystemAsyncSessionStatusResponse';
  result?: Maybe<Scalars['JSON']>;
  status: Scalars['String'];
};

export type SystemBillingCurrentPlanResponse = {
  __typename?: 'SystemBillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<SystemWorkspaceStatus>;
  trialEnd?: Maybe<Scalars['DateTime']>;
};

export enum SystemBillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemBillingDetailsResponse = {
  __typename?: 'SystemBillingDetailsResponse';
  brand?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
  origin: SystemBillingDetailsOrigin;
};

/** BillingDetailsUpdateMutationInput */
export type SystemBillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type SystemBillingInvoiceItem = {
  __typename?: 'SystemBillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endingBalance?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoicePdf?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  organization?: Maybe<SystemBillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  periodStart?: Maybe<Scalars['DateTime']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  workspace?: Maybe<SystemBillingInvoiceItemWorkspaceInfo>;
};

export type SystemBillingInvoiceItemOrganizationInfo = {
  __typename?: 'SystemBillingInvoiceItemOrganizationInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemBillingInvoiceItemPlanInfo = {
  __typename?: 'SystemBillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemBillingInvoiceItemWorkspaceInfo = {
  __typename?: 'SystemBillingInvoiceItemWorkspaceInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum SystemBillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Workspace = 'WORKSPACE'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  __typename?: 'SystemBillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
};

export type SystemBillingLimitMetricItem = {
  __typename?: 'SystemBillingLimitMetricItem';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  tooltip?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type SystemBillingMetricOverageItem = {
  __typename?: 'SystemBillingMetricOverageItem';
  value?: Maybe<Scalars['Float']>;
  warning?: Maybe<Scalars['String']>;
};

export type SystemBillingMetricUsageItem = {
  __typename?: 'SystemBillingMetricUsageItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  overage?: Maybe<SystemBillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  __typename?: 'SystemBillingMetricUsageQuotaItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  __typename?: 'SystemBillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  __typename?: 'SystemBillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
};

export type SystemBillingNextPlanResponse = {
  __typename?: 'SystemBillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SystemBillingPlanBaseInfo = {
  __typename?: 'SystemBillingPlanBaseInfo';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SystemBillingPlanBaseScalarInfo = {
  __typename?: 'SystemBillingPlanBaseScalarInfo';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SystemBillingPlanLimitMetricItem = {
  __typename?: 'SystemBillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']>;
  hardLimit?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  overagePrice?: Maybe<Scalars['Int']>;
  softLimit?: Maybe<Scalars['Float']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM'
}

export type SystemCacheEvictResponse = {
  __typename?: 'SystemCacheEvictResponse';
  evicted: Array<Maybe<Scalars['String']>>;
};

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput = {
  __typename?: 'SystemCiStatusOutput';
  migrations?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
};

/** CloudLogs Entry */
export type SystemCloudLogsEntry = {
  __typename?: 'SystemCloudLogsEntry';
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  __typename?: 'SystemCustomTableField';
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  __typename?: 'SystemDateFieldTypeAttributes';
  format: Scalars['String'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  __typename?: 'SystemDeployDataResponse';
  buildName: Scalars['String'];
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type SystemDeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mode?: InputMaybe<SystemDeployModeEnum>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum SystemDeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  __typename?: 'SystemDeployStatusResult';
  message?: Maybe<Scalars['String']>;
  status: SystemDeployStatusEnum;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String'];
  options?: InputMaybe<SystemDeployOptions>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  __typename?: 'SystemEnvironmentBackupListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<EnvironmentBackupItem>;
};

export type SystemEnvironmentMember = {
  __typename?: 'SystemEnvironmentMember';
  avatar?: Maybe<SystemEnvironmentMemberAvatar>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList>;
  roles?: Maybe<SystemEnvironmentMemberRolesList>;
  status: Scalars['String'];
};

export type SystemEnvironmentMemberAvatar = {
  __typename?: 'SystemEnvironmentMemberAvatar';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SystemEnvironmentMemberFilter = {
  email: Scalars['String'];
};

export type SystemEnvironmentMemberPermission = {
  __typename?: 'SystemEnvironmentMemberPermission';
  permission?: Maybe<Scalars['JSON']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

export type SystemEnvironmentMemberPermissionsList = {
  __typename?: 'SystemEnvironmentMemberPermissionsList';
  count: Scalars['Int'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission>>;
};

export type SystemEnvironmentMemberRole = {
  __typename?: 'SystemEnvironmentMemberRole';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate = {
  equals?: InputMaybe<Scalars['ID']>;
  not_equals?: InputMaybe<Scalars['ID']>;
};

export type SystemEnvironmentMemberRolesList = {
  __typename?: 'SystemEnvironmentMemberRolesList';
  count: Scalars['Int'];
  items?: Maybe<Array<SystemEnvironmentMemberRole>>;
};

export type SystemEnvironmentMemberUpdateData = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SystemEnvironmentMembersFilter = {
  email: Scalars['String'];
};

export type SystemEnvironmentMembersListFilter = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<SystemEnvironmentMemberRoleIdFilterPredicate>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse = {
  __typename?: 'SystemEnvironmentMembersListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemEnvironmentMember>;
};

export type SystemEnvironmentMembersListSort = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isOwner?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type SystemEnvironmentRoleBaseInfo = {
  __typename?: 'SystemEnvironmentRoleBaseInfo';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SystemEnvironmentRoleList = {
  __typename?: 'SystemEnvironmentRoleList';
  assignedRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
  environmentId: Scalars['String'];
  environmentName: Scalars['String'];
  exists?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
};

export type SystemEnvironmentSettings = {
  __typename?: 'SystemEnvironmentSettings';
  deleteLock?: Maybe<Scalars['Boolean']>;
  fileManagementProvider?: Maybe<SystemFileManagerProviderTypeEnum>;
  introspection?: Maybe<Scalars['Boolean']>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  __typename?: 'SystemEnvironmentsListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<EnvironmentItem>;
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  __typename?: 'SystemFieldDataFeatures';
  create: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  __typename?: 'SystemFieldSchemaFeatures';
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field types */
export enum SystemFieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemGeoFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  expiration?: InputMaybe<Scalars['Int']>;
  fieldSize?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
  isBigInt?: InputMaybe<Scalars['Boolean']>;
  listOptions?: InputMaybe<Array<Scalars['String']>>;
  maxSize?: InputMaybe<Scalars['Int']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minValue?: InputMaybe<Scalars['Float']>;
  precision?: InputMaybe<Scalars['Int']>;
  srid?: InputMaybe<Scalars['Int']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']>>;
};

export type SystemFileBaseInfo = {
  __typename?: 'SystemFileBaseInfo';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  __typename?: 'SystemFileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

export enum SystemFileManagerProviderTypeEnum {
  Aws = 'aws',
  Filestack = 'filestack',
  Uploadcare = 'uploadcare'
}

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** FileUploadByUrlInput */
export type SystemFileUploadByUrlInput = {
  url: Scalars['String'];
};

/** FileUploadByUrlResponse */
export type SystemFileUploadByUrlResponse = {
  __typename?: 'SystemFileUploadByUrlResponse';
  fileId: Scalars['String'];
  meta: Scalars['JSON'];
};

export type SystemFileUploadSignInfo = AwsSignInfoResponse | FileStackSignInfoResponse | UploadcareSignInfoResponse;

export type SystemFrontendPlanIdItem = {
  __typename?: 'SystemFrontendPlanIdItem';
  id?: Maybe<Scalars['ID']>;
};

/** FunctionInfo */
export type SystemFunctionInfo = {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  name: Scalars['String'];
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']>;
  functionType?: InputMaybe<SystemFunctionType>;
  name?: InputMaybe<Scalars['String']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  __typename?: 'SystemFunctionListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemFunctionInfo>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionResolverInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  gqlType: Scalars['String'];
  name: Scalars['String'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTaskInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  name: Scalars['String'];
  scheduleExpression?: Maybe<Scalars['String']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTriggerInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  name: Scalars['String'];
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionWebhookInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  httpMethod: Scalars['String'];
  name: Scalars['String'];
  workspaceFullPath: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  __typename?: 'SystemGenerateEnvironmentOutput';
  url?: Maybe<Scalars['String']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  __typename?: 'SystemGeoFieldTypeAttributes';
  format: Scalars['String'];
  srid?: Maybe<Scalars['Int']>;
};

export type SystemInboxEventDetailsUnion = SystemInboxEventEnvironmentInvitationDetails | SystemInboxEventNotificationDetailsType | SystemInboxEventOrganizationInvitationDetails | SystemInboxEventWorkspaceTransferDetails;

export type SystemInboxEventEnvironmentInvitationDetails = {
  __typename?: 'SystemInboxEventEnvironmentInvitationDetails';
  environmentName?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

export type SystemInboxEventInvitedBy = {
  __typename?: 'SystemInboxEventInvitedBy';
  avatar?: Maybe<GraphQlFileItemResponse>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type SystemInboxEventItem = {
  __typename?: 'SystemInboxEventItem';
  createdAt: Scalars['DateTime'];
  details?: Maybe<SystemInboxEventDetailsUnion>;
  id: Scalars['ID'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  type?: Maybe<SystemInboxEventTypeEnum>;
};

export type SystemInboxEventNotificationDetailsType = {
  __typename?: 'SystemInboxEventNotificationDetailsType';
  details?: Maybe<Scalars['JSON']>;
  kind?: Maybe<Scalars['String']>;
};

export type SystemInboxEventOrganization = {
  __typename?: 'SystemInboxEventOrganization';
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SystemInboxEventOrganizationInvitationDetails = {
  __typename?: 'SystemInboxEventOrganizationInvitationDetails';
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  organization?: Maybe<SystemInboxEventOrganization>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']>;
};

export enum SystemInboxEventStatusEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Sent = 'sent'
}

export type SystemInboxEventTransferFinalizer = {
  __typename?: 'SystemInboxEventTransferFinalizer';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type SystemInboxEventTransferParticipant = {
  __typename?: 'SystemInboxEventTransferParticipant';
  avatar?: Maybe<GraphQlFileItemResponse>;
  identity: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type: SystemTransferParticipantType;
};

export enum SystemInboxEventTypeEnum {
  EnvironmentInvitation = 'EnvironmentInvitation',
  Notification = 'Notification',
  OrganizationInvitation = 'OrganizationInvitation',
  WorkspaceTransfer = 'WorkspaceTransfer'
}

export type SystemInboxEventWorkspace = {
  __typename?: 'SystemInboxEventWorkspace';
  apiHost?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID'];
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemInboxEventWorkspaceTransferDetails = {
  __typename?: 'SystemInboxEventWorkspaceTransferDetails';
  finalizer?: Maybe<SystemInboxEventTransferFinalizer>;
  from?: Maybe<SystemInboxEventTransferParticipant>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  to?: Maybe<SystemInboxEventTransferParticipant>;
  uuid?: Maybe<Scalars['String']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse = {
  __typename?: 'SystemInboxEventsListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemInboxEventItem>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  columns: Array<SystemTableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tableId: Scalars['ID'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  columns?: InputMaybe<Array<SystemTableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TableIndexType>;
};

/** Invite members input */
export type SystemInviteMembersInput = {
  recipients: Array<SystemInviteRecipientInput>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['ID']>>;
};

/** Invited By Name */
export type SystemInvitedByName = {
  __typename?: 'SystemInvitedByName';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String'];
  inputArgs?: InputMaybe<Scalars['String']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  __typename?: 'SystemInvokeFunctionResponse';
  responseData: Scalars['String'];
};

/** LogsListFiltered Response */
export type SystemLogsListFilteredResponse = {
  __typename?: 'SystemLogsListFilteredResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  nextToken?: Maybe<Scalars['String']>;
};

/**
 * Member - list of workspaces you are member of
 * Owner - list of workspaces you are owner of
 * OrganizationUser - list of organizations you are part of
 */
export type SystemMemberAccountDeleteDetails = {
  __typename?: 'SystemMemberAccountDeleteDetails';
  member?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
  organizationUser?: Maybe<Array<Maybe<SystemOrganizationBaseItem>>>;
  owner?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemMemberAccountDeleteResponse = {
  __typename?: 'SystemMemberAccountDeleteResponse';
  details?: Maybe<SystemMemberAccountDeleteDetails>;
  success: Scalars['Boolean'];
};

export type SystemMemberAccountInfo = {
  __typename?: 'SystemMemberAccountInfo';
  aboutMe?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  githubUsername?: Maybe<Scalars['String']>;
  isDeveloper?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
  linkedInUsername?: Maybe<Scalars['String']>;
  projectDescription?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SystemMemberAccountUpsertDataInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<GraphQlCreateFileItemInput>;
  city?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  learningMode?: InputMaybe<Scalars['Boolean']>;
  linkedInUsername?: InputMaybe<Scalars['String']>;
  projectDescription?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SystemUserType>;
  website?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

/** Member Invitation */
export type SystemMemberInvitation = {
  __typename?: 'SystemMemberInvitation';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput = {
  accepted: Scalars['Boolean'];
  id: Scalars['String'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse = {
  __typename?: 'SystemMemberInvitationAcceptResponse';
  success: Scalars['Boolean'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput = {
  email: Scalars['String'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput = {
  email: Scalars['ID'];
};

export type SystemMemberInvitationsList = {
  __typename?: 'SystemMemberInvitationsList';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation>>>;
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput = {
  cardToken?: InputMaybe<Scalars['String']>;
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  __typename?: 'SystemMissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type SystemMutation = {
  __typename?: 'SystemMutation';
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingContextCacheEvict?: Maybe<SystemCacheEvictResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetailsUpdate, system.organizationPaymentDetailsUpdate or system.workspacePaymentDetailsUpdate` instead. */
  billingDetailsUpdate?: Maybe<SystemBillingDetailsResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentMemberDelete: SuccessResponse;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  fileUploadByUrl: SystemFileUploadByUrlResponse;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails>>;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  memberAccountDelete?: Maybe<SystemMemberAccountDeleteResponse>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo>;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse;
  memberInvitationCancel?: Maybe<SuccessResponse>;
  memberInvitationResend?: Maybe<SuccessResponse>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  notificationUpdate?: Maybe<SuccessResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationUserUpdate?: Maybe<SystemOrganizationUserInfo>;
  organizationWorkspaceUserRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceUserShare?: Maybe<SuccessResponse>;
  prepareDeploy: SystemDeployDataResponse;
  rolePermissionsCacheEvict?: Maybe<SystemCacheEvictResponse>;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspacePaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  workspaceTransferAbort?: Maybe<SuccessResponse>;
  workspaceTransferAccept?: Maybe<SuccessResponse>;
  workspaceTransferNotificationSend?: Maybe<SuccessResponse>;
  workspaceTransferRegister?: Maybe<SuccessWithMessageResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};


export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};


export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};


export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};


export type SystemMutationBillingContextCacheEvictArgs = {
  keys: Array<Scalars['String']>;
};


export type SystemMutationBillingDetailsUpdateArgs = {
  data: SystemBillingDetailsUpdateMutationInput;
};


export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};


export type SystemMutationCiCommitArgs = {
  build?: InputMaybe<Scalars['String']>;
  migrationNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mode?: InputMaybe<SystemCiCommitMode>;
};


export type SystemMutationDeployArgs = {
  data?: InputMaybe<SystemDeployingBuildInput>;
};


export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentBranchArgs = {
  mode?: InputMaybe<SystemBranchEnvironmentMode>;
  name: Scalars['String'];
};


export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentMemberDeleteArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentMemberUpdateArgs = {
  data?: InputMaybe<SystemEnvironmentMemberUpdateData>;
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentRestoreArgs = {
  backup: Scalars['String'];
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentSetupArgs = {
  data?: InputMaybe<EnvironmentSetupInput>;
};


export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};


export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};


export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};


export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};


export type SystemMutationFileUploadByUrlArgs = {
  data: SystemFileUploadByUrlInput;
};


export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};


export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};


export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};


export type SystemMutationInviteMembersArgs = {
  data: SystemInviteMembersInput;
  force?: InputMaybe<Scalars['Boolean']>;
};


export type SystemMutationInvokeArgs = {
  data?: InputMaybe<SystemInvokeData>;
};


export type SystemMutationMemberAccountUpsertArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationMemberInvitationAcceptArgs = {
  data: SystemMemberInvitationAcceptInput;
};


export type SystemMutationMemberInvitationCancelArgs = {
  data: SystemMemberInvitationCancelInput;
};


export type SystemMutationMemberInvitationResendArgs = {
  data: SystemMemberInvitationResendInput;
};


export type SystemMutationMemberPaymentDetailsUpdateArgs = {
  data: SystemMemberPaymentDetailsUpdateMutationInput;
};


export type SystemMutationNotificationUpdateArgs = {
  id: Scalars['String'];
  status: NotificationStatusType;
};


export type SystemMutationOrganizationInviteUserArgs = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['ID'];
  role: Scalars['String'];
  workspaceRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationWorkspaceWithEnvironmentRolesInput>>>;
};


export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String'];
};


export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String'];
};


export type SystemMutationOrganizationPaymentDetailsUpdateArgs = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput;
};


export type SystemMutationOrganizationUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SystemOrganizationTypeEnum>;
};


export type SystemMutationOrganizationUserRemoveArgs = {
  email: Scalars['String'];
  organizationId: Scalars['String'];
};


export type SystemMutationOrganizationUserUpdateArgs = {
  email: Scalars['String'];
  organizationId: Scalars['ID'];
  role: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceUserRemoveArgs = {
  email: Scalars['String'];
  workspaceId: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceUserShareArgs = {
  email: Scalars['String'];
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationWorkspaceEnvironmentRolesInput>>>;
  workspaceId: Scalars['ID'];
};


export type SystemMutationRolePermissionsCacheEvictArgs = {
  keys: Array<Scalars['String']>;
};


export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};


export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};


export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};


export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};


export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};


export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};


export type SystemMutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
};


export type SystemMutationWorkspacePaymentDetailsUpdateArgs = {
  data?: InputMaybe<SystemWorkspacePaymentDetailsUpdateMutationInput>;
};


export type SystemMutationWorkspaceTransferAbortArgs = {
  workspaceId: Scalars['ID'];
};


export type SystemMutationWorkspaceTransferAcceptArgs = {
  cardToken?: InputMaybe<Scalars['String']>;
  planId: Scalars['ID'];
  workspaceId: Scalars['ID'];
  workspaceName?: InputMaybe<Scalars['String']>;
};


export type SystemMutationWorkspaceTransferNotificationSendArgs = {
  workspaceId: Scalars['ID'];
};


export type SystemMutationWorkspaceTransferRegisterArgs = {
  to: Scalars['String'];
  workspaceId: Scalars['ID'];
};


export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  __typename?: 'SystemNumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  format: Scalars['String'];
  isBigInt?: Maybe<Scalars['Boolean']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type SystemOrganizationBaseItem = {
  __typename?: 'SystemOrganizationBaseItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SystemFileBaseInfo>;
  name: Scalars['String'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationInvitation = {
  __typename?: 'SystemOrganizationInvitation';
  accepted?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  emailFrom: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  firstNameFrom?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  lastNameFrom?: Maybe<Scalars['String']>;
  organization: SystemOrganizationBaseItem;
  role: Scalars['String'];
};

export type SystemOrganizationItem = {
  __typename?: 'SystemOrganizationItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SystemOrganizationItemImage>;
  name: Scalars['String'];
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
};

export type SystemOrganizationItemImage = {
  __typename?: 'SystemOrganizationItemImage';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
  organizationId: Scalars['ID'];
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Community = 'community',
  Company = 'company'
}

export type SystemOrganizationUserInfo = {
  __typename?: 'SystemOrganizationUserInfo';
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  status: Scalars['String'];
  workspaces?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

/** environmentId to add to with roles (array of ids). */
export type SystemOrganizationWorkspaceEnvironmentRolesInput = {
  environmentId: Scalars['String'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type SystemOrganizationWorkspaceItem = {
  __typename?: 'SystemOrganizationWorkspaceItem';
  apiHost?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String'];
  name: Scalars['String'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export type SystemOrganizationWorkspaceWithEnvironmentRolesInput = {
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationWorkspaceEnvironmentRolesInput>>>;
  workspaceId: Scalars['ID'];
};

/** SystemOrganizationsListAllResponse output */
export type SystemOrganizationsListAllResponse = {
  __typename?: 'SystemOrganizationsListAllResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemOrganizationItem>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  __typename?: 'SystemOrganizationsListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemOrganizationItem>;
};

export enum SystemPaymentDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemPaymentDetailsResponse = {
  __typename?: 'SystemPaymentDetailsResponse';
  brand?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
  origin: SystemPaymentDetailsOrigin;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  __typename?: 'SystemPlanEnvironmentOutput';
  url?: Maybe<Scalars['String']>;
};

export type SystemQuery = {
  __typename?: 'SystemQuery';
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  asyncSessionStatus?: Maybe<SystemAsyncSessionStatusResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  ciGenerateAsync?: Maybe<AsyncSession>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentMember?: Maybe<SystemEnvironmentMember>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  fileUploadSignInfo?: Maybe<SystemFileUploadSignInfo>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  getFrontendPlanId?: Maybe<SystemFrontendPlanIdItem>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated No longer supported. Use `system.logsListFiltered` instead. */
  logsList?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  logsListFiltered?: Maybe<SystemLogsListFilteredResponse>;
  memberAccount?: Maybe<SystemMemberAccountInfo>;
  memberBillingHistory: SystemBillingInvoicesListResponse;
  memberInvitation?: Maybe<SystemMemberInvitation>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationBillingHistory: SystemBillingInvoicesListResponse;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationsListAll?: Maybe<SystemOrganizationsListAllResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  userInvitationsList?: Maybe<SystemUserInvitationList>;
  viewDryRun?: Maybe<SystemViewDryRunOutput>;
  workspaceBillingHistory: SystemBillingInvoicesListResponse;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  workspaceTransferInfo?: Maybe<SystemWorkspaceTransferItem>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse>;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};


export type SystemQueryApplicationArgs = {
  id: Scalars['String'];
};


export type SystemQueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String'];
};


export type SystemQueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type SystemQueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  by?: InputMaybe<SystemBillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SystemQueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<SystemBillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type SystemQueryCiGenerateArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']>;
  tables?: InputMaybe<Array<Scalars['String']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']>;
};


export type SystemQueryCiGenerateAsyncArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']>;
  tables?: InputMaybe<Array<Scalars['String']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']>;
};


export type SystemQueryCiPlanArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']>;
  tables?: InputMaybe<Array<Scalars['String']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']>;
};


export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String'];
};


export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: InputMaybe<Scalars['String']>;
};


export type SystemQueryEnvironmentMemberArgs = {
  filter?: InputMaybe<SystemEnvironmentMemberFilter>;
};


export type SystemQueryEnvironmentMembersListArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SystemEnvironmentMembersListSort>>;
};


export type SystemQueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SystemFunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<SystemFunctionInfoOrderBy>>>;
};


export type SystemQueryGetEnvironmentRolesArgs = {
  email?: InputMaybe<Scalars['String']>;
  workspaceId: Scalars['String'];
};


export type SystemQueryInboxEventsListArgs = {
  filter?: InputMaybe<InboxEventsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SystemQueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['DateTime']>;
  functionName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
};


export type SystemQueryLogsListArgs = {
  applicationId?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['DateTime']>;
  functionName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
};


export type SystemQueryLogsListFilteredArgs = {
  endTime?: InputMaybe<Scalars['DateTime']>;
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  resource?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  startToken?: InputMaybe<Scalars['String']>;
};


export type SystemQueryMemberBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hideOrganizationInvoices?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SystemQueryMemberInvitationArgs = {
  id: Scalars['String'];
};


export type SystemQueryOrganizationBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hideWorkspaceInvoices?: InputMaybe<Scalars['Boolean']>;
  organizationId: Scalars['ID'];
  skip?: InputMaybe<Scalars['Int']>;
};


export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String'];
};


export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String'];
};


export type SystemQueryOrganizationPaymentDetailsArgs = {
  organizationId: Scalars['ID'];
};


export type SystemQueryTableArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type SystemQueryTableFieldArgs = {
  id: Scalars['ID'];
};


export type SystemQueryTablesListArgs = {
  filter?: InputMaybe<SystemTableListFilter>;
};


export type SystemQueryUserBillingConfigurationArgs = {
  kind?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  region?: InputMaybe<Scalars['String']>;
};


export type SystemQueryViewDryRunArgs = {
  sql: Scalars['String'];
};


export type SystemQueryWorkspaceBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SystemQueryWorkspaceTransferInfoArgs = {
  workspaceId: Scalars['ID'];
};

/** Relation */
export type SystemRelation = {
  __typename?: 'SystemRelation';
  refField?: Maybe<SystemTableField>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
  refFieldName?: Maybe<Scalars['String']>;
  refTable: SystemTable;
  relationFieldName?: Maybe<Scalars['String']>;
  relationTableName?: Maybe<Scalars['String']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
  refFieldName?: InputMaybe<Scalars['String']>;
  refTableId: Scalars['ID'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']>;
  refFieldName?: InputMaybe<Scalars['String']>;
  refTableId?: InputMaybe<Scalars['ID']>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  __typename?: 'SystemSchemaOrigin';
  provider?: Maybe<Scalars['String']>;
  type: SystemSchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  __typename?: 'SystemSmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  __typename?: 'SystemSwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Table */
export type SystemTable = {
  __typename?: 'SystemTable';
  application?: Maybe<SystemApplication>;
  attributes?: Maybe<SystemTableAttributes>;
  dataFeatures: SystemTableDataFeatures;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<SystemTableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<SystemTableField>>>;
  id: Scalars['ID'];
  indexes?: Maybe<Array<SystemTableIndex>>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  __typename?: 'SystemTableDataFeatures';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID'];
};

/** TableField */
export type SystemTableField = {
  __typename?: 'SystemTableField';
  computedMode?: Maybe<SystemComputedFieldMode>;
  dataFeatures: SystemFieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  id: Scalars['ID'];
  isList: Scalars['Boolean'];
  isMeta: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isSystem: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  origin: SystemSchemaOrigin;
  relation?: Maybe<SystemRelation>;
  schemaFeatures: SystemFieldSchemaFeatures;
  table: SystemTable;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<Scalars['String']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']>;
  initialValue?: InputMaybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position?: InputMaybe<Scalars['Int']>;
  relation?: InputMaybe<SystemRelationCreateInput>;
  tableId: Scalars['ID'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<Scalars['String']>;
  fieldType?: InputMaybe<SystemFieldType>;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initialValue?: InputMaybe<Scalars['String']>;
  isList?: InputMaybe<Scalars['Boolean']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  isUnique?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  relation?: InputMaybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  __typename?: 'SystemTableIndex';
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  table: SystemTable;
  type: Scalars['String'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  __typename?: 'SystemTableIndexColumn';
  name: Scalars['String'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  __typename?: 'SystemTableListResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemTable>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  __typename?: 'SystemTableSchemaCreateFeatures';
  DATE: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  GEO: Scalars['Boolean'];
  ID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  __typename?: 'SystemTableSchemaFeatures';
  computedFields: Scalars['Boolean'];
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  __typename?: 'SystemTableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean'];
  name: Scalars['Boolean'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails = {
  __typename?: 'SystemTeamInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  __typename?: 'SystemTextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type SystemTransferParticipant = {
  __typename?: 'SystemTransferParticipant';
  identity: Scalars['String'];
  image?: Maybe<GraphQlFileItemResponse>;
  name: Scalars['String'];
  type: SystemTransferParticipantType;
};

export enum SystemTransferParticipantType {
  Account = 'account',
  Organization = 'organization'
}

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  __typename?: 'SystemUUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

export type SystemUserBillingConfigurationResponse = {
  __typename?: 'SystemUserBillingConfigurationResponse';
  availablePlans: Array<SystemBillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails = {
  __typename?: 'SystemUserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** User Invitation List */
export type SystemUserInvitationList = {
  __typename?: 'SystemUserInvitationList';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails>>>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  MyOwn = 'MyOwn',
  Team = 'Team'
}

/** View Attributes */
export type SystemViewAttributes = {
  __typename?: 'SystemViewAttributes';
  query?: Maybe<Scalars['String']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  query: Scalars['String'];
};

/** Dry Run Response for previewing SQL Views */
export type SystemViewDryRunOutput = {
  __typename?: 'SystemViewDryRunOutput';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Scalars['JSON']>;
  timeMs?: Maybe<Scalars['Int']>;
};

/** View Update Input */
export type SystemViewUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  billingPlanId?: InputMaybe<Scalars['ID']>;
  cardToken?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<SystemWorkspaceKind>;
  name: Scalars['String'];
  organizationId?: InputMaybe<Scalars['ID']>;
};

export type SystemWorkspaceCreateResponse = {
  __typename?: 'SystemWorkspaceCreateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type SystemWorkspaceImage = {
  __typename?: 'SystemWorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SystemWorkspaceItem = {
  __typename?: 'SystemWorkspaceItem';
  apiHost?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SystemWorkspaceImage>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']>;
  isOwner: Scalars['Boolean'];
  kind?: Maybe<Scalars['String']>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']>;
  teamMemberCount?: Maybe<Scalars['Int']>;
  webSocket?: Maybe<Scalars['String']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  __typename?: 'SystemWorkspaceListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemWorkspaceItem>;
};

/** WorkspacePaymentDetailsUpdateMutationInput */
export type SystemWorkspacePaymentDetailsUpdateMutationInput = {
  cardToken?: InputMaybe<Scalars['String']>;
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

export type SystemWorkspaceTransferItem = {
  __typename?: 'SystemWorkspaceTransferItem';
  card?: Maybe<SystemBillingDetailsResponse>;
  createdAt: Scalars['DateTime'];
  from: SystemTransferParticipant;
  initiator: Scalars['String'];
  plans?: Maybe<Array<Maybe<SystemBillingPlanBaseScalarInfo>>>;
  status: Scalars['String'];
  to: SystemTransferParticipant;
  workspace: SystemWorkspaceTransferWorkspaceItem;
};

export type SystemWorkspaceTransferWorkspaceItem = {
  __typename?: 'SystemWorkspaceTransferWorkspaceItem';
  apiHost?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<SystemWorkspaceImage>;
  kind?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  webSocket?: Maybe<Scalars['String']>;
  workspaceId: Scalars['ID'];
};

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type SystemWorkspaceUpdateResponse = {
  __typename?: 'SystemWorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']>;
};

/** Table */
export type Table = {
  __typename?: 'Table';
  application?: Maybe<Application>;
  attributes?: Maybe<TableAttributes>;
  dataFeatures: TableDataFeatures;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<TableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<TableField>>>;
  id: Scalars['ID'];
  indexes?: Maybe<Array<TableIndex>>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Table Data Features */
export type TableDataFeatures = {
  __typename?: 'TableDataFeatures';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID'];
};

/** TableField */
export type TableField = {
  __typename?: 'TableField';
  computedMode?: Maybe<ComputedFieldMode>;
  dataFeatures: FieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  id: Scalars['ID'];
  isList: Scalars['Boolean'];
  isMeta: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isSystem: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  origin: SchemaOrigin;
  relation?: Maybe<Relation>;
  schemaFeatures: FieldSchemaFeatures;
  table: Table;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<Scalars['String']>;
  fieldType: FieldType;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']>;
  initialValue?: InputMaybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position?: InputMaybe<Scalars['Int']>;
  relation?: InputMaybe<RelationCreateInput>;
  tableId: Scalars['ID'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<Scalars['String']>;
  fieldType?: InputMaybe<FieldType>;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initialValue?: InputMaybe<Scalars['String']>;
  isList?: InputMaybe<Scalars['Boolean']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  isUnique?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  relation?: InputMaybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  __typename?: 'TableIndex';
  columns?: Maybe<Array<TableIndexColumn>>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  table: Table;
  type: Scalars['String'];
};

/** Table Index Column */
export type TableIndexColumn = {
  __typename?: 'TableIndexColumn';
  name: Scalars['String'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<TableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Table List Response */
export type TableListResponse = {
  __typename?: 'TableListResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Table>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  __typename?: 'TableSchemaCreateFeatures';
  DATE: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  GEO: Scalars['Boolean'];
  ID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  __typename?: 'TableSchemaFeatures';
  computedFields: Scalars['Boolean'];
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  __typename?: 'TableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean'];
  name: Scalars['Boolean'];
};

/** Table Update Input */
export type TableUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  __typename?: 'TextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type TrimFunctionArguments = {
  mode?: InputMaybe<StringTrimMode>;
  str: Scalars['String'];
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  __typename?: 'UUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

export type UpdateByFilterBooleanSwitchInput = {
  invert?: InputMaybe<Scalars['Boolean']>;
  set?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateByFilterIntInput = {
  add?: InputMaybe<Scalars['Int']>;
  div?: InputMaybe<Scalars['Int']>;
  mod?: InputMaybe<Scalars['Int']>;
  mult?: InputMaybe<Scalars['Int']>;
  pow?: InputMaybe<Scalars['Int']>;
  prec?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
  sqrt?: InputMaybe<Scalars['Boolean']>;
  sub?: InputMaybe<Scalars['Int']>;
};

export type UpdateByFilterJsonInput = {
  set?: InputMaybe<Scalars['JSON']>;
};

export type UpdateByFilterListStringInput = {
  insert?: InputMaybe<UpdateByFilterListStringInsertOperationInput>;
  push?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  removeValue?: InputMaybe<Scalars['String']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  swap?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  unshift?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int'];
  values: Array<Scalars['String']>;
};

export type UpdateByFilterStringInput = {
  postfix?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  set?: InputMaybe<Scalars['String']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: InputMaybe<Scalars['String']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  every?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadcareSignInfoResponse = {
  __typename?: 'UploadcareSignInfoResponse';
  expire: Scalars['String'];
  publicKey: Scalars['String'];
  signature: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _description?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  avatarId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is8base?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  permissions?: Maybe<UserPermissionList>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UserPermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type UserBillingConfigurationResponse = {
  __typename?: 'UserBillingConfigurationResponse';
  availablePlans: Array<BillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean'];
};

/** Users create input */
export type UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  avatarId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

/** Users create many input */
export type UserCreateManyInput = {
  avatar?: InputMaybe<UsersAvatarManyRelationInput>;
  avatarId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UsersRolesManyRelationInput>;
  status?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

/** Users delete input */
export type UserDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  avatarId?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['Boolean']>;
  is8base?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Boolean']>;
  timezone?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['Boolean']>;
};

export type UserFilter = {
  AND?: InputMaybe<Array<UserFilter>>;
  OR?: InputMaybe<Array<UserFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<FileFilter>;
  avatarId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type UserGroupBy = {
  first?: InputMaybe<Scalars['Int']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']>;
  query: UserGroupByQuery;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type UserGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: InputMaybe<FileGroupByQuery>;
  avatarId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  firstName?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is8base?: InputMaybe<Array<GroupByField>>;
  lastName?: InputMaybe<Array<GroupByField>>;
  origin?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** User Invitation Details */
export type UserInvitationDetails = {
  __typename?: 'UserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<InvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** User Invitation List */
export type UserInvitationList = {
  __typename?: 'UserInvitationList';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
};

export type UserKeyFilter = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** UserListResponse output */
export type UserListResponse = {
  __typename?: 'UserListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<User>;
};

/** UserLoginInput */
export type UserLoginInput = {
  authProfileId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  fromInvitation?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** UserManyResponse output */
export type UserManyResponse = {
  __typename?: 'UserManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<User>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  AvatarIdAsc = 'avatarId_ASC',
  AvatarIdDesc = 'avatarId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Users subscription payload */
export type UserPayload = {
  __typename?: 'UserPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  previousValues?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** User Permission */
export type UserPermission = {
  __typename?: 'UserPermission';
  permission?: Maybe<Scalars['JSON']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

/** User Permission List */
export type UserPermissionList = {
  __typename?: 'UserPermissionList';
  count: Scalars['Int'];
  items?: Maybe<Array<UserPermission>>;
};

export type UserRelationFilter = {
  every?: InputMaybe<UserFilter>;
  none?: InputMaybe<UserFilter>;
  some?: InputMaybe<UserFilter>;
};

export type UserSort = {
  avatar?: InputMaybe<FileSort>;
  avatarId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is8base?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  origin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<UserFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  avatarId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  firstName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  is8base?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  isOwner?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  lastName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  timezone?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  avatarId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type User_PermissionFilter = {
  AND?: InputMaybe<Array<User_PermissionFilter>>;
  OR?: InputMaybe<Array<User_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<File_PermissionFilter>;
  avatarId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type User_PermissionRelationFilter = {
  every?: InputMaybe<User_PermissionFilter>;
  none?: InputMaybe<User_PermissionFilter>;
  some?: InputMaybe<User_PermissionFilter>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
  disconnect?: InputMaybe<FileKeyFilter>;
  reconnect?: InputMaybe<FileKeyFilter>;
  update?: InputMaybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mods?: InputMaybe<Scalars['JSON']>;
  public?: InputMaybe<Scalars['Boolean']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['JSON']>;
  mods?: InputMaybe<Scalars['JSON']>;
  public?: InputMaybe<Scalars['Boolean']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String'];
};

/** View Attributes */
export type ViewAttributes = {
  __typename?: 'ViewAttributes';
  query?: Maybe<Scalars['String']>;
};

/** View Create Input */
export type ViewCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  query: Scalars['String'];
};

/** Dry Run Response for previewing SQL Views */
export type ViewDryRunOutput = {
  __typename?: 'ViewDryRunOutput';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Scalars['JSON']>;
  timeMs?: Maybe<Scalars['Int']>;
};

/** View Update Input */
export type ViewUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  billingPlanId?: InputMaybe<Scalars['ID']>;
  cardToken?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<WorkspaceKind>;
  name: Scalars['String'];
  organizationId?: InputMaybe<Scalars['ID']>;
};

export type WorkspaceCreateResponse = {
  __typename?: 'WorkspaceCreateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type WorkspaceImage = {
  __typename?: 'WorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  __typename?: 'WorkspaceInfo';
  name?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['ID']>;
};

export type WorkspaceItem = {
  __typename?: 'WorkspaceItem';
  apiHost?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<WorkspaceImage>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']>;
  isOwner: Scalars['Boolean'];
  kind?: Maybe<Scalars['String']>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  nextPlan?: Maybe<BillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<BillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']>;
  teamMemberCount?: Maybe<Scalars['Int']>;
  webSocket?: Maybe<Scalars['String']>;
};

/** Workspace Kind */
export enum WorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  __typename?: 'WorkspaceListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<WorkspaceItem>;
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type WorkspaceUpdateResponse = {
  __typename?: 'WorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']>;
};

export type BlockCreateMutationMutationVariables = Exact<{
  data: BlockCreateInput;
}>;


export type BlockCreateMutationMutation = { __typename?: 'Mutation', blockCreate: { __typename?: 'Block', id?: string | null, content?: any | null, canStudentEdit?: boolean | null } };

export type BlockUpdateMutationMutationVariables = Exact<{
  data: BlockUpdateInput;
}>;


export type BlockUpdateMutationMutation = { __typename?: 'Mutation', blockUpdate: { __typename?: 'Block', id?: string | null, content?: any | null } };

export type CourseCreateMutationMutationVariables = Exact<{
  data: CourseCreateInput;
}>;


export type CourseCreateMutationMutation = { __typename?: 'Mutation', courseCreate: { __typename?: 'Course', id?: string | null } };

export type CourseUpdateMutationMutationVariables = Exact<{
  data: CourseUpdateInput;
}>;


export type CourseUpdateMutationMutation = { __typename?: 'Mutation', courseUpdate: { __typename?: 'Course', id?: string | null } };

export type PageCreateMutationMutationVariables = Exact<{
  data: PageCreateInput;
}>;


export type PageCreateMutationMutation = { __typename?: 'Mutation', pageCreate: { __typename?: 'Page', id?: string | null } };

export type BlocksByPageQueryQueryVariables = Exact<{
  pageId: Scalars['String'];
}>;


export type BlocksByPageQueryQuery = { __typename?: 'Query', blocksList: { __typename: 'BlockListResponse', count: number, items: Array<{ __typename?: 'Block', id?: string | null, content?: any | null, canStudentEdit?: boolean | null, pagesId?: string | null }> } };

export type CourseByIdQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CourseByIdQueryQuery = { __typename?: 'Query', course?: { __typename?: 'Course', id?: string | null, name?: string | null, description?: string | null, pages?: { __typename?: 'PageListResponse', count: number, items: Array<{ __typename?: 'Page', id?: string | null, name?: string | null }> } | null } | null };

export type CoursesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesQueryQuery = { __typename?: 'Query', coursesList: { __typename: 'CourseListResponse', items: Array<{ __typename?: 'Course', id?: string | null, name?: string | null }> } };

export type PageByIdQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PageByIdQueryQuery = { __typename?: 'Query', page?: { __typename?: 'Page', id?: string | null, name?: string | null } | null };

export type PagesByCourseQueryQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type PagesByCourseQueryQuery = { __typename?: 'Query', pagesList: { __typename: 'PageListResponse', count: number, items: Array<{ __typename?: 'Page', id?: string | null, name?: string | null }> } };


export const BlockCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BlockCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlockCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"canStudentEdit"}}]}}]}}]} as unknown as DocumentNode<BlockCreateMutationMutation, BlockCreateMutationMutationVariables>;
export const BlockUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BlockUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlockUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<BlockUpdateMutationMutation, BlockUpdateMutationMutationVariables>;
export const CourseCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CourseCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CourseCreateMutationMutation, CourseCreateMutationMutationVariables>;
export const CourseUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CourseUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CourseUpdateMutationMutation, CourseUpdateMutationMutationVariables>;
export const PageCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PageCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PageCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PageCreateMutationMutation, PageCreateMutationMutationVariables>;
export const BlocksByPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlocksByPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocksList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagesId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"canStudentEdit"}},{"kind":"Field","name":{"kind":"Name","value":"pagesId"}}]}}]}}]}}]} as unknown as DocumentNode<BlocksByPageQueryQuery, BlocksByPageQueryQueryVariables>;
export const CourseByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseByIdQueryQuery, CourseByIdQueryQueryVariables>;
export const CoursesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CoursesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coursesList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CoursesQueryQuery, CoursesQueryQueryVariables>;
export const PageByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PageByIdQueryQuery, PageByIdQueryQueryVariables>;
export const PagesByCourseQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PagesByCourseQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagesList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"coursesId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PagesByCourseQueryQuery, PagesByCourseQueryQueryVariables>;