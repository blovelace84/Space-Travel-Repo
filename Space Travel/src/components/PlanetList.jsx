import React, { useState, useEffect} from "react";
import axios from "axios";
import PlanetCard from "./PlanetCard";

const PlanetList = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios.get('/planets') //Assume you backend is on the same origin configured proxy
            .then((Response) => setPlanets(Response.data))
            .catch((error) => console.error('Error fetching planets:', error));
    }, []);

    return(
        <div>
            {planets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
            ))}
        </div>
    );
}

export default PlanetList;