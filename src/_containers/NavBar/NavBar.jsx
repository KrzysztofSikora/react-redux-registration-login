import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    render() {

        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Can <sup>IT</sup></div>
                </a>
                <hr className="sidebar-divider my-0"/>

                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                         data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <ul>
                                <li role="presentation"><Link className='btn btn-default' to={`/`}>Home</Link></li>
                                <li role="presentation"><Link className='btn btn-default' to={`/todo`}> ToDo List</Link></li>
                                <li role="presentation"><Link className='btn btn-default' to={`/register`}>Registry</Link></li>
                                <li role="presentation"><Link className='btn btn-default' to={`/login`}>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>


        )
    }
}

export default NavBar