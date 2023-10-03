import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendsItems/FriendsItem";

const Navigation = (props) => {
  

  function isActive(item) {
    return (
      item.isActive ? classes['active'] + ' ' + classes['hover-active'] : classes['link']
    );
  };
  let friendsElements = props.friends.map(friend => {
    return (
      <FriendsItem friendName={friend.name} avatar={friend.dialogueAvatar} friendId={friend.id} />
    )
  });


  return (
    <nav className={classes["app-navigation"]}>
      <ul className={classes["app-navigation__menu"]}>
        <li className={`${classes["app-navigation__menu-item"]} ${classes["profile-item"]}`}><NavLink to="/profile" className={isActive}>Profile</NavLink></li>
        <li className={`${classes["app-navigation__menu-item"]} ${classes["messages-item"]}`}><NavLink to="/dialogues" className={isActive}>Messages</NavLink></li>
        <li className={`${classes["app-navigation__menu-item"]} ${classes["news-item"]}`}><NavLink to="/news" className={isActive}>News</NavLink></li>
        <li className={`${classes["app-navigation__menu-item"]} ${classes["music-item"]}`}><NavLink to="/music" className={isActive}>Music</NavLink></li>
        <li className={`${classes["app-navigation__menu-item"]} ${classes["settings-item"]}`}><NavLink to="/settings" className={isActive}>Settings</NavLink></li>
      </ul>

      <div className={classes["friends-block"]}>
        <h2 className={classes["friends-block__heading"]}><NavLink className={isActive} to="/friends">Friends</NavLink></h2>
        <div className={classes["friends-wrapper"]}>
          <div className={classes["friends-elements"]}>
            {friendsElements}
          </div>
        </div>
      </div>
    </nav>

  );

};

export default Navigation;