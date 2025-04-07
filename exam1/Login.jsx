import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function login(){
    const [usermail, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleclick = ()=>{
        if(usermail.includes("@")){
            setError("Invalid email format");
        }
        if(password.length < 4){
            setError("Invalid password very small");
        }
        
        if(usermail.includes("@") && password.length >= 4){
            setError("");
            alert("Login successful!");
            Navigate("/home")
        }
    }
    return(
        
        <form onClick={(e)=> e.preventDefault()}>
        <h1>login</h1>
        <input type="email" onChange={(e) =>setUsername(e.target.value)} id="" />
        <input type="password" onChange={(e) =>setPassword(e.target.value)}  id="" />
        <button onClick={()=> handleclick()}>Pass</button>
        {error && <p>{error}</p>}
        </form>
    )
}