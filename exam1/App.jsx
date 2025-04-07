import { useEffect, useState } from "react";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Gallery from "./Gallery.jsx";
import Detail from "./Detail.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
    return (    
    <>
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/Gallery" element={<Gallery/>} />
                <Route path="/detail/:id" element={<Detail/>} />
            </Routes>
    </BrowserRouter>
    </>
    
    )
}