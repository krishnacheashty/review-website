import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'
import logo from '../../image/576c93_b4fb74277ca545e58d90bd1d6125ec84_mv2_d_3600_1200_s_2.webp'
import logo1 from '../../image/download.jpg'
import Footer from '../Footer/Footer';
import ManuBar from '../manuBar/ManuBar';

const About = () => {
    return (
        <div>
            <ManuBar/>
            <div className='container mt-3'>
                <div className='row mt-3'>
                    <div className="d-flex justify-contain-center">
                        <div className="col-md-4">
                            <img className='w-75' src={logo} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h3>
                                
                                Dance Recitals
                            </h3>
                            <p> Dancing on stage in front of an audience builds confidence in these young performers. They know that all eyes are on them while they perform their dances & sets. Our Dance Students at LDDF are full of joy and pride when they stride off the stage makes the backstage area feel electric! </p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 bg-light'>
                    <div className="d-flex justify-contain-center">
                        <div className="col-md-4">
                            <img className='w-75' src={logo1} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h3> Company Dolls  </h3>
                            <p> 
                                Company Dolls 
                                Our Dance Company Team at LDDF are trained in all disciplines of dance and have Company Rehearsals once a week. They regularly compete on the national competition circuit and have recently been awarded Highest Scoring Group of the day at several events and are looking forward to taking part in various National Finals across Florida & the rest of the United States in the upcoming months.
                                </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
};

export default About;