import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Senders from './Applications/Senders/senders'
import Header from '../components/LandingPage/Header/header'


class Routes extends Component {
    state = {
        showNav: false
    }
    toggleSideNav = (action) => {
        this.setState({
            showNav: action
        })
    }
    render(){
        return ( 
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={()=>this.toggleSideNav(false)}
                    onOpenNav={()=>this.toggleSideNav(true)}/>
                <Route path='/senders' exact component={Senders}/>
                <Route path='/' exact component={LandingPage}/>
            </div>
         );
    }
}
 
export default Routes;