import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Content from './Content';
import Mailbox from './Mailbox';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


export default class IBad extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <div>
                    <Header/>
                    <Menu/>
                    <Route path="/" exact = {true} />
                    <Route path="/mail" component = {Mailbox}/>
                    <Footer/>
                </div>
                </Switch>
            </BrowserRouter>
            
        )
    }
}
