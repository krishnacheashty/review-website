import React from 'react';
import { Link } from 'react-router-dom';
import './MAnuBar.css'
import logo from '../../image/Dance-Academy-l-removebg-preview.png'
import { Col } from 'react-bootstrap';


const ManuBar = () => {
    return (
        <div className='manubar-container'>
            <div className="container">
                <div className='row'>
                  <Col md={2}>
                    <div className="logo-img">
                    <img className='w-75' src={logo} alt="logo img"  />
                    </div>
                  </Col>
                  <Col md={10}>
                    <ul className="d-flex align-items-end justify-content-end">
                      <Link to ='Home' className='items'>
                      <li>Home</li>
                      </Link>
                      <Link to='about'className='items'>
                        <li>About</li>
                      </Link>
                      <Link to='blog' className='items'>
                        <li>Blog</li >
                      </Link>
                      <Link to='services' className='items'>
                        <li>Services</li>
                      </Link>                   
                    </ul>
                  </Col>
                </div>
          
            </div>
            
        </div>
    );
};

export default ManuBar;