import React from "react";
import { SignInBtn } from "../../components";
import { CreatePost, Navbar } from "../../containers";

function Home() {
  return (
    <div>
      <Navbar />
      <CreatePost />
    </div>
  );
}

export default Home;
