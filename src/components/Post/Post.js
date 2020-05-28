import React, { Fragment } from "react";

import Comment from "../Comment/Comment";

import defaultUser from "../../assets/img/defaultUser.png";

import "./Post.css";

const Post = ({ data }) => {
  return (
    <>
      {data.map((postInfo) => (
        <div className="post" key={postInfo.id}>
          <div className="user-info">
            <img
              src={postInfo.author.avatar || defaultUser}
              className="user-img"
            />
            <div className="align-names">
              <span className="user-name">{postInfo.author.name}</span>
              <span className="post-date">{postInfo.date}</span>
            </div>
          </div>
          <div className="post-content">
            <p className="post-text">{postInfo.content}</p>
          </div>
          {postInfo.comments && postInfo.comments.length ? (
            <>
              <div className="separator"></div>
              <div className="comments">
                <Comment data={postInfo.comments} />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default Post;
