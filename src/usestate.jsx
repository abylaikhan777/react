import { useState } from "react";

export default function App() {
    const [count, setbrbale] = useState(0);
    const [red, setColor] = useState("none");
    
    function add() {
        setbrbale(count+1);
    }
    function remove() {
        setbrbale(count-1);
    }
    function reset() {
        setbrbale(0);
    }
    function color() {
        const rand = ["red", "blue", "yellow", "blue"]
        const random = parseInt(Math.random() * rand.length);
        setColor(rand[random]);
       
    }
    function niga(e) {
        console.log(e.target.value.toUpperCase());
        
    }
    return(
        <div style={{backgroundColor: red}}>
            <h1>{count}</h1>
            <input type="text" onKeyDown={niga} />
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={color}></button>
        </div>
    )
}