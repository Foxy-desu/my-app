import React from "react";
import classes from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                { id: "1", photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwZGEWka0ju0By1o0xkovmP7VdCJeUD-5Fw&usqp", followed: true, fullName: "Desu", status: "I am a boss", location: { city: "St. Petersburg", country: "Russia" }, },
                { id: "2", photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy-7MMHRZZe0aVFY3RCAvQFH-uklXYTt_TpGjnH4lB1goGlzdz6Y2JDFl0KZZjUYJc1Q&usqp", followed: true, fullName: "Defu", status: "hi", location: { city: "Minsk", country: "Belarus" }, },
            ]
        )
    }

    return (
        <div>

            {props.users.map((user) => {
                return (
                    <div className={classes["user"]} key={user.id}>
                        <div className={classes["user__container_left"]}>
                            <div>
                                <img className={classes["user__user-photo"]} src={user.photoURL} />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { props.unfollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={classes["user__container_right"]}>
                            <div className={classes["user__user-info-wrap"]}>
                                <div className={`${classes["user__user-info"]} ${classes["user__user-info-name"]}`}>{user.fullName}</div>
                                <div className={`${classes["user__user-info"]} ${classes["user__user-info-status"]}`}>{user.status}</div>
                            </div>
                            <div className={classes["user__user-info-wrap"]}>
                                <div className={`${classes["user__user-info"]} ${classes["user__user-info-city"]}`}>{user.location.city}</div>
                                <div className={`${classes["user__user-info"]} ${classes["user__user-info-country"]}`}>{user.location.country}</div>
                            </div>
                        </div>
                    </div>
                )

            })
            }

        </div>
    );

}

export default Users;