import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const [data, setData] = useState(0);
  const [likeCount, setLikeCount] = useState(post.reaction);

  return (
     
    <div
      className="card post-card"
      style={{
        width: "24rem",
        backgroundColor: "rgba(32, 32, 32, 1)",
        color: "white",
      }}
    >
      <div className="card-header">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ cursor: "pointer" }}
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
          <span className="visually-hidden">unread messages</span>
        </span>

        <div className="profile">
          <img className="avatar" src={post.profilePic} alt="avatar" />
          <div className="meta">
            <div className="name">{post.userId}</div>
            <div className="location">{post.location}</div>
          </div>
        </div>

        <button className="more" aria-label="more">
          ⋯
        </button>
      </div>

      <img src={post.image} className=" img" alt="..." />

      <div className="card-body cartody">
        <h5 className="card-title"style={{paddingLeft:"10px",fontWeight:"500", fontFamily:" -apple-system, BlinkMacSystemFont",marginBottom:"4px" }}>{post.title}</h5>

        <div className="caption">
          <span className="caption-author">{post.userId}</span>
          <span className="caption-text" style={{amily:" -apple-system, BlinkMacSystemFont"}}> {post.body} ✨</span>
          <br />
          {post.tags.map((tag, index) => (
            <span className="btn btn-dark" key={`${post.id}-${index}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="view-comments">
          View all {Math.floor(Math.random() * 100) + 1} comments{" "}
          <a
            href="#"
            className={` reaction ${data === 0? 'btn btn-outline-danger': 'btn btn-danger' }`}
            onClick={() => {
              if (data === 0) {
                setData(1);
                setLikeCount(likeCount + 1);
              }
              else if (data === 1) {
                setData(0);
                setLikeCount(likeCount - 1);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {/* { {Number(likeCount) * (Math.floor(Math.random() * 10) + 1)} likes  */}
            {likeCount} likes
          </a>{" "}
        </div>

        <div className="add-comment">
          <input
            type="text"
            placeholder="Add a comment…"
            aria-label="Add a comment"
          />
          <button className="post-btn">Post</button>
        </div>

        <div className="time">
          {Math.floor(Math.random() * 10) + 1} HOURS AGO
        </div>
      </div>
    </div>
  );
};

export default Post;
