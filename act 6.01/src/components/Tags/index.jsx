import React from "react";
import { Tag } from "../Tag";

const Tags = ({ tags, selectedTag, handleTags }) => {
  return (
    <div>
      <h3>Filter by Tag</h3>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          tag={tag}
          isActive={selectedTag === tag}
          handleTags={handleTags}
        />
      ))}
    </div>
  );
};

export { Tags };
