import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES } from '../utils/queries';
import ReplyList from '../utils/Reply';


const Forums = (props) => {
  const { id: messageId } = useParams();

  const { loading, data } = useQuery(QUERY_MESSAGES, {
    variables: { id: messageId },
});

const message = data?.message || {};

if (loading) {
  return <div> Loading... </div>
}

return (
        <div>
        <div className="card mb-3">
          <p className="card-header">
            <span style={{ fontWeight: 700 }} className="text-light">
              {message.username}
            </span>{' '}
            message on {message.createdAt}
          </p>
          <div className="card-body">
            <p>{message.messageText}</p>
          </div>
        </div>

        {message.reactionCount > 0 && (
          <ReplyList reactions={message.reactions} />
        )}
      </div>
  );
};

export default Forums;