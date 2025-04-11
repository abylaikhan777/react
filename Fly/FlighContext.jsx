import { createContext,  useState } from "react";

export const FightContext = createContext();

export const FlightProvider = ({ children }) => {

    const [flights, SetFlights] = useState([]);

    const [bookings, Setbookings] = useState([]);

    return (

        <FightContext.Provider value={{
            flights, SetFlights,
            bookings, Setbookings
        }}>

        {children}
        
        </FightContext.Provider>
    )
}
