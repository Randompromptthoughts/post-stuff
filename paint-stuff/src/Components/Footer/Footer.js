import React from 'react';
// import { useState } from 'react';
import './Footer.css';

const Footer = () => {

  const gitHub = 'Randompromptthoughts';
  // const [forcedUse] = useState();           //Hook #1
  return (
    <div>
      <small className='fun-color'>
        &copy; Copyright {2020}, {gitHub}. All Rights Reserved
      </small>
    </div>
  )
}

export default Footer;