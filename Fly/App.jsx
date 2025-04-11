import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightList from './FlightList';
import FlightBooking from './Flightbooking';
import { FlightProvider } from './FlightContext';
import './styles.css';


export default function App() {
    return (
        <FlightProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FlightList />} />
                    <Route path="/booking/:flightId" element={<FlightBooking />} />
                </Routes>
            </BrowserRouter>
        </FlightProvider>
    );
}   
