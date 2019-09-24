import React, { Component } from 'react';
import MainPic from './Header/mainPic/mainPic';
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
                <MainPic/>
                <Content/>
            </div>
            
         );
    }
}
 
export default LandingPage;