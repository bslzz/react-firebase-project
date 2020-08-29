import React from 'react';

const PostSummary = ({ postItem }) => {
  console.log(postItem);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1 postCard">
            <div className="card-content white-text">
              <span className="card-title">{postItem.title}</span>
              <p>{postItem.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
