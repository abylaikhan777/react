import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Gallery() {
    const { id } = useParams()
    const [data, SetData] = useState(null)    
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
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
    
    return (
        <div className="container">
            <h1>Галерея</h1>
            {loading ? (
                <p className="loading">Загрузка...</p>
            ) : (
                <div key={data.id}>
                    <h2>{data.author}</h2>
                    <img src={data.image} alt={data.title} />
                    <p>{data.title}</p>
                </div>
            )}
        </div>
    );
    
}