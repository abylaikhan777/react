import { Link } from "react-router-dom"

export default function Home() {

    return (
        <>
        <header>
            <Link to={"/Gallery"}>Gallery</Link>
            <Link to={"/home"}></Link>
        </header>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
        </>

    )
}