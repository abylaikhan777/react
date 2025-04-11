import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FlightContext } from './FlightContext';

const FlightBooking = () => {
    const { flightId } = useParams();
    const { flights, bookings, setBookings } = useContext(FlightContext);
    const [flight, setFlight] = useState(null);
    const [formData, setFormData] = useState({
        passengerName: '',
        bookingDate: '',
    });

    useEffect(() => {
        fetchFlightDetails();
    }, [flightId, flights]);

    const fetchFlightDetails = () => {
        const foundFlight = flights.find(f => f.id === parseInt(flightId));
        if (foundFlight) setFlight(foundFlight);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBooking = (e) => {
        e.preventDefault();
        if (!formData.passengerName || !formData.bookingDate) {
            alert('Please fill all required fields!');
            return;
        }

        const newBooking = {
            flightId: flight.id,
            ...formData,
            bookingTime: new Date().toISOString(),
        };

        setBookings([...bookings, newBooking]);
        alert('Booking confirmed!');
        window.location.href = '/';
    };

    if (!flight) return <p>Loading flight details...</p>;

    return (
        <div>
            <h1>Book Flight</h1>
            <div className="booking-container">
                <div className="flight-details">
                    <h3>{flight.airline}</h3>
                    <p>{flight.from} → {flight.to}</p>
                    <p>Time: {flight.time}</p>
                    <p>Price: {flight.price} KZT</p>
                </div>
                <form onSubmit={handleBooking}>
                    <input
                        type="text"
                        name="passengerName"
                        placeholder="Passenger Name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="bookingDate"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Confirm Booking</button>
                </form>
            </div>
            <button onClick={() => window.location.href = '/'}>Back</button>
        </div>
    );
};

export default FlightBooking;