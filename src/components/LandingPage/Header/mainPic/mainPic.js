import React from 'react';
import './mainPic.css'

const MainPic = () => {
    const displayPic = () => (
        <div className='img-holder'>
            <img alt="Main-pic" src="/images/kneel.jpg" style={{height: '100%', width: '100%'}}/>
        </div>
    )
    return ( 
        <div>
            {displayPic()}
        </div>
     );
}
 
export default MainPic;