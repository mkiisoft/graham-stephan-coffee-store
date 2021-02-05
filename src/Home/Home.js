import "./Home.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import Restaurant from "../Restaurant/Restaurant";
import RestaurantList from "../Restaurant/RestaurantList";

var result = [];

class Home extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = "https://8ygvs8prgf.execute-api.us-east-1.amazonaws.com/dev/";
    const response = await fetch(url);
    const data = await response.json();
    result = data.businesses.map((item) => new Restaurant(item));
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="HomeContent">
        {this.state.loading ? (
          <CircularProgress
            className="HomeLoading"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: "-20px",
            }}
          />
        ) : (
          <RestaurantList list={result} />
        )}
      </div>
    );
  }
}

export default Home;
