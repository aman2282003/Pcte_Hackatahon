import { Login } from "./Component/Login";
import { Allroutes } from "./Routes/Allroute";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./Component/Context/Signup";
import { Whatsp } from "./Component/Whatsp";
import PostInput from "./Component/PostInput";
import { Snapchat } from "./Component/Snapchat";
import Settings from "./Component/Settings";
import { Share } from "./Component/Share";

import { AuthContext } from "./Component/Context/Authcontext";
import { useContext } from "react";
import { Profile } from "./Component/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Allroutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/whatsp" element={<Whatsp />} />
        <Route path="/postinput" element={<PostInput />} />
        <Route path="/snapchat" element={<Snapchat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/share" element={<Share />} />
        <Route path = "/profile" element = {<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
