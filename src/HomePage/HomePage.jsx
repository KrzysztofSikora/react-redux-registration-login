import React from 'react';
import {connect} from 'react-redux';
import {UserList} from '../_components/UserList'
import {todoService} from "../_services";
import {userService} from "../_services";
import { todoActions } from "../_actions";
import { store } from "../_helpers"
class HomePage extends React.Component {
    render() {
        return (<div className='row justify-content-md-center'>
                <UserList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication, todo} = state;
    const {user} = authentication;
    return {
        user,
        users,
        todo

    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};