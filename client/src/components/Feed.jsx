import React from "react";

const dummyPosts = [
  { id: 1, author: "Ar. Meera", content: "Shared a new design idea on sustainable housing." },
  { id: 2, author: "Ar. Kiran", content: "Posted an article on modern minimalism." },
  { id: 3, author: "Studio XYZ", content: "Looking to hire junior architects!" },
];

const Feed = () => {
  return (
    <div>
      {dummyPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <strong>{post.author}</strong>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
