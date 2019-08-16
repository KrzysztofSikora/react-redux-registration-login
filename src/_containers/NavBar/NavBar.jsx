import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import styled from "styled-components";

import { StyledLink } from '../../_helpers/theme'


class NavBar extends Component {

    render() {

        // let { location } = this.props.history
        // const homeClass = location.pathname === "/" ? "active" : "";
        // const todoClass = location.pathname.match(/^\/todo/) ? "active" : "";
        // const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
        //


        return (

            <ul className="nav nav-pills">
                <li role="presentation"><StyledLink to={`/`}>Home</StyledLink></li>
                <li role="presentation"><StyledLink to={`/todo`}> ToDo List</StyledLink></li>
                <li role="presentation"><StyledLink to={`/register`}>Registry</StyledLink></li>
            </ul>
        )
    }
}

export default NavBar