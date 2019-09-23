import React from 'react';
import './mainPic.scss'

const MainPic = () => {
    const displayPic = () => (
        <div className='img-holder'>
            <p className='header-item'>CONNECT</p>
            <p className='sdr'>SPIRITUAL DISCIPLINES TRACKER</p>
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