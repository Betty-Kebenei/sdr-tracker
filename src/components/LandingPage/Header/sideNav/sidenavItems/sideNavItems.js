import React from 'react';
import FontAwesone from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './sideNavItems.scss';

const SideNavItems = () =>{
    let navItems = [
        {
            styling: 'option',
            name: 'home',
            text: 'Home',
            link: '/'
        },
        {
            styling: 'option',
            name: 'file-text-o',
            text: 'news',
            link: '/'
        },
        {
            styling: 'option',
            name: 'play',
            text: 'Videos ',
            link: '/'
        },
        {
            styling: 'option',
            name: 'sign-in',
            text: 'Sign-in ',
            link: '/'
        },
        {
            styling: 'option',
            name: 'sign-out',
            text: 'Sign-out ',
            link: '/'
        }
    ]
    const showItems = () => (
        navItems.map((item,key)=>(
            <div className={item.styling} key={key}>
                <Link to={item.link}>
                    <FontAwesone name={item.name}/>
                    {item.text}
                </Link>
            </div>
        ))
    )
        return ( 
            <div>
                {showItems()}
            </div>
         );
}
 
export default SideNavItems;