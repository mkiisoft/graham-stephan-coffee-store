import React from "react";
import { Grid } from "@material-ui/core";

const RestaurantCard = (props) => {
  const restaurant = props.restaurant;
  return (
    <Grid container item xs={12} md={4} sm={6} spacing={24}>
      <div
        className="Card"
        onClick={(e) => window.open(restaurant.url, "_blank")}
      >
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          style={{ userSelect: "none" }}
          draggable="false"
          onmousedown="return false"
        />
        <div className="Data" style={{ userSelect: "none" }}>
          <h1 className="BusinessName" id="product-sans">
            {restaurant.name}
          </h1>
          <h3 className="BusinessAddress">{restaurant.address}</h3>
          <div className="SectionRating">
            <h1 className="BusinessRating">{restaurant.rating} ⭐️</h1>
            <div className="BusinessSpace" />
            <h1 className="BusinessPrice">${restaurant.price}</h1>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default RestaurantCard;
