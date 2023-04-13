// import react and Facebook components 
import React from "react";
import { FacebookProvider, useFacebook } from 'react-facebook';

function CommentSection() {
  const { comments, error } = useFacebook({
    appId: '', // replace with the appID that we have 
    href: 'http://localhost:3000', // replace with URL of the deployed app
    width: '100%',
    numPosts: 5,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!comments) {
    return <div>Loading comments...</div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.message}</p>
          <p>by {comment.from.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentSection;