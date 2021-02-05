import "./Restaurant.css";
import React from "react";
import { Box, Grid } from "@material-ui/core";
import RestaurantCard from "./RestaurantCard";
import Credits from "../Components/Credits";
import backgroundImg from "../assets/background.jpg";

const RestaurantList = (props) => {
  const restaurants = props.list;
  return (
    <div className="GridLayout">
      <div className="GridBackground" style={{ userSelect: "none" }}>
        <img
          className="ImageBackground"
          src={backgroundImg}
          alt="Background Image - Coffee Store"
        />
        <div className="GradientBackground" />
        <h1 className="Title">Graham's Coffee Stores</h1>
      </div>
      <div className="GridView">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {restaurants.map((item) => (
            <RestaurantCard restaurant={item} />
          ))}
        </Grid>
        <Credits />
      </div>
    </div>
  );
};

export default RestaurantList;
