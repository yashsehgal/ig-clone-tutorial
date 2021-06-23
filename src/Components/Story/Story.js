
import "./style.css";
import React from "react";

function Story(StoryData) {
  return (
    <div className="Story">
      <img src={StoryData.ProfilePhoto} 
        style={{
          width: '64px',
          borderRadius: '100px',
          border: '3px purple solid',
          marginRight: '1em'
        }} 
      />
    </div>
  )
}

export default Story;