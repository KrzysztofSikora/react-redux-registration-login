import React, {Component} from "react";

import { Button, TextInput, Container} from "../../_helpers/theme";
import {Link} from "react-router-dom";
import {userActions} from "../../_actions";

import { connect } from 'react-redux';

class UserList extends Component {

    componentDidMount = () => {
         this.props.dispatch(userActions.getAll());
    };

    handleDeleteUser = id => {
            return (e) => this.props.dispatch(userActions.delete(id));
    };

    render () {
        const { users, user} = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Hi {user.name}!</h3>
                <p>You're logged in with React!! homePage</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                <ul>
                    {users.items.data.map((user, index) =>
                        <li key={index}>
                            {user.name + ' ' + user.username}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
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

const connectedUserList = connect(mapStateToProps)(UserList);
export { connectedUserList as UserList };

