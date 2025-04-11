import { useState, useEffect, useContext } from 'react';
import { FlightContext } from './FlightContext';

const mockFlights = [
    { id: 1, from: 'Almaty', to: 'Astana', price: 25000, time: '10:00', airline: 'Air Astana', seats: 50 },
    { id: 2, from: 'Almaty', to: 'Shymkent', price: 30000, time: '14:30', airline: 'SCAT', seats: 45 },
    { id: 3, from: 'Astana', to: 'Almaty', price: 28000, time: '16:00', airline: 'QazAir', seats: 60 },
];

const FlightList = () => {
    const { flights, setFlights } = useContext(FlightContext);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = async () => {
        setTimeout(() => {
            setFlights(mockFlights);
            setLoading(false);
        }, 1000);
    };

    const filteredFlights = flights.filter(flight => 
        flight.from.toLowerCase().includes(searchTerm.toLowerCase()) || 
        flight.to.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Flight List</h1>
            <input 
                type="text" 
                placeholder="Search flights..." 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {filteredFlights.map(flight => (
                        <div key={flight.id} className="flight-card">
                            <h3>{flight.airline}</h3>
                            <p>{flight.from} → {flight.to}</p>
                            <p>Time: {flight.time}</p>
                            <p>Price: {flight.price} KZT</p>
                            <button onClick={() => window.location.href = `/booking/${flight.id}`}>
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FlightList;