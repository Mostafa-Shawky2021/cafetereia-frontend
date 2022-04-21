import Button from 'react-bootstrap/Button';
import '../Home.css';
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
                    <button className="bg-primary product-control" onClick={() => add(product)}><i className=" fa fa-plus"></i></button>
                    <button className="bg-success  product-control" onClick={() => sub(product)}><i className="fa fa-minus"></i></button>
                    <button className="bg-danger product-control" onClick={() => removeFromOrder(product)}><i className="fa fa-close"></i></button>
                </td>
            </tr>
        </>
    );
}