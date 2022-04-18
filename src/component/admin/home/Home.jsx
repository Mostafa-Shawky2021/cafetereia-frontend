import { useState, useEffect } from 'react';
import useToken from "../../../utils/hooks/useToken";
import { getAllUsers, getAllProds, getClientById, addOrderfromUser } from "../../../api/index2";

import './Home.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import NavbarAdmin from "../navbar/NavbarAdmin";
import MyOrderItem from "../../home/myOrderItem/myOrderItem";
import ProductCardTemplate from '../../home/productCard/cardTemplate';


export default function Home(props) {
    console.log('I\'m in The Home Page of The Admin');

    const { token } = useToken();
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUserData, setSelectedUserData] = useState({});
    const [allProds, setAllProds] = useState([]);
    const [userOreders, setUserOreders] = useState([]);

    let [total, setTotal] = useState(0);
    const [orderNote, setOrderNote] = useState('');

    useEffect(() => {
        getAllUsersSelect();
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        await getAllProds(token)
        .then((res) => {
            console.log(res.data);
            setAllProds(res.data.response.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const getAllUsersSelect = async () => {
        await getAllUsers(token)
        .then((res) => {
            console.log(res.data);
            setAllUsers(res.data.response.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const changeUserHandling = async(e) => {
        const id = e.target.value;
        setUserOreders([]);
        setTotal(0);
        await getClientById(id, token)
        .then((res) => {
            console.log(res.data.response.result);
            setSelectedUserData(res.data.response.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    /**   Order  */ 
    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < userOreders.length; i++) {
            total += userOreders[i].product.price * userOreders[i].quantity;
        }
        setTotal(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [userOreders]);

    const addToOrder = (product) => {
        const exist = userOreders.find(item => item.product.id === product.id);
        if (!exist) {
            setUserOreders([...userOreders, { product: product, quantity: 1 }])
        } else {
            setUserOreders(
                userOreders.map(
                    item => item.product.id === product.id ? 
                    { product: product, quantity: item.quantity + 1 } : item
                )
            );
        }

        console.log(userOreders);
        console.log(total);
    }

    const subFromOrder = (product) => {
        const exist = userOreders.find(item => item.product.id === product.id);
        if (exist) {
            if (exist.quantity > 1) {
                setUserOreders(
                    userOreders.map(
                        item => item.product.id === product.id ?
                        { product: product, quantity: item.quantity - 1 } : item
                    )
                );
            } 
        }
    }

    function removeFromOrder(product) {
        setUserOreders(userOreders.filter(item => item.product.id !== product.id));
    }

    const confirmSubmit = async() => {
        const prods = userOreders.map(item => {
            return {
                prod_id: item.product.id,
                quantity: item.quantity,
                price: item.product.price
            }
        });
        await addOrderfromUser(selectedUserData.id, total, prods, orderNote, token)
        .then((res) => {
            console.log(res.data);
            setUserOreders([]);
            setTotal(0);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userOreders.length > 0) {
            confirmSubmit();
        }
    }

    return (
        <>
            <NavbarAdmin />
            <div className="container">

                <div className="productsDetails">
                    <h1>Orders</h1>
                    <div className="Adminorders">
                    <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { userOreders.map((item, index) => {
                                        return (
                                            <MyOrderItem
                                                key={index}
                                                item={item}
                                                add={addToOrder}
                                                sub={subFromOrder}
                                                removeFromOrder={removeFromOrder}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table> 
                    </div>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            name="note"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            value={orderNote}
                            onChange={(e) => setOrderNote(e.target.value)}
                        />
                    </FloatingLabel>

                    <label htmlFor="" className="total">Total :{total}</label>
                    <button className="confirm" onClick={handleSubmit}>Confirm</button>


                </div>
                <div className="products">
                    <Form.Select aria-label="Default select example" name="users" onChange={changeUserHandling}>
                        {
                            allUsers.map((user, index) => (
                                <option value={user.id}>{user.name}</option>
                            ))
                        }
                    </Form.Select>

                    {
                        allProds.length? allProds.map((p) => {
                            return (
                                <ProductCardTemplate
                                    key={p.id}
                                    product={p}
                                    addToOrder={addToOrder}
                                />
                            )
                        }): <div className="no-products">No products</div>
                    }
                </div>
            </div>
        </>
    )

}

