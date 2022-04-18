import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './product.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
import { changeProductStatus, getAllProds, deleteProduct } from "../../../api/index2";
import { useEffect, useState } from "react";

import useToken from "../../../utils/hooks/useToken";


const Product = ()=> {

    const { token } = useToken();
    const [allProds, setAllProds] = useState([]);

    useEffect(() => {
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

    const toggleStatus = async (id) => {
        const status = allProds.find(prod => prod.id === id).status;

        await changeProductStatus(id, -status , token)
        .then((res) => {
            setAllProds(allProds.map(prod => {
                if(prod.id === id) {
                    prod.status = -prod.status;
                }
                return prod;
                })
            );       
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const deleteProductHandle = async (id) => {
        await deleteProduct(id, token)
        .then((res) => {
            setAllProds(allProds.filter(prod => prod.id !== id));     
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (    
    <>
        <NavbarAdmin />
        <section className="products-admin">
            <div className="container-products">
                <Breadcrumb />
                <div style={{textAlign:'right',marginBottom:'10px'}}>
                    <NavLink className="btn btn-primary add" to="/addproduct"><i className="fa fa-plus"></i>Add product</NavLink>
                </div>
                <h3 className="title">Products</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProds.map((prod, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{prod.name}</td>
                                        <td>{prod.price}</td>
                                        <td><img src={prod.image} alt="" style={{width:'100px'}}/></td>
                                        <td>
                                            <button className="btn btn-warning" onClick={()=>toggleStatus(prod.id)}>{prod.status>0? 'Available': 'UnAvailable'}</button>
                                            <NavLink className="btn btn-primary" to={`/editproduct/${prod.id}`}><i className="fa fa-edit"></i></NavLink>
                                            <button className="btn btn-danger" onClick={()=>deleteProductHandle(prod.id)}><i className="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                        <tr>
                            <td>tea</td>
                            <td>25$</td>
                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a className="btn btn-info">edit</a>
                                <a className="btn btn-danger">delete</a>
                            </td>
                        </tr>
                       
                    </tbody>
                </Table>
            </div>
        </section>
    </>
    )

}

export default Product;