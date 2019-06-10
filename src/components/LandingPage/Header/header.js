import React from 'react'
import FontAwesome from 'react-fontawesome';
import SideNav from './sideNav/sideNav';
import MainPic from './mainPic/mainPic';

const Header = (props) => {
    const navBar = () => (
        <div className='bars'>
            <FontAwesome name='bars'
                onClick={props.onOpenNav}
                style={{
                    color:'black',
                    padding:'10px',
                    cursor:'pointer'
                }}/>
        </div>
    )
    return ( 
        <div>
            <SideNav {...props}/>
            {navBar()}
            <MainPic/>
        </div>
     );
}
 
export default Header;