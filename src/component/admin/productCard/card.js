import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import React from "react";
import './card.css'
export default function ProductCard({ product, addToOrder, removeFromOrder }) {

    let { title, price, img } = product;

    let [count, setCount] = useState(0);
    let [Order, setOrder] = useState('');

    const [firstTime, setFirstTime] = useState(false);

    // let { onDataChange } = props;
    useEffect(() => {
        // onDataChange(count, Order);

    }, [count, Order]);

    let increment = () => {
        if (!firstTime) {
            setFirstTime(true);
            addToOrder();
        } else {

        }
        setCount(count + 1);
        setOrder(title);
        console.log(Order, count);
    }
    console.log('file://' + img);
    const myImg = 'file://E:/iti/en/final/1.png';
    console.log(myImg);

    return (
        <Card className="product-card" style={{ borderRadius: '30px' }}>
            <Card.Img variant="top" className="product-card-image" src={require('../images/coffeeCup.jpg')} />
            <Card.Body>
                <Card.Title>Price :{price}$</Card.Title>
                <Card.Body>{title}</Card.Body>
                <Button
                    style={{ backgroundColor: "#452115", borderColor: "#452115", shadow: "#452115" }}
                    onClick={increment}
                >Add</Button>
            </Card.Body>
        </Card>
    );

}





