/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAllQuotes = /* GraphQL */ `
  subscription OnCreateAllQuotes(
    $filter: ModelSubscriptionAllQuotesFilterInput
  ) {
    onCreateAllQuotes(filter: $filter) {
      id
      Quotes {
        items {
          id
          createdAt
          quote
          author
          category
          userID
          allquotesID
          favorite
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
export const onUpdateAllQuotes = /* GraphQL */ `
  subscription OnUpdateAllQuotes(
    $filter: ModelSubscriptionAllQuotesFilterInput
  ) {
    onUpdateAllQuotes(filter: $filter) {
      id
      Quotes {
        items {
          id
          createdAt
          quote
          author
          category
          userID
          allquotesID
          favorite
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
export const onDeleteAllQuotes = /* GraphQL */ `
  subscription OnDeleteAllQuotes(
    $filter: ModelSubscriptionAllQuotesFilterInput
  ) {
    onDeleteAllQuotes(filter: $filter) {
      id
      Quotes {
        items {
          id
          createdAt
          quote
          author
          category
          userID
          allquotesID
          favorite
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
export const onCreateQuote = /* GraphQL */ `
  subscription OnCreateQuote($filter: ModelSubscriptionQuoteFilterInput) {
    onCreateQuote(filter: $filter) {
      id
      createdAt
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateQuote = /* GraphQL */ `
  subscription OnUpdateQuote($filter: ModelSubscriptionQuoteFilterInput) {
    onUpdateQuote(filter: $filter) {
      id
      createdAt
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteQuote = /* GraphQL */ `
  subscription OnDeleteQuote($filter: ModelSubscriptionQuoteFilterInput) {
    onDeleteQuote(filter: $filter) {
      id
      createdAt
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      firstName
      lastName
      email
      Quotes {
        items {
          id
          createdAt
          quote
          author
          category
          userID
          allquotesID
          favorite
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      firstName
      lastName
      email
      Quotes {
        items {
          id
          createdAt
          quote
          author
          category
          userID
          allquotesID
          favorite
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      firstName
      lastName
      email
      Quotes {
        items {
          id
          createdAt
          quote
          author
          category
          userID
          allquotesID
          favorite
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
