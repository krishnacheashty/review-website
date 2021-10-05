import React from 'react';
import { Row } from 'react-bootstrap';
import UseCourse from '../../utilities/Utilities';
import Utilities from '../../utilities/Utilities';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';

import Footer from '../Footer/Footer';
import ManuBar from '../manuBar/ManuBar';
import './Home.css'

const Home = () => {
    
    const[course,setCourse]=UseCourse();
    
    return (
        <div className="container">
            <Banner/>
           
                <Row xs={1} md={2} className="g-4">
                    {
                        course.slice(0,4).map(item=><Cart 
                            cart={item} 
                            key={item._id}>
                            </Cart>)
                    }
                
                </Row>
            <Footer></Footer>
           
        </div>
        
    );
};

export default Home;
