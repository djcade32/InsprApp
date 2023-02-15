import {gql} from '@apollo/client';

export const quotesByUserIDAndCreatedAt = gql`
  query QuotesByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quotesByUserIDAndCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        quote
        author
        category
        userID
        favorite
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

export const updateQuote = gql`
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
      id
      favorite
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
