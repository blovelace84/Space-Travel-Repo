const express = require('express');
const app = express();
const port = 5000;
const db = require('./db'); //Database connection
const planetRoutes = require('./routes/planets');
const bookingRoutes = require('./routes/bookings');

app.use(express.json()); //parse JSON request bodies

app.use('./planets', planetRoutes); //Mount planet routes
app.use('./bookings', bookingRoutes); //Mount booking routes

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});