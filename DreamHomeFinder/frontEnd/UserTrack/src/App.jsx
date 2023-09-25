import React from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";


function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/profile" element={<UserProfile />} /> 

      </Routes>
    </BrowserRouter>

   
    </>
  );
}

export default App;
