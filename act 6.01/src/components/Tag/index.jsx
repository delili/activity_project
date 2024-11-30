import React from "react";

const Tag = ({ tag, isActive, handleTags }) => {
  return (
    <span
      className={`tag ${isActive ? "active" : ""}`}
      onClick={() => handleTags(tag)}
    >
      {tag}
    </span>
  );
};

export { Tag };
