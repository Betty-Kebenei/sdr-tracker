import React from 'react';
import Logo from './logo/Logo';
import FontAwesone from 'react-fontawesome';
import Mission from './mission/Mission';
import News from './news/News';
import './senders.scss';

const Senders = () => {
    const missionStatemet = '...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat'
    const missionStatemetIcon = 'users';
    const missionStatementTitle = 'OUR VISION'

    const visionaStatement = '...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat'
    const visionStatemetIcon = 'binoculars';
    const visionStatementTitle = 'OUR MISSION'
    return ( 
        <React.Fragment>
            <div className="react-logo">
                <Logo />
            </div>
            <div className="sen-welcome-pic">
                <img src="/images/sendme.jpg" alt="welcome" />
            </div>
            
            <div className="welcome-div">
                <img src="/images/senders/message.png" alt="welcome" />
                <button type="button">
                    <span>Become a member</span>{' '}{' '}
                        <FontAwesone name='user-plus'/>
                </button>
                <button type="button" className="welcome-div-support">
                    <span>SUPPORT</span>
                </button>
            </div>
            <div className="mission-statement">
                <Mission
                    statement={missionStatemet}
                    statemetIcon={missionStatemetIcon}
                    statementTitle={missionStatementTitle} />
                <div className="mission-statement-us">
                    <p className="mission-statement-us-title">who are we...</p>
                    <p className="mission-statement-us-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris... </p>
                    <span><p>More +</p></span>
                </div>
                <Mission
                    statement={visionaStatement}
                    statemetIcon={visionStatemetIcon}
                    statementTitle={visionStatementTitle} />
            </div>
            <div className="whats-new">
                <p className="whats-new-header">What's new...<span>View All</span></p>
                <News />
            </div>
        </React.Fragment>
     );
}
 
export default Senders;