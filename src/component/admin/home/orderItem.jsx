import Button from 'react-bootstrap/Button';
import './Home.css';
import { useState, useEffect } from 'react';

export default function OrderItem(props) {

    const { product } = props;
    const { count } = props;
    let { removeFromOrder } = props;
    let handleRemoveClick = () => {

        removeFromOrder(product);
    }
    return (
        <>
            <div className="odrerItem">
                <div><label htmlFor=""> {product.name}  </label></div>
                <div><label htmlFor=""> {count}x ={product.price * count} </label>
                    <button className="mybtn" onClick={handleRemoveClick}>x</button>


                </div>


            </div>
        </>
    );
}