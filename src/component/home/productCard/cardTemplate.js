import React from "react";
import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './card.css';

export default function CardTemplate({ product, addToOrder }) {

    const handleAddClick = () => {
        addToOrder(product);
    }

    return (
        <Card className="product-card" style={{ borderRadius: '30px' }}>
            <Card.Img variant="top" className="product-card-image" src={product.avatar} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Body>Price :{product.price}$</Card.Body>
                <div className="actions">

                    <button className="mybtn"
                        onClick={handleAddClick}
                    >add</button>

                </div>
            </Card.Body>
        </Card>
    );

}





