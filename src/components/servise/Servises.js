import React from 'react';
import { Card, Row } from 'react-bootstrap';
import UseCourse from '../../utilities/Utilities';
import Cart from '../Cart/Cart';

const Servises = () => {
    const[course,setCourse]=UseCourse();
    
    return (
        <div>
           
                <Row xs={1} md={2} className="g-4">
                    {
                        course.slice(0,9).map(item=><Cart 
                            cart={item} 
                            key={item._id}>
                            </Cart>)
                    }
                
                </Row>
           
           
        </div>
        
    );
};

export default Servises;