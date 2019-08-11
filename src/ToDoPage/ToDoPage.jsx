import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import { ToDoList } from '../_containers/ToDoList'





class ToDoPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        console.log("t",this.props)
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Hi {user.name}!</h3>
                <p>ToDo Paage</p>
                <ToDoList/>

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

const connectedToDoPage = connect(mapStateToProps)(ToDoPage);
export { connectedToDoPage as ToDoPage };