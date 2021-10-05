import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import './Footer.css'
import image from '../../image/Dance-Academy-l-removebg-preview.png';
import "./Footer.css"
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
    const element = <FontAwesomeIcon icon={faPhoneVolume} size="2x" color="white" />
    // const element1 = <FontAwesomeIcon icon={faFacebookSquare} />
    
    return (
        <div className='footer-container bg-secondary container'>
            <div className="container ">
                <div className="row ">
                    <div className='d-flex align-items-center justify-content-center'>
                    <div className="col-md-4">
                       <div>
                       <img className='w-50' src={image} alt="" />
                       </div>
                        <div>
                            <h4>
                            <small className='p-3'>2/1,gulshan nam tour,dhaka,1203,Bangladesh(main Branch)</small>
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
                        <p>{element} <span className="fs-2">mobile:01899564832</span></p>
                            <div className="icons-container d-flex text-center ">
                        <div className="icon">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </div>
                        <div className="icon">
                        <FontAwesomeIcon icon={faInstagram}size="2x" />
                        </div>
                        <div className="icon">
                        <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </div>
                        <div className="icon">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
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