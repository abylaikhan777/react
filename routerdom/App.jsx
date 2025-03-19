// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "./New2";

// export default function App() {
//     return <BrowserRouter>
//     <Routes>
//         <Route path="/IMANGALYLOXX" element={<Home />} />
//         <Route path="/IMANGALYLOXX2" element={<Home2 />} />
//         <Route path="/IMANGALYLOXX3" element={<Home3 />} />
//         <Route path="/da" element={<Home4 />} />
//         <Route path="*" element={<NotFound/>} />
//     </Routes>
//     </BrowserRouter>
// }

// function Home() {
//  return <h1>home</h1>   
// }
// function Home2() {
//     return <h1>home2</h1>   
//    }
//    function Home3() {
//     return <h1>home3</h1>   
//    }
//    function Home4() {
//     return <h1>home3</h1>   
//    }
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Contact />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <nav style={{display: "flex", justifyContent: "center", gap: "30px", fontSize: "20px", fontFamily: "monospace", } }>
      <Link to="/profile" >My profile</Link> {"  |  "}
      <Link to="/about">About me</Link> {"  |  "}
      <Link to="/projects"> my projects</Link> 
    </nav>
  );
}


function NotFound() {
  return <h1>NotFound</h1>;
}

function Home() {
    const navigate = useNavigate()
  
}

function About() {
    const navigate = useNavigate()
  return( 
  <div>
    <h1 style={{fontFamily: "monospace"}}>About</h1>
    <button onClick={() => navigate("/profile")}> go to my profile</button>
  </div>);
}

function MyProfile() {
    const navigate = useNavigate()
  return(
  <div>
   <h1 style={{fontFamily: "monospace"}} >MyProfile</h1>
   <button onClick={() => navigate("/projects")}> go to my project</button>
   </div>
  )
    

  
}

function Contact() {
    const navigate = useNavigate()
    return(
        <div>
            <h1 style={{fontFamily: "monospace"}} >projects</h1>
            <button onClick={() => navigate("/about")}> About me</button>
        </div>
    );
  }