import NavbarAdmin from "../navbar/NavbarAdmin";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ProductCard from '../productCard/card'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Home.css';
import { useState, useEffect } from 'react';
export default function Home(props) {

    const products = [{ 'name': 'coffee', 'price': '190', 'img': 'E:/iti/en/final/1.png' },
    { 'id': 1, 'name': 'tea', 'price': '100', 'img': 'E:/iti/en/final/1.png' },
    { 'id': 2, 'name': 'late', 'price': '200', 'img': 'E:/iti/en/final/1.png' },
    { 'id': 3, 'name': 'cola', 'price': '150', 'img': 'E:/iti/en/final/1.png' }];

    var total = 190;

    let [count, setCount] = useState([]);
    let [order, setOrder] = useState([]);

    let onDataChange = (count, order) => {
        setCount(count);
        setOrder(order);
        console.log("data app ", count, order);
    }

    // let { count } = props;
    // let { order } = props;

    // useEffect(() => {

    // }, [count]);

    function addToOrder(product) {
        setOrder([...order, product]);
        setCount([...count, { 'id': product.id, count: 1 }])
    }

    function removeFromOrder(product) {
        const filteredOrder = order.filter((p) => p.id !== product.id);
        const filteredCount = count.filter((p) => p.id !== product.id);
        setOrder(filteredOrder);
        setCount(filteredCount);
    }

    function increment(id) {
        let newCount = count.map(c => {
            if (c.id == id) return c.count++;
        });
        console.log(newCount);
        setCount(newCount);
    }

    // useEffect(() => {

    // }, [count, order]);


    // let onDataChange = (count, order) => {

    //     console.log("Home.. app ", count, order);
    // }
    return (
        <>
            <NavbarAdmin />
            <div className="container">

                <div className="productsDetails">
                    <div>
                        <label>{order} ={count}</label>

                    </div>


                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <label htmlFor="">Total :{total}</label>


                </div>
                <div className="products">
                    <Form.Select aria-label="Default select example">
                        <option>Select Username</option>
                        <option value="1">Samar</option>
                        <option value="2">Mohame</option>
                        <option value="3">Nehal</option>
                    </Form.Select>



                    {
                        products.map((product, index) => {
                            return <ProductCard
                                key={index}

                                addToOrder={addToOrder}
                                removeFromOrder={removeFromOrder}
                                onDataChange={onDataChange}
                                product={product}
                            />
                        })


                    }



                </div>
            </div>
        </>
    )

}

