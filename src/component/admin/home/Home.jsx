import NavbarAdmin from "../navbar/NavbarAdmin";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ProductCard from '../productCard/card'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Home.css';
import OrderItem from './orderItem';
import { useState, useEffect } from 'react';
export default function Home(props) {

    const products = [{ 'id': 5, 'name': 'coffee', 'price': '190', 'img': 'E:/iti/en/final/1.png' },
    { 'id': 1, 'name': 'tea', 'price': '100', 'img': 'E:/iti/en/final/1.png' },
    { 'id': 2, 'name': 'late', 'price': '200', 'img': 'E:/iti/en/final/1.png' },
    { 'id': 3, 'name': 'cola', 'price': '150', 'img': 'E:/iti/en/final/1.png' }];

    // var total = 190;
    let [currCount, setcurrCount] = useState(1);
    let [count, setCount] = useState([]);
    let [order, setOrder] = useState([]);
    let [total, setTotal] = useState(0);
    useEffect(() => {

    }, [count, setCount, currCount]);

    function addToOrder(product) {
        setOrder([...order, product]);
        setCount([...count, { 'id': product.id, count: 1 }])
        total = (total + parseInt(product.price));
        setTotal(total);
    }

    function removeFromOrder(product) {
        const filteredOrder = order.filter((p) => p.id !== product.id);
        const filteredCount = count.filter((p) => p.id !== product.id);
        setOrder(filteredOrder);
        setCount(filteredCount);
    }
    function updateTotal() {

        total = 0;
        console.log("Update ", order);
        order.forEach((p) => {
            const objIndex = count.findIndex((obj => obj.id == p.id));
            console.log(

                count[objIndex].count
            );
            total += (count[objIndex].count * p.price)
        })
        return total;
    }
    function increment(id) {
        console.log(count, "...befofe", id)
        const objIndex = count.findIndex((obj => obj.id == id));
        count[objIndex].count++;
        currCount = count[objIndex].count;
        setCount(count);
        setcurrCount(currCount);
        total = updateTotal();
        setTotal(total);
    }
    function decrement(id) {
        console.log(count, "...befofe")
        const objIndex = count.findIndex((obj => obj.id == id));
        if (count[objIndex].count > 0)
            count[objIndex].count--;
        currCount = count[objIndex].count;
        setCount(count);
        setcurrCount(currCount);
    }

    return (
        <>
            <NavbarAdmin />
            <div className="container">

                <div className="productsDetails">
                    <h1>Orders</h1>
                    <div className="Adminorders">
                        {


                            order.map((currOrder, index) => {
                                const objIndex = count.findIndex((obj => obj.id == currOrder.id));
                                currCount = count[objIndex].count;
                                return <OrderItem key={currOrder.id}
                                    product={currOrder}
                                    removeFromOrder={removeFromOrder}
                                    count={currCount} />

                            })

                        }


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
                        <option value="2">Mohamed</option>
                        <option value="3">Nehal</option>
                    </Form.Select>



                    {
                        products.map((product, index) => {
                            return <ProductCard
                                key={index}

                                addToOrder={addToOrder}
                                removeFromOrder={removeFromOrder}
                                increment={increment}
                                decrement={decrement}
                                updateTotal={updateTotal}
                                product={product}
                            />
                        })


                    }



                </div>
            </div>
        </>
    )

}

