import {gql} from '@apollo/client';

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
