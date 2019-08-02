import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/senders'>
      <img src="/images/senders/logo.PNG" alt="senders logo"/>
    </Link>
  );
};

export default Logo;