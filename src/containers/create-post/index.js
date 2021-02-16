import React, { useState } from "react";
import "./style.css";

function CreatePost() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  return (
    userLoggedIn && (
      <div className="createPost">
        <p>SignIn to create / comment Post </p>
      </div>
    )
  );
}

export default CreatePost;
