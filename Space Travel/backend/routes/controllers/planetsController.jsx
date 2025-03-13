import { getAllPlanets } from '..models/planet';

const getPlanets = async (requestAnimationFrame, res) => {
    try{
        const planets = await getAllPlanets();
        res.json(planets);
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal server error'});
    }
};

export default {
    getPlanets,
};