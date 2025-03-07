import { useRef, useState } from "react";
import FlightList from "../pages/flightList";

const Aviasales = () => {
    const widgetRef = useRef<HTMLDivElement>(null);
    const [flights, setFlights] = useState<any[]>([]);
    
    const fetchFlights = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/flights?origin=NYC&destination=LON&currency=USD");
        const data = await response.json();
        setFlights(data);
        console.log("Flight Data:", data);
    } catch (error) {
        console.error("Error fetching flights:", error);
    }
    };

    return (
        <div>
            {/* Aviasales Widget */}
            {flights && <div ref={widgetRef} />}

            {/* Button to Fetch Flights */}
            <button onClick={fetchFlights} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#32a8dd", color: "white", border: "none", cursor: "pointer" }}>
                Search Flights
            </button>

            {/* Display Flight Results */}
            
            <FlightList />
            
        </div>
    );
};

export default Aviasales;
