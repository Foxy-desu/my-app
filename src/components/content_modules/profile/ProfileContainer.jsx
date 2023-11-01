import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import Preloader from '../../../common/preloader/Preloader';
import { setUserProfile, setCurrentProfileId, toggleIsFetching } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

//wrapper to  use HOC pattern 
function withRouter(Component){
    const ComponentWithRouterProp =(props)=> {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component {...props}
                        router={{location,navigate,params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainerAPI extends React.Component {

    componentDidMount = () => {
        let profileId = this.props.router.params.profileId || 8;
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
                this.props.toggleIsFetching(false);
            });
    };

    render = () => {
        return <>
            {!this.props.profile || this.props.isFetching
            ? <Preloader/> 
            : <Profile {...this.props}/> }
        </>
       
    };

};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        currentProfileId: state.profilePage.currentProfileId,
        isFetching: state.profilePage.isFetching,
    };
}


const ProfileContainer = connect(mapStateToProps, {setUserProfile, setCurrentProfileId, toggleIsFetching})(withRouter(ProfileContainerAPI));
export default ProfileContainer;
