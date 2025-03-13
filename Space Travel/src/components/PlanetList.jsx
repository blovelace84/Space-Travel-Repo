import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';

function PlanetList() {
  const [planets, setPlanets] = useState([]); // Initialize as an empty array!

  useEffect(() => {
    axios
      .get('/planets')
      .then((reponse) => {
        console.log(reponse.data);
        setPlanets(reponse.data);
      })
      .catch((error) => console.error('Error fetching planets:', error));
  }, []);

  return (
    <div>
        {Array.isArray(planets) && planets.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
        ))}
        {!Array.isArray(planets) && <p>Loading Planets...</p>}
    </div>
  );
}

export default PlanetList;