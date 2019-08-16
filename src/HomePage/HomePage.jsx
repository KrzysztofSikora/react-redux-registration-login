import React from 'react';
import { connect } from 'react-redux';
import { UserList } from '../_components/UserList'
import {todoService} from "../_services";
import { userService } from "../_services";

class HomePage extends React.Component {
    componentDidMount = async () => {


        var getAllToDo = await todoService.getAllToDo()

        let body = {
            done: 0,
            content: "refactor"
        }

        var createToDo = await todoService.createToDo(body)
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