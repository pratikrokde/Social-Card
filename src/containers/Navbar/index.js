import React, { useContext } from "react";
import "./style.css";
import { SignInBtn } from "../../components";
import { UserContext } from "../../context/context";

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;
  console.log(user);
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <h2>SocialBizz</h2>
        {user ? <img src={user.photoURL} alt="" /> : <SignInBtn />}
      </div>
    </div>
  );
}
