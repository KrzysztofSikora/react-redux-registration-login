import React, { Component } from 'react'
import { Link } from "../../_helpers/theme"


class NavBar extends Component {

    render() {

        // let { location } = this.props.history
        // const homeClass = location.pathname === "/" ? "active" : "";
        // const todoClass = location.pathname.match(/^\/todo/) ? "active" : "";
        // const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
        //


        return (

            <ul className="nav nav-pills">
                <li role="presentation" ><a href="/">Home</a></li>
                <li role="presentation"  ><a href="/todo">ToDo List</a></li>
                <li role="presentation"  ><a href="/">New Login</a></li>
            </ul>
        )
    }
}

export default NavBar