import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class NavBar extends Component {

    render() {

        return (
                <ul className="nav nav-pills">
                    <li role="presentation"><Link className='btn btn-default' to={`/`}>Home</Link></li>
                    <li role="presentation"><Link className='btn btn-default' to={`/content`}> Content</Link></li>
                    <li role="presentation"><Link className='btn btn-default' to={`/register`}>Registry</Link></li>
                    <li role="presentation"><Link className='btn btn-default' to={`/login`}>Logout</Link></li>
                </ul>
        )
    }
}

export default NavBar
