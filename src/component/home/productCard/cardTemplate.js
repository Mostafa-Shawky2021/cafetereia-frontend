import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
import "./card.css";

export default function CardTemplate({ product, addToOrder }) {

    const handleAddClick = () => {
        addToOrder(product);
    }

    return (
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 text-center text-md-left product-box">
            <Card className="product-card">
                <Card.Img variant="top" className="product-card-image" src={product.avatar} />
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
