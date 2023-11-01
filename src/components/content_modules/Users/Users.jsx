import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css"
import userphoto from "../../../assets/images/user-image-mock.png"

const Users = ({currentPage, onPageChanged, users, unfollow, follow, totalUsersCount, pageSize, setProfileId }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize); //для манипуляции со старницами нужно знать их кол-во
    let pages = []; //сюда будем складывать наши страницы (а именно элементы пагинации)

    for (let i = 1; i <= pagesCount; i++) {// проитерируем общее число страничек и каждую положим в массив пример: [1,2,3]
        pages.push(i)
    };

    function slicePages(){//собрали в функцию вычисление слайса общего массива страничек для компактности и удобства
            let curP = currentPage;
            let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
            let curPL = curP + 5;
            return pages.slice(curPF, curPL);
    };


    return (
        <div>
            <div className={classes["pagination"]}>
                {slicePages().map((page, index) => {//вызвали функцию. которая вернула нам массив из определенного диапазона страничек
                    return <span className={currentPage === page ? classes['selected-page'] : classes['page']}
                        onClick={() => {onPageChanged(page)}}
                        key={index}>{page}</span>
                })}
            </div>

            {users.map((user) => {
                return (
                    <div className={classes["user"]} key={user.id}>
                        <div className={classes["user__container_left"]}>
                            <div>
                                <NavLink to={`/profile/${user.id}`} onClick={()=> {
                                    setProfileId(user.id);}}>
                                    <img className={classes["user__user-photo"]} src={user.photos.small ? user.photos.small : userphoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { follow(user.id) }}>Follow</button>}
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

};

export default Users;