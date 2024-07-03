import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "yuvi",
      postImg:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
        likes: 12,
      timestamp: "2d",
    },
    {
      user: "nikki",
      postImg:
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        likes: 123,
      timestamp: "1d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="left_timeline">
        {posts.map((post) => {
          return <Post
            user={post.user}
            postImg={post.postImg}
            likes={post.likes}
            timestamp={post.timestamp}
          />;
        })}
      </div>

      <div className="right_timeline">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
