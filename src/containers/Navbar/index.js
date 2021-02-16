import React, { useContext } from "react";
import "./style.css";
import { SignInBtn } from "../../components";
import { UserContext } from "../../context/context";

export default function Navbar() {
  const [users, setUsers] = useContext(UserContext).user;
  console.log(users);
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <h2>SocialBizz</h2>
        {users? <img src={ users.photoURL} alt=""/>: <SignInBtn/> }
      </div>
    </div>
  );
}
