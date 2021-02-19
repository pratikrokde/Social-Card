import React, { useContext } from "react";
import { signInWithGoogle } from "../../services/auth";
import "./index.css";
import { UserContext } from "../../context/context";

function SignInBtn() {
  const [user, setUser] = useContext(UserContext).user;

  const signInBtnClick = async () => {
    let userBySignIn = await signInWithGoogle;
    if (userBySignIn) {
      setUser(userBySignIn);
    }
    console.log(user);
  };
  return (
    <div className="signInBtn" onClick={signInBtnClick}>
      <button>Sign In with google</button>
    </div>
  );
}

export default SignInBtn;
