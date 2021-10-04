import React from 'react';
import { Button } from 'react-bootstrap';
import ManuBar from '../manuBar/ManuBar';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div >
                <div className=''>
                    <div className='row d-flex banner align-items-center justify-content-center'>
                        <ManuBar></ManuBar>
                        <div className='col-md-7 justify-contain m-4'>
                            <h1 className="text-color fs-3">
                            The #1 Dance Studio in bangladesh. <br />Start your career with us.
                            </h1>
                            <p className='text-dark text-center mt-3'>
                            Since 2009, The Living Dolls Dance Factory has been the best Dance Studio in bangladesh. From its Award Winning Dance Classes, state of the art dance school & experienced dance instructors, it's no secret why our Dance Studio has been voted #1 by parents & students.
                            </p>
                            <Button variant="info">Join Us</Button>{' '}

                        </div>
                        <div className='col-md-5'></div>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default Banner;