import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllToDos, userActions} from '../_actions';
import { todoActions } from '../_actions';
import { ToDoList } from '../_containers/ToDoList'
import  { LocationAllToDo }  from '../_components/LocationAllToDo/LocationAllToDo'


class FeaturePage extends React.Component {
    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <p>Todo col</p>

                    <ToDoList/>
                </div>
                <div className="col-md-6">
                    <p>Map col</p>
                    <LocationAllToDo />
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

const connectedFeaturePage = connect(mapStateToProps)(FeaturePage);
export { connectedFeaturePage as FeaturePage };