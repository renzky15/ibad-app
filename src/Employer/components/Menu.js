import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import logo from '../../img/admin.jpg';

export default class Menu extends Component {
    render() {
        return (
            
                <div>
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src={logo} className="img-circle" alt="User" />
                            </div>
                            <div className="pull-left info">
                                <p>Admin Renz</p>
                                <NavLink to="/"><i className="fa fa-circle text-success" /> Online</NavLink>
                            </div>
                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                        <i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        {/* /.search form */}
                        {/* sidebar menu: : style can be found in sidebar.less */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            
                            <li>
                                <NavLink to="/employer/profile">
                                    <i className="fa fa-user" /> <span>Profile</span>
                                   
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/employer/employee">
                                    <i className="fa fa-users" /> <span>Employees</span>
                                   
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/employer/mail">
                                    <i className="fa fa-envelope" /> <span>Mail</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-green">new</small>
                                    </span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/employer/job">
                                    <i className="fa fa-briefcase" /> <span>Job</span>
                                    {/* <span className="pull-right-container">
                                        <small className="label pull-right bg-green">new</small>
                                    </span> */}
                                </NavLink>

                            </li>

                            <li>
                                <NavLink to="/employer/job-acceptance">
                                    <i className="fa fa-bell" /> <span>Job Acceptance</span>
                                    {/* <span className="pull-right-container">
                                        <small className="label pull-right bg-green">new</small>
                                    </span> */}
                                </NavLink>

                            </li>



                            <li>
                                <NavLink to="/employer/settings">
                                    <i className="fa fa-gears" /> <span>Setup</span>
                                    {/* <span className="pull-right-container">
                                        <small className="label pull-right bg-green">new</small>
                                    </span> */}
                                </NavLink>
                                
                            </li>
                            
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>

            </div>

               
           
        )
    }
}
