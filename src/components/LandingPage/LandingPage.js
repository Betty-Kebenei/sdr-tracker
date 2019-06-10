import React, { Component } from 'react';
import Header from './Header/header';
import Content from './Content/content';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showNav: false
         }
    }
    toggleSideNav = (action) => {
        this.setState({
            showNav: action
        })
    }
    render() { 
        return ( 
            <div>
            <Header
                showNav={this.state.showNav}
                onHideNav={()=>this.toggleSideNav(false)}
                onOpenNav={()=>this.toggleSideNav(true)}/>
            <Content/>
            </div>
            
         );
    }
}
 
export default LandingPage;