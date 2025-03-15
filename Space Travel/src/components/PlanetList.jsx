import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import { supabase } from "../supabaseClient";

function PlanetList() {
  const [planets, setPlanets] = useState([]); // Initialize as an empty array!
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      setError(null);
      try{
        console.log('Fetching Planets...');
        const { data, error } = await supabase.from('planets').select("*");
        console.log('Supabase response:', data, error);
        if(error){
          throw error;
        }
        setPlanets(data);
      }catch (err){
        setError(err);
        console.error("Error fetching planets,", err);
      }finally{
        setLoading(false);
      }
    };
    fetchPlanets();
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