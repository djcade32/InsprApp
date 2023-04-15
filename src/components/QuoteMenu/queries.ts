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
      allquotesID
      favorite
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
