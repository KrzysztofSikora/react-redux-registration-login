import React from 'react';
import {connect} from 'react-redux';
import {UserList} from '../HomePage/UserList'
import {todoService} from "../_services";
import {userService} from "../_services";
import { todoActions } from "../_actions";
import { store } from "../_helpers"
import { ContentsList } from "./_containers/ContentsList";
class ContentPage extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h3>Hi {user.name}!</h3>
                    <p>Content Page</p>
                    <ContentsList/>adasdsa
                </div>
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

const connectedContentPage = connect(mapStateToProps)(ContentPage);
export {connectedContentPage as ContentPage};
