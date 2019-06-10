import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Senders from './Applications/Senders/senders'


const Routes = () => {
    return ( 
        <div>
            <Route path='/senders' exact component={Senders}/>
            <Route path='/' exact component={LandingPage}/>
        </div>
     );
}
 
export default Routes;