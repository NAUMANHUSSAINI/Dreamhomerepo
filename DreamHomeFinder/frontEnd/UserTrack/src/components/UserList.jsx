import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateUser from "./CreateUser";
import Navbar from "./Navbar";
import './UserList.css'
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUser = async () => {
      const { data } = await axios.get("http://localhost:5000/api/getAllUser");
      setUsers(data);
      // console.log(users);

      console.log(data);
    };
    getAllUser();
  }, []);

  return (
    
    <div >
            <Navbar/>

          <div className="heading">
                <h2 className="text-center my-4">List Of All Users</h2>
            </div>
            <div className="user-list-container">

      {/* <CreateUser /> */}
      {users.map((user, index) => {
          return (
              
              
              <div key={user._id} className="user-card">
            {/* to get index with each user */}
            <h2>User: {index + 1}</h2> 
            <div>Email:{user.email}</div>
            <div>Name:{user.name}</div>
          </div>
            
            );
        })}
        </div>
    </div>
  );
};

export default UserList;
