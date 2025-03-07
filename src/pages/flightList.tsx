import { useState, useEffect } from "react";
import { List, Card } from "antd";


interface FlightDetails {
  airline: string;
  departure_at: string;
  return_at: string;
  expires_at: string;
  price: number;
  flight_number: number;
}

type FlightsData = Record<string, Record<string, FlightDetails>>;

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<FlightsData>({}); // ✅ Default empty object

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/flights?origin=NYC&destination=LON&currency=USD");
        const data: FlightsData = await response.json();
        setFlights(data || {}); // ✅ Ensure data is always an object
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <List grid={{ gutter: 16, column: 1 }}>
      {flights &&
        Object.entries(flights).map(([destination, flightData]) =>
          Object.entries(flightData).map(([id, details]) =>
            details ? (
              <List.Item key={id}>
                <Card title={`Flight to ${destination} (${details.airline} - #${details.flight_number})`}>
                  <p>Departure: {new Date(details.departure_at).toLocaleString()}</p>
                  <p>Return: {new Date(details.return_at).toLocaleString()}</p>
                  <p>Price: ${details.price / 100}</p>
                </Card>
              </List.Item>
            ) : null
          )
        )}
    </List>
  );
};

export default FlightList;
