import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      categories
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const updateQuote = gql`
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
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
