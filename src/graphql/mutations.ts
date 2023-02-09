/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAllQuotes = /* GraphQL */ `
  mutation CreateAllQuotes(
    $input: CreateAllQuotesInput!
    $condition: ModelAllQuotesConditionInput
  ) {
    createAllQuotes(input: $input, condition: $condition) {
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
export const updateAllQuotes = /* GraphQL */ `
  mutation UpdateAllQuotes(
    $input: UpdateAllQuotesInput!
    $condition: ModelAllQuotesConditionInput
  ) {
    updateAllQuotes(input: $input, condition: $condition) {
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
export const deleteAllQuotes = /* GraphQL */ `
  mutation DeleteAllQuotes(
    $input: DeleteAllQuotesInput!
    $condition: ModelAllQuotesConditionInput
  ) {
    deleteAllQuotes(input: $input, condition: $condition) {
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
export const createQuote = /* GraphQL */ `
  mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
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
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
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
export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
