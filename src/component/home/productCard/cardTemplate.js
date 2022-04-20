import React from "react";
import { useState, useEffect } from 'react';
import productTest from "../../../assests/img/pexels-johnny-willz-997670.jpg";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './card.css';

export default function CardTemplate({ product, addToOrder }) {

    const handleAddClick = () => {
        addToOrder(product);
    }

    return (
        <div class="col-3">
            <Card className="product-card">
                <Card.Img variant="top" className="product-card-image" src={productTest} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <p className="price"> Price :{product.price}$ </p>
                    <div className="action-add">
                        <button 
                            onClick={handleAddClick}
                        >add prouct</button>
                    </div>
                </Card.Body>  
            </Card>
        </div>
    );

}





