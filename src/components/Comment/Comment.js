import React, { Fragment } from "react";

import defaultUser from "../../assets/img/defaultUser.png";

import "./Comment.css";

const Comment = ({ data }) => {
  return (
    <>
      {data.map((commentInfo) => (
        <div className="comment" key={commentInfo.id}>
          <img
            src={commentInfo.author.avatar || defaultUser}
            className="user-img"
          />
          <div className="comment-content">
            <p className="post-text">
              <span className="user-name">{commentInfo.author.name}</span>{" "}
              {commentInfo.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
