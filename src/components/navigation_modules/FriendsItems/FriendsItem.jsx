import React from "react";
import classes from "./FriendsItem.module.css"
import { NavLink } from "react-router-dom";

class FriendsItem extends React.Component {

    isActive =(item)=> {
        return (
            item.isActive ? classes['active'] + ' ' + classes['hover-active'] : classes['link']
          );
    }

    render =()=> {
        let path = `/friends/id:${this.props.friendId}`;
        
        return (
            <div className={classes["friend-wrap"]}>
                <div className={classes["friend-avatar-wrap"]}>
                    <img className={classes["friend-avatar-image"]} src={this.props.avatar} alt="Avatar" />
                </div>
                <div className={classes["friend-name-wrap"]}>
                    <NavLink className={this.isActive} to={path}>{this.props.friendName}</NavLink>
                </div>
            </div>
        )
    }
};

export default FriendsItem;