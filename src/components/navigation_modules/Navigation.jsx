import React from "react";
import navClasses from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendsItems/FriendsItem";


const Navigation = (props) => {

  function isActive(item) {
    return (
      item.isActive ? navClasses['active'] + ' ' + navClasses['hover-active'] : navClasses['link']
    );
  };

  let friendsElements = props.navigationState.friendsList.map(friend => {
    return (
      <FriendsItem friendName={friend.name} avatar={friend.dialogueAvatar} friendId={friend.id} />
    )
  });


  return (
    <nav className={navClasses["app-navigation"]}>
      <ul className={navClasses["app-navigation__menu"]}>
        <li className={`${navClasses["app-navigation__menu-item"]} ${navClasses["profile-item"]}`}><NavLink to="/profile" className={isActive}>Profile</NavLink></li>
        <li className={`${navClasses["app-navigation__menu-item"]} ${navClasses["messages-item"]}`}><NavLink to="/dialogues" className={isActive}>Messages</NavLink></li>
        <li className={`${navClasses["app-navigation__menu-item"]} ${navClasses["news-item"]}`}><NavLink to="/news" className={isActive}>News</NavLink></li>
        <li className={`${navClasses["app-navigation__menu-item"]} ${navClasses["music-item"]}`}><NavLink to="/music" className={isActive}>Music</NavLink></li>
        <li className={`${navClasses["app-navigation__menu-item"]} ${navClasses["settings-item"]}`}><NavLink to="/settings" className={isActive}>Settings</NavLink></li>
      </ul>

      <div className={navClasses["friends-block"]}>
        <h2 className={navClasses["friends-block__heading"]}><NavLink className={isActive} to="/friends">Friends</NavLink></h2>
        <div className={navClasses["friends-wrapper"]}>
          <div className={navClasses["friends-elements"]}>
            {friendsElements}
          </div>
        </div>
      </div>
    </nav>

  );

};

export default Navigation;