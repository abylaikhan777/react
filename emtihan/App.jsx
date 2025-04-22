import { useEffect, useReducer, useState } from "react";
import "./style.css"
const init = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.names,
            price: action.payload.price
          }
        ]
      };

    case "CLEAR_CART":
      return {
        todos: []
        
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.index),
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, init);
    
  return (
    <div>
      <h2>Cart Manager</h2>
        <div >
            <div style={{display: "flex"}}>
              <h3>Book - 2000</h3>
              <button onClick={()=>dispatch({type: "ADD_ITEM", payload:{id: Date.now(), names: "Book", price: 2000}})}>kosy</button>
            </div>
            <div style={{display: "flex"}}>
              <h3>Laptop - 150000</h3>
              <button onClick={()=>dispatch({type: "ADD_ITEM", payload:{id: Date.now(), names: "Laptop", price: 150000}})}>kosy</button>
            </div>
            <div style={{display: "flex"}}>
              <h3>headphones - 2000</h3>
              <button onClick={()=>dispatch({type: "ADD_ITEM", payload:{id: Date.now(), names: "headphones", price: 12000}})}>kosy</button>
            </div>
        </div>
      <ul>
        {state.todos.map((todo) => (
          <li
            style={{display: "flex"}}
            key={todo.id}
          >
              <>
                <h4 style={{padding: "20px"}}>{todo.title}</h4>
                <p style={{padding: "20px"}}>{todo.price}</p>
                <button style={{padding: "20px"}} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: {index:todo.id}})}>
                  Өшіру
                </button>
              </>
          </li>
        ))}
      </ul>
      <button onClick={()=> dispatch({ type: "CLEAR_CART"})}>clear card</button>
    </div>
  );
}
