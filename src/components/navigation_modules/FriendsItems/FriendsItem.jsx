import classes from "./FriendsItem.module.css"
import { NavLink } from "react-router-dom";

function FriendsItem(props) {

    let path = `/friends/id:${props.friendId}`;

    function isActive(item) {
        return (
          item.isActive ? classes['active'] + ' ' + classes['hover-active'] : classes['link']
        );
      };

    return (
        <div className={classes["friend-wrap"]}>
            <div className={classes["friend-avatar-wrap"]}>
                <img className={classes["friend-avatar-image"]} src={props.avatar} alt="Avatar" />
            </div>
            <div className={classes["friend-name-wrap"]}>
                <NavLink className={isActive} to={path}>{props.friendName}</NavLink>
            </div>
        </div>
    )
};

export default FriendsItem;