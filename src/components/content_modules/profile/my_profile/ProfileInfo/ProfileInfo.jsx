import React from "react";
import classes from "./ProfileInfo.module.css"

class ProfileInfo extends React.Component {
    render = () => {
        return (
            <div className={classes['app-main__profile-info']}>
                <div className={classes['name-wrap']}>
                    <p>Alexandra O</p>
                </div>
                <div className='personal-info-wrap'>
                    <p className={`${classes['birth-date']} ${classes['profile-info']}`}>Date of birth: <span>7 July</span></p>
                    <p className={`${classes['location']} ${classes['profile-info']}`}>City: <span>Saint-Petersburg</span></p>
                    <p className={`${classes['education']} ${classes['profile-info']}`}>Education: <span>AmSU'18</span>, <span>AmSU'20</span></p>
                    <p className={`${classes['site']} ${classes['profile-info']}`}>Web Site: <span>www.fox.com</span></p>
                </div>
            </div>
        );
    }
};

export default ProfileInfo;