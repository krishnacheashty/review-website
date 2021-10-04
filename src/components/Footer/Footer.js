import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import './Footer.css'
import image from '../../image/Dance-Academy-l-removebg-preview.png';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {
    const element = <FontAwesomeIcon icon={faPhoneVolume} />
    // const element1 = <FontAwesomeIcon icon={faFacebookSquare} />
   
    return (
        <div className='footer-container bg-secondary'>
            <div className="container ">
                <div className="row ">
                    <div className='d-flex align-items-center justify-content-center'>
                    <div className="col-md-4">
                       <div>
                       <img className='w-50' src={image} alt="" />
                       </div>
                        <div>
                            <h4>
                            <small>2/1,gulshan nam tour,dhaka,1203,Bangladesh(main Branch)</small>
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>Subscribe to our newsletter to find out about

                            new classes, intensives and promotions.
                        </p>
                        <input type="text" placeholder='GIVE YOUR GMAIL' className='p-2' />
                        <Button variant="primary">Join Us</Button>{' '}
                    </div>
                    <div className="col-md-4 m-3"> 
                    <h2>Quick Contact</h2>
                        <p>{element}   mobile:01899564832</p>
                            <div className="icons-container d-flex text-center ">
                        <div className="icon">
                        <i className="fab fa-instagram-square text-white"></i>
                        </div>
                        <div className="icon">
                            
                        </div>
                        <div className="icon">
                            
                        </div>
                        <div className="icon">
                           
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;