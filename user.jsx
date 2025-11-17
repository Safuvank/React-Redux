import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, addPassword } from "../features/userSlice";

function User() {
  const user = useSelector((state) => state.users.user);
  const passwordValue = useSelector((state) => state.users.password);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showDetails, setShowDetails] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const addUser = () => {
    if(name !== ''){
        dispatch(addName(name));
    setName("");
    }
  };

  const pass = () => {
    if(password !== ''){
        dispatch(addPassword(password));
    setPassword("");
    }
  };

  return (
    <div>
      user Details
      <label htmlFor="">username</label>
      <input
        type="text"
        id="user"
        name="user"
        placeholder="Enter user name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={()=>{addUser(); setShowDetails(true); }}>Submit</button>
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={()=>{pass(); setShowPassword(true)}}>Password</button>
      {showDetails && (
  <p>
    Current user : {user} <button>Edit</button>
  </p>
)}
  {showPassword && (
  <p>
    password : {passwordValue} <button>Edit</button>
  </p>
)}

    </div>
  );
}

export default User;

