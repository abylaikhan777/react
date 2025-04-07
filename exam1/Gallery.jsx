import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
    const [data, SetData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
            .then((res) => {
                console.log(res.data);
                SetData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(true);
                console.error("Error fetching data:", error);
            });
    }, []);
    
    return(
        <>
            <div className="container">
                <h1>Галерея</h1>
                {loading ? (
                    <p className="loading">Загрузка...</p>
                ) : (
                    data.map((item) => (
                        <div key={item.id}>
                            <h2>{item.author}</h2>
                            <img src={item.image} alt={item.title} />
                            <Link to={`detail/${item.id}`}>Detail</Link>
                       
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
