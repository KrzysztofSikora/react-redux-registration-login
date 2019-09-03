import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { todoActions } from '../_actions';
import { ToDoList } from '../_containers/ToDoList'


class ToDoPage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
        this.props.dispatch(todoActions.getAll());

    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h3>Hi {user.name}!</h3>
                    <p>ToDo Page</p>
                    <ToDoList/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, todo, authentication } = state;
    const { user } = authentication;
    return {
        todo,
        user,
        users
    };
}

const connectedToDoPage = connect(mapStateToProps)(ToDoPage);
export { connectedToDoPage as ToDoPage };