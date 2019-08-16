import React from 'react';
import { connect } from 'react-redux';
import { UserList } from '../_components/UserList'
import {todoService} from "../_services";
import { userService } from "../_services";

class HomePage extends React.Component {
    componentDidMount() {
        console.log("t",userService, todoService.getAllToDo())
    }

    handleDeleteUser(id) {

    }

    render() {
        return (
            <UserList />
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };