import Navigation from "./Navigation";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
  return{
    friends: state.navigationBar.friendsList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;