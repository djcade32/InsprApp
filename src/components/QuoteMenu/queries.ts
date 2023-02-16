import {gql} from '@apollo/client';

export const deleteQuote = gql`
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
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
