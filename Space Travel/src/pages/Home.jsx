import React from "react";
import PlanetList from "../components/PlanetList";
import BookingForm from "../components/BookingForm";

const Home = () => {
    return(
        <div>
            <h1>Space Travel</h1>
            <PlanetList />
            <BookingForm />
        </div>
    );
}

export default Home;