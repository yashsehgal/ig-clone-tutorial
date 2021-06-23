
import "./style.css";
import React from "react";
import Story from "../Components/Story/Story";
import { useState } from "react";
import StoryData from "../Data/StoryData";
import PostData from "../Data/PostData";

function Home() {

  // console.log(StoryData.StoryData);
  const [storyData] = useState(StoryData.StoryData);
  const [postData] = useState(PostData.PostData);

  return (
    <div className="Home">
      <div className="StoryContainer">
        {
          storyData.map((data) => (
            <Story ProfilePhoto={data.ProfilePhoto} />
          ))
        }
      </div>

      <div className="PostContainer">
        
      </div>

    </div>
  )
}

export default Home;