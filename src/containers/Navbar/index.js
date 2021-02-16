import React from "react";
import "./style.css";
import { SignInBtn } from "../../components";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <h2>SocialBizz</h2>
        <SignInBtn />
      </div>
    </div>
  );
}
