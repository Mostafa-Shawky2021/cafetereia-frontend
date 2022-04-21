import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './checks.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllChecksByDate, getAllUserswithTotalChecks, getOrderProducts, getOrderProductsOfOrder, getUserOrders } from "../../../api/index2";
import useToken from "../../../utils/hooks/useToken";
import ProductArea from "../../orders/productArea/ProductArea";
const Checks = ()=> {

    const {token} = useToken();

    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const [allChecks, setAllChecks] = useState([]);
    // const [allProducts, setAllProducts] = useState([]);
    const [orderProducts, setOrderProducts] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const [selectedUser, setSelectedUser] = useState('');
    const [selectedUserOrder, setSelectedUserOrder] = useState({});
    

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        getChecks();
        setOrderProducts([]);
    }, [selectedUser, dateStart, dateEnd]);

    useEffect(() => {
        // getProducts();
        getProdsOrder();
    }, [selectedUserOrder]);

    const getUsers = async () => {
        await getAllUserswithTotalChecks(token)
        .then (res => {
            setAllUsers(res.data.response.result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const getChecks = async () => {
        if(selectedUser && dateStart && dateEnd) {
            await getAllChecksByDate(selectedUser, dateStart, dateEnd, token)
            .then((res) => {
                console.log(res.data);
                setAllChecks(res.data.response.result);
            })
            .catch((err) => {
                console.log(err);
            })
        } else if(selectedUser) {
            console.log(selectedUser);
            await getUserOrders(selectedUser, token)
            .then((res) => {
                console.log(res.data);
                setAllChecks(res.data.response.result);
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            setAllChecks([]);
        }

    }

    const getProdsOrder = async () => {
        await getOrderProductsOfOrder(selectedUserOrder.id, token)
        .then((res) => {
          console.log(res.data);
          setOrderProducts(res.data.response.result);
        })
        .catch((err) => {
          console.log(err);
        })
      }


    return (
        <>
            <NavbarAdmin />
            
            <section className="checks">
                <div className="checks-container">
                    <Breadcrumb />
                    <h2 className="title">Checks</h2>
                    <div className="form">
                        <form>
                            <div className="data row justify-content-center">
                                <div className="col-3">
                                    <input 
                                        type="date" 
                                        name="date-from" 
                                        className="form-control" 
                                        onChange={(e) => setDateStart(e.target.value)}
                                    />
                                </div>
                                <div className="col-3">
                                    <input 
                                        type="date" 
                                        name="date-to"  
                                        className="form-control col-md-3"
                                        onChange={(e) => setDateEnd(e.target.value)}
                                    />
                                </div>
                                
                            </div>
                            <div className="users mt-5  m-auto col-2">
                                <select name="user " className="form-select" onChange={(e) => setSelectedUser(e.target.value)}>
                                    <option option="">...</option>
                                    {
                                        allUsers && allUsers.map((user, index) => {
                                            return (
                                                <option key={index} value={user.id}>{user.name}</option>
                                            )
                                        })
                                    }
                                    <option option="samar">Samar</option>
                                    <option option="samar">Bola</option>
                                    <option option="samar">Nehal</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="table-checks row">
                        <div className="col-12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUsers && allUsers.map((user, index) => {
                                            return (
                                                <tr key={index} onClick={() => setSelectedUser(user.id)}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.total}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                        <div className="col-12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Date</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allChecks && allChecks.map((check, index) => {
                                            return (
                                                <tr key={index} onClick={() => setSelectedUserOrder(check)}>
                                                    <td>{index + 1}</td>
                                                    <td>{check.date}</td>
                                                    <td>{check.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                        <div className="col-12">
                            <ProductArea prods={orderProducts}/>
                        </div>

                        {/* Head
                        <div className="col-6 head">Name</div>
                        <div className="col-6 head">Total Amount</div>

                        {/* Data here */}
                        {/* <div className="wrapper">
                            <div className="user-details">
                                <div className="col-6 body"><i className="fa fa-plus"></i> Mostafa</div>
                                <div className="col-6 body">110</div>
                            </div>
                            <div >
                                <div className="col-6 head">Order Date</div>
                                <div className="col-6 head">Amount</div>
                                <div className="col-6 body"><i className="fa fa-plus"></i> 2020-10-20</div>
                                <div className="col-6 body">55EGB</div>  
                            </div>  
                        </div>
                        <div className="col-6 body"><i className="fa fa-plus"></i> Bola</div>
                        <div className="col-6 body">50</div>  */}

                    </div>
                </div>
            </section>
        </>
    )

}   

export default Checks;