import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import "@babel/polyfill";


import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {PrivateRoute} from '../_components/PrivateRoute/index';
import {HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import {RegisterPage} from '../RegisterPage';
import {ToDoPage} from '../ToDoPage';
import {ToDoEditForm} from '../_containers/ToDoEditForm';

import {NotFound} from '../_components/NotFound';
import {NavBar} from '../_containers/NavBar';

class App extends React.Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const {alert} = this.props;
        return (
            <Router history={history}>
                <div id="wrapper">
                    <NavBar/>


                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            </nav>
                            <div className="container-fluid">
                                {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                                <Switch>
                                    <PrivateRoute exact path='/' component={HomePage}/>
                                    <PrivateRoute exact path={'/todo_items/:itemId'} component={ToDoEditForm}/>
                                    <Route exact path={'/login'} component={LoginPage}/>
                                    <Route path={'/register'} component={RegisterPage}/>
                                    <PrivateRoute exact path={"/todo"} component={ToDoPage}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </div>
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; krzysztofsikora.pl 2019</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};