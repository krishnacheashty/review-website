import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const Cart = (props) => {
    console.log(props.cart)
    const{picture,name,email,phone,details}=props.cart
    return (
        <Col className="mt-5 mb-5">
        <Card >
            <Card.Img variant="top" src={picture} />
            <Card.Body>
            <Card.Title>Course name: {name}</Card.Title>
            <Card.Text>
                <h6>mail: {email} </h6>
                <p> phone: {phone} to Admission</p>
                {details}
            </Card.Text>
            <Button variant="secondary"> Detail</Button>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Cart;