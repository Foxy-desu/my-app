import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../../common/preloader/Preloader';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching } from '../../../redux/usersReducer';

class UsersAPIComponent extends React.Component {
 
    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response)=> {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    };

    onPageChanged =(page)=> {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    };

    render = () => {
        return <>
            {this.props.isFetching 
            ? <Preloader/>
            : <Users onPageChanged={this.onPageChanged}
            currentPage = {this.props.currentPage} 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize} 
            users={this.props.users} 
            unfollow={this.props.unfollow} 
            follow={this.props.follow}/>} 
         </>
    };

};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersAPIComponent);

export default UsersContainer;