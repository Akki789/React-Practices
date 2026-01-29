import React, { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");

  function handleForm(e) {

    e.preventDefault();
    if(!name || !email || !password || !conpassword){
        alert("Fill the full form")
        return;
    }

    if(password != conpassword){
        alert("Password should be same")
        return;
    }else{
        alert("Login Successfull!")
        setName("")
        setEmail("")
        setPassword("")
        setConPassword("")
    }
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={name}
          placeholder="Enter you name..."
          onChange={(e) => setName(e.target.value)}
        /> <br />
        <input
          type="email"
          value={email}
          placeholder="Enter you email..."
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        <input
          type="password"
          value={password}
          placeholder="Enter you password..."
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <input
          type="password"
          value={conpassword}
          placeholder="Confirm Password..."
          onChange={(e) => setConPassword(e.target.value)}

        /> <br />

        <button>Login</button>
      </form>
    </div>
  );
}
