import NavbarAdmin from "../navbar/NavbarAdmin";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ProductCard from '../productCard/card'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Home.css';
import { useState, useEffect } from 'react';
export default function OrderItem(props) {

    const { currOrder } = props;

    let [count, setCount] = useState([]);
    let onDataChange = (count, order) => {
        setCount(count);
        console.log("data app 2", count, order);
    }

    useEffect(() => {

        console.log("orderItem,,,,,,", count);
    }, [count]);
    return (
        <>
            <div className="odrerItem">
                <div><label htmlFor=""> {currOrder.name}  </label></div>
                <div><label htmlFor=""> x {count} ={currOrder.price * count} </label></div>


            </div>
        </>
    );
}