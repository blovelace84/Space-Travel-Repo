import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import  Typography  from "@mui/material/Typography";

const PlanetCard = ({ planet }) => {
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={planet.image.url} alt={planet.name} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {planet.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Distance: {planet.distance}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PlanetCard;