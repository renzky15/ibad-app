import React, { Component } from 'react';
import logo from '../img/admin.jpg';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

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
                                <img src= {logo} className="img-circle" alt="User" />
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
                            <li className="active treeview menu-open">
                                <a href="/url_here">
                                    <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                                    <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                                </ul>
                            </li>
                            
                            <li>
                                <a href="pages/widgets.html">
                                    <i className="fa fa-th" /> <span>Widgets</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-green">new</small>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <NavLink to="/mail">
                                    <i className="fa fa-envelope" /> <span>Mail</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-green">new</small>
                                    </span>
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
