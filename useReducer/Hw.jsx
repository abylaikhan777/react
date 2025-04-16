import { useReducer, useEffect } from "react";
import "./style2.css"
const initialState = {
    inputValue: "",
    name: "",
    loading: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "name":
            return {
                ...state,
                inputValue: action.payload
            };
        case "save":
            return {
                ...state,
                loading: true,
            };
        case "saveSuccess":
            return {
                ...state,
                name: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default function ReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const savedName = localStorage.getItem("intname") || "";
        dispatch({ type: "saveSuccess", payload: savedName });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: "save" });
        localStorage.setItem('intname', state.inputValue);
        dispatch({ type: "saveSuccess", payload: state.inputValue });
    }
    
    return (
        <form onSubmit={handleSubmit} className="container">
            <input 
                type="text" 
                value={state.inputValue} 
                className="input"
                onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
            />
            <button className="button">Save</button>
            {state.loading && <h2>Loading...</h2>}
            {state.name && <h2 className="savedN ame">Saved name: {state.name}</h2>}
        </form>
    );
}