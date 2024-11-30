import React from "react";

const Comment = ({ comment, level }) => (
  <div className="comment" style={{ marginLeft: `${level * 20}px` }}>
    <div className="comment_container">
      <img
        className="comment_profile"
        src={comment.image}
        alt={comment.name}
      />
      <div className="comment_content">
        <h2 className="comment_name">{comment.name}</h2>
        <strong className="comment_time">{comment.time}</strong>
        <p className="comment_text">{comment.text}</p>
        {level === 0 && <button className="comment_button">Reply</button>}
      </div>
    </div>
    {comment.comments && (
      <div className="replies">
        {comment.comments.map((reply, index) => (
          <Comment key={`comment_${comment.id}_reply_${index}`} comment={reply} level={level + 1} />
        ))}
      </div>
    )}
  </div>
);

export default Comment;
