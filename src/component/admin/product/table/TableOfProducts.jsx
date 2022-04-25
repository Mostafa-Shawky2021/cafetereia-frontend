import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './tableOfProducts.css';

const Tableofproducts = ({allProds, toggleStatus, deleteProductHandle}) => {
    return (
        <div>
            <div style={{display: "block"}}>
                <div className="row" style={{margin: 0}}>
                {
                    allProds.length? allProds.map((prod, index) => {
                        return (
                            <div key={index} className="col-12 col-md-4 col-lg-3" style={{marginBottom: "5px"}}>
                                <Card style={{height: "100%"}}>
                                    <Card.Img variant="top" src={prod.avatar} />
                                    <Card.Body>
                                        <Card.Title>{prod.name}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Price: {prod.price}$</ListGroup.Item>
                                            <ListGroup.Item></ListGroup.Item>
                                        </ListGroup>
                                        <Button variant="warning" onClick={() => toggleStatus(prod.id)}>
                                            {prod.status > 0 ? "Available" : "UnAvailable"}
                                        </Button>
                                        <NavLink
                                            className="btn btn-primary d-block mr-1 btn-action"
                                            style={{padding: "3px"}}
                                            to={`/editproduct/${prod.id}`}
                                        >
                                            <i class="fa fa-edit"/>
                                        </NavLink>
                                        <Button variant="danger" onClick={() => deleteProductHandle(prod.id)}>
                                            <i className="fa fa-trash"></i>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }) : <h3 className='text-center' style={{ margin: "40px auto", color: "#BBB"}}>There is No Products At This Category</h3>

                }
                </div>
                
            </div>
        </div>
        

    );
}

export default Tableofproducts;
