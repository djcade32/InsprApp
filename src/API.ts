/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAllQuotesInput = {
  id?: string | null,
  _version?: number | null,
  allQuotesUserId?: string | null,
};

export type ModelAllQuotesConditionInput = {
  and?: Array< ModelAllQuotesConditionInput | null > | null,
  or?: Array< ModelAllQuotesConditionInput | null > | null,
  not?: ModelAllQuotesConditionInput | null,
  allQuotesUserId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AllQuotes = {
  __typename: "AllQuotes",
  id: string,
  Quotes?: ModelQuoteConnection | null,
  User?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  allQuotesUserId?: string | null,
};

export type ModelQuoteConnection = {
  __typename: "ModelQuoteConnection",
  items:  Array<Quote | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Quote = {
  __typename: "Quote",
  id: string,
  quote: string,
  author?: string | null,
  category: string,
  userID: string,
  User?: User | null,
  allquotesID: string,
  favorite: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  Quotes?: ModelQuoteConnection | null,
  categories?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAllQuotesInput = {
  id: string,
  _version?: number | null,
  allQuotesUserId?: string | null,
};

export type DeleteAllQuotesInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuoteInput = {
  id?: string | null,
  quote: string,
  author?: string | null,
  category: string,
  userID: string,
  allquotesID: string,
  favorite: boolean,
  _version?: number | null,
};

export type ModelQuoteConditionInput = {
  quote?: ModelStringInput | null,
  author?: ModelStringInput | null,
  category?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  allquotesID?: ModelIDInput | null,
  favorite?: ModelBooleanInput | null,
  and?: Array< ModelQuoteConditionInput | null > | null,
  or?: Array< ModelQuoteConditionInput | null > | null,
  not?: ModelQuoteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateQuoteInput = {
  id: string,
  quote?: string | null,
  author?: string | null,
  category?: string | null,
  userID?: string | null,
  allquotesID?: string | null,
  favorite?: boolean | null,
  _version?: number | null,
};

export type DeleteQuoteInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  categories?: Array< string > | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  categories?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  categories?: Array< string > | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelAllQuotesFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelAllQuotesFilterInput | null > | null,
  or?: Array< ModelAllQuotesFilterInput | null > | null,
  not?: ModelAllQuotesFilterInput | null,
  allQuotesUserId?: ModelIDInput | null,
};

export type ModelAllQuotesConnection = {
  __typename: "ModelAllQuotesConnection",
  items:  Array<AllQuotes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuoteFilterInput = {
  id?: ModelIDInput | null,
  quote?: ModelStringInput | null,
  author?: ModelStringInput | null,
  category?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  allquotesID?: ModelIDInput | null,
  favorite?: ModelBooleanInput | null,
  and?: Array< ModelQuoteFilterInput | null > | null,
  or?: Array< ModelQuoteFilterInput | null > | null,
  not?: ModelQuoteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  categories?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionAllQuotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAllQuotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionAllQuotesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionQuoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quote?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  allquotesID?: ModelSubscriptionIDInput | null,
  favorite?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionQuoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuoteFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  categories?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateAllQuotesMutationVariables = {
  input: CreateAllQuotesInput,
  condition?: ModelAllQuotesConditionInput | null,
};

export type CreateAllQuotesMutation = {
  createAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type UpdateAllQuotesMutationVariables = {
  input: UpdateAllQuotesInput,
  condition?: ModelAllQuotesConditionInput | null,
};

export type UpdateAllQuotesMutation = {
  updateAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type DeleteAllQuotesMutationVariables = {
  input: DeleteAllQuotesInput,
  condition?: ModelAllQuotesConditionInput | null,
};

export type DeleteAllQuotesMutation = {
  deleteAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type CreateQuoteMutationVariables = {
  input: CreateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type CreateQuoteMutation = {
  createQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuoteMutationVariables = {
  input: UpdateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type UpdateQuoteMutation = {
  updateQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuoteMutationVariables = {
  input: DeleteQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type DeleteQuoteMutation = {
  deleteQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetAllQuotesQueryVariables = {
  id: string,
};

export type GetAllQuotesQuery = {
  getAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type ListAllQuotesQueryVariables = {
  filter?: ModelAllQuotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllQuotesQuery = {
  listAllQuotes?:  {
    __typename: "ModelAllQuotesConnection",
    items:  Array< {
      __typename: "AllQuotes",
      id: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        categories?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      allQuotesUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAllQuotesQueryVariables = {
  filter?: ModelAllQuotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAllQuotesQuery = {
  syncAllQuotes?:  {
    __typename: "ModelAllQuotesConnection",
    items:  Array< {
      __typename: "AllQuotes",
      id: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        categories?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      allQuotesUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuoteQueryVariables = {
  id: string,
};

export type GetQuoteQuery = {
  getQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuotesQueryVariables = {
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuotesQuery = {
  listQuotes?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      quote: string,
      author?: string | null,
      category: string,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        categories?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      allquotesID: string,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuotesQueryVariables = {
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuotesQuery = {
  syncQuotes?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      quote: string,
      author?: string | null,
      category: string,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        categories?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      allquotesID: string,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type QuotesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesByUserIDQuery = {
  quotesByUserID?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      quote: string,
      author?: string | null,
      category: string,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        categories?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      allquotesID: string,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type QuotesByAllquotesIDQueryVariables = {
  allquotesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesByAllquotesIDQuery = {
  quotesByAllquotesID?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      quote: string,
      author?: string | null,
      category: string,
      userID: string,
      User?:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        categories?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      allquotesID: string,
      favorite: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAllQuotesSubscriptionVariables = {
  filter?: ModelSubscriptionAllQuotesFilterInput | null,
};

export type OnCreateAllQuotesSubscription = {
  onCreateAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type OnUpdateAllQuotesSubscriptionVariables = {
  filter?: ModelSubscriptionAllQuotesFilterInput | null,
};

export type OnUpdateAllQuotesSubscription = {
  onUpdateAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type OnDeleteAllQuotesSubscriptionVariables = {
  filter?: ModelSubscriptionAllQuotesFilterInput | null,
};

export type OnDeleteAllQuotesSubscription = {
  onDeleteAllQuotes?:  {
    __typename: "AllQuotes",
    id: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    allQuotesUserId?: string | null,
  } | null,
};

export type OnCreateQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null,
};

export type OnCreateQuoteSubscription = {
  onCreateQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null,
};

export type OnUpdateQuoteSubscription = {
  onUpdateQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null,
};

export type OnDeleteQuoteSubscription = {
  onDeleteQuote?:  {
    __typename: "Quote",
    id: string,
    quote: string,
    author?: string | null,
    category: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      Quotes?:  {
        __typename: "ModelQuoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      categories?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    allquotesID: string,
    favorite: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    Quotes?:  {
      __typename: "ModelQuoteConnection",
      items:  Array< {
        __typename: "Quote",
        id: string,
        quote: string,
        author?: string | null,
        category: string,
        userID: string,
        allquotesID: string,
        favorite: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    categories?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
