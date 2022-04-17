import Button from 'react-bootstrap/Button';
import './Home.css';
import { useState, useEffect } from 'react';

export default function MyOrderItem({item: {product, quantity}, add, sub, removeFromOrder}) {

    return (
        <>
            <tr className="orderItem">
                <td>{product.name}</td>
                <td>{quantity}</td>
                <td>{product.price}</td>
                <td>{product.price * quantity}</td>
                <td>
                    <button className="mybtn" onClick={() => add(product)}>+</button>
                    <button className="mybtn" onClick={() => sub(product)}>-</button>
                    <button className="mybtn" onClick={() => removeFromOrder(product)}>x</button>
                </td>
            </tr>
        </>
    );
}