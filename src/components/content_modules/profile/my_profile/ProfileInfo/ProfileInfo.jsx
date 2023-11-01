import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';

const ProfileInfo = (props) => {

    const data = props.profile ? props.profile : '';
    
    const contacts = data.contacts;
    let contactsArr = [];

    for(let key in contacts) {
        if(contacts[key]) {
            contactsArr = [...contactsArr, <li key={key}><span>{key}:</span><span className={classes['link']}>{contacts[key]}</span></li>]
        }
    };
    return (
        <div className={classes['profile-info__wrap']}>
            <ProfileAvatar photos={data.photos}/>
            <div className={classes['profile-info']}>
                <div className={classes['profile-info__name-wrap']}>
                    <p>{data.fullName}</p>
                </div>
                <div className='personal-info-wrap'>
                    <p className={`${classes['birth-date']} ${classes['profile-info__personal-data']}`}>About me: <span>{data.aboutMe}</span></p>
                    <p className={`${classes['location']} ${classes['profile-info__personal-data']}`}>Status: <span>{data.lookingForAJobDescription}</span></p>
                    <div className={`${classes['education']} ${classes['profile-info__personal-data']}`}>Contacts: <ul>{contactsArr}</ul></div>
                </div>
            </div>
        </div>
    );
}




export default ProfileInfo;