import React from "react";
import Navigation from "./Navigation";

const NavigationContainer = (props) => {


  let friendsList = props.state.navigationBar.friendsList;

  return (
    <Navigation friends={friendsList}/>
  );

};

export default NavigationContainer;