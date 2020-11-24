import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';

const Navi = () => {
  return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <h1 className='canvas-picker'>Canvas Picker</h1>
        <Nav.Link className='my-list' eventKey="link-1">My List</Nav.Link>
        <Nav.Link className='logout' eventKey="link-2">logout</Nav.Link>
      </Nav>


  )
}

export default Navi;