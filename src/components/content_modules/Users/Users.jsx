import React from "react";
import axios from "axios";
import classes from "./Users.module.css"
import userphoto from "../../../assets/images/user-image-mock.png"

class Users extends React.Component {
    
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then((response)=> {
                this.props.setUsers(response.data.items)
             });
    }

    render = () => {
        return (
            <div>
                {this.props.users.map((user) => {
                    return (
                        <div className={classes["user"]} key={user.id}>
                            <div className={classes["user__container_left"]}>
                                <div>
                                    <img className={classes["user__user-photo"]} src={user.photos.small ? user.photos.small : userphoto} />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                        : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
                                </div>
                            </div>
                            <div className={classes["user__container_right"]}>
                                <div className={classes["user__user-info-wrap"]}>
                                    <div className={`${classes["user__user-info"]} ${classes["user__user-info-name"]}`}>{user.name}</div>
                                    <div className={`${classes["user__user-info"]} ${classes["user__user-info-status"]}`}>{user.status}</div>
                                </div>
                                <div className={classes["user__user-info-wrap"]}>
                                </div>
                            </div>
                        </div>
                    )

                })
                }
            </div>
        );
    }
};

export default Users;