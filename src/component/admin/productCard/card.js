import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import React from "react";
import './card.css'
export default function ProductCard({ product, addToOrder, removeFromOrder, increment }) {

    let [count, setCount] = useState(0);
    let [Order, setOrder] = useState('');

    const [firstTime, setFirstTime] = useState(false);
    let handleClick = () => {
        if (!firstTime) {
            setFirstTime(true);
            addToOrder(product);
        } else {
            increment(product.id);
        }
    }


    return (
        <Card className="product-card" style={{ borderRadius: '30px' }}>
            <Card.Img variant="top" className="product-card-image" src={require('../images/coffeeCup.jpg')} />
            <Card.Body>
                <Card.Title>Price :{product.price}$</Card.Title>
                <Card.Body>{product.name}</Card.Body>
                <div className="actions">

                    <button className="mybtn"
                        onClick={handleClick}
                    >+</button>
                    <button className="mybtn"
                        onClick={handleClick}
                    >-</button>

                </div>
            </Card.Body>
        </Card>
    );

}





