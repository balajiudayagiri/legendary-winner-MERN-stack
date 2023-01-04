import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  const item = props.data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.image} title={item.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.context}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Share</Button>
        <Button variant="outlined">Learn More</Button>
        <Button variant="contained">Buy</Button>
      </CardActions>
    </Card>
  );
}
