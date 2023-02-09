/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllQuotes = /* GraphQL */ `
  query GetAllQuotes($id: ID!) {
    getAllQuotes(id: $id) {
      id
      Quotes {
        items {
          id
          quote
          author
          category
          userID
          allquotesID
          favorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      User {
        id
        firstName
        lastName
        email
        Quotes {
          nextToken
          startedAt
        }
        categories
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
      allQuotesUserId
    }
  }
`;
export const listAllQuotes = /* GraphQL */ `
  query ListAllQuotes(
    $filter: ModelAllQuotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Quotes {
          nextToken
          startedAt
        }
        User {
          id
          firstName
          lastName
          email
          categories
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
        allQuotesUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAllQuotes = /* GraphQL */ `
  query SyncAllQuotes(
    $filter: ModelAllQuotesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAllQuotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Quotes {
          nextToken
          startedAt
        }
        User {
          id
          firstName
          lastName
          email
          categories
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
        allQuotesUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($id: ID!) {
    getQuote(id: $id) {
      id
      quote
      author
      category
      userID
      User {
        id
        firstName
        lastName
        email
        Quotes {
          nextToken
          startedAt
        }
        categories
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      allquotesID
      favorite
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuotes = /* GraphQL */ `
  query ListQuotes(
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quote
        author
        category
        userID
        User {
          id
          firstName
          lastName
          email
          categories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allquotesID
        favorite
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
export const syncQuotes = /* GraphQL */ `
  query SyncQuotes(
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quote
        author
        category
        userID
        User {
          id
          firstName
          lastName
          email
          categories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allquotesID
        favorite
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
export const quotesByUserID = /* GraphQL */ `
  query QuotesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quotesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quote
        author
        category
        userID
        User {
          id
          firstName
          lastName
          email
          categories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allquotesID
        favorite
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
export const quotesByAllquotesID = /* GraphQL */ `
  query QuotesByAllquotesID(
    $allquotesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quotesByAllquotesID(
      allquotesID: $allquotesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quote
        author
        category
        userID
        User {
          id
          firstName
          lastName
          email
          categories
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allquotesID
        favorite
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      Quotes {
        items {
          id
          quote
          author
          category
          userID
          allquotesID
          favorite
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      categories
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
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        Quotes {
          nextToken
          startedAt
        }
        categories
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
    $filter: ModelUserFilterInput
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
        firstName
        lastName
        email
        Quotes {
          nextToken
          startedAt
        }
        categories
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
