import Button from 'react-bootstrap/Button';
import './Home.css';
import { useState, useEffect } from 'react';

export default function OrderItem(props) {

    const { product } = props;
    const { count } = props;
    return (
        <>
            <div className="odrerItem">
                <div><label htmlFor=""> {product.name}  </label></div>
                <div><label htmlFor=""> {count}x ={product.price * count} </label>


                </div>


            </div>
        </>
    );
}