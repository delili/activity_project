import React, { Component } from "react";
import Comment from "./Comment";

class CommentSection extends Component {
  render() {
    const { comments } = this.props;
    if (!comments || comments.length === 0) {
      return null;
    }
    return (
      <section className="comments">
        <h1>Comments</h1>
        {comments.map((comment, key) => (
          <Comment key={`comment_${comment.id}`} comment={comment} level={0} />
        ))}
      </section>
    );
  }
}

export default CommentSection;
