
// import UserProfile from './UserProfile'; // Import your UserProfile component




// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <UserProfile />
//     </div>
//   );
// }


import React,{useState} from 'react'
import Navbar from './Navbar'
// import {useNavigate} from "react-router-dom"
import './Home.css'
import './Dashboard.css'

import UserList from './UserList'
const Dashboard = () => {
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const Home = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/createUser", {
       purpose,
       type,
       size,
       price
      });
      console.log(res);
      
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className='text-center' id='content'>
        <h1 >Welcome {UserList} </h1>
        <h2>Property post</h2>
      <form className='create'>
        <div className='parts'>

      <label >Purpose</label>
        <select value={purpose}
        onChange={(e)=>setPurpose(e.target)}>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
          </select>
          </div>
          <div className='parts'>

        <label >Property type</label>
        <select value={type}
         onChange={(e)=>setType(e.target)}>
          <option value="Flat">Flat</option>
          <option value="Apartment">Apartment</option>
          <option value="Buglow">Bunglow</option>
          <option value="Plot">Plot</option>
        </select>
           </div>
           <div className='parts'>

        <label>Property Size</label>
        <input type="text" 
        required
        value={size}
        onChange={(e)=>setSize(e.target.value)}/>
        </div>
        <div className='parts'> 
          
        <label>Price</label>
        <textarea 
        type="text"
        required
        value={price}
        onChange={(e)=>setPrice(e.target.value)}></textarea>
        </div>
        <button>Submit</button>
      </form>
        </div>
        
      
    </>
  )
}

export default Dashboard