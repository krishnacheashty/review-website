import React from 'react';
import { Card, Row } from 'react-bootstrap';
import UseCourse from '../../utilities/Utilities';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';

const Servises = () => {
    const[course,setCourse]=UseCourse();
    
    return (
        <div>
            <Banner/>
           
                <Row xs={1} md={2} className="g-4">
                    {
                        course.slice(0,9).map(item=><Cart 
                            cart={item} 
                            key={item._id}>
                            </Cart>)
                    }
                
                </Row>
            <Footer/>
           
        </div>
        
    );
};

export default Servises;