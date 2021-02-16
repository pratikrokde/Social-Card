import React from "react";
import { signInWithGoogle } from "../../services/auth";
import "./index.css";

function signInBtn() {
  const signInBtnClick = async () => {
    let user = await signInWithGoogle;
  };
  return (
    <div className="signInBtn">
      <button>Sign In with google</button>
    </div>
  );
}

export default signInBtn;
