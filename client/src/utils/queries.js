import { gql } from '@apollo/client';

export const QUERY_MESSAGES = gql`
  query message($id: ID!) {
    message(_id: $id) {
      _id
      messageText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;