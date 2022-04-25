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
                <div style={{ textAlign: "right", marginBottom: "10px" }}>
                    <h3 className="title text-center">Checks</h3>
                    <div class="text-center" style={{ marginBottom: "10px" }}>
                    <div class="row justify-content-center" style={{margin: 0}}>
                        <div class="col-12 col-sm-4" style={{marginBottom: "5px"}}>
                            <select class="form-select" onChange={(e) => setSelectedUser(e.target.value)} >
                                <option selected value="">All</option>
                                {
                                    allUsers && allUsers.map((user, index) => (<option key={index} value={user.id}>{user.name}</option>))
                                }
                            </select>
                        </div>
                        <div class="col-12 col-sm-4">
                            {/* <label class="form-label">From</label> */}
                            <input 
                                type="date" 
                                name="date-from" 
                                className="form-control" 
                                onChange={(e) => setDateStart(e.target.value)}
                            />
                        </div>
                        <div class="col-12 col-sm-4">
                            {/* <label class="form-label">To</label> */}
                            <input 
                                type="date" 
                                name="date-to"  
                                className="form-control col-md-3"
                                onChange={(e) => setDateEnd(e.target.value)}
                            />
                        </div>
                    </div>
                    </div>
                </div>
                    <div className="table-checks row container-fluid"  style={{margin: 0}}>
                        <div className="col-12">
                            <table class="table table-bordered table-hover">
                                <thead class="thead-dark">
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
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.total}$</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12">
                            <table class="table table-bordered table-hover">
                                <thead class="thead-dark">
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
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{check.date}</td>
                                                    <td>{check.price}$</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12">
                            <ProductArea prods={orderProducts}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}   

export default Checks;