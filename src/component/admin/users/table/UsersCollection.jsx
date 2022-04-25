import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {  } from "react-router-dom"

import './tableOfProducts.css';

const UsersCollection = ({allUsers, deleteUserHandle}) => {
    return (
        <div>
            <div style={{display: "block"}}>
                <div className="row" style={{margin: 0}}>
                {
                    allUsers.length? allUsers.map((user, index) => {
                        return (
                            <div key={index} className="col-12 col-md-4 col-lg-3" style={{marginBottom: "5px"}}>
                                <Card style={{height: "100%"}}>
                                    <Card.Img variant="top" src={user.avatar} />
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item></ListGroup.Item>
                                            <ListGroup.Item>{user.email}</ListGroup.Item>
                                            <ListGroup.Item></ListGroup.Item>
                                        </ListGroup>
                                        <NavLink
                                            className="btn btn-primary d-block mr-1 btn-action"
                                            style={{padding: "3px"}}
                                            to={`/edituser/${user.id}`}
                                        >
                                            <i class="fa fa-edit"/>
                                        </NavLink>
                                        <Button variant="danger" onClick={() => deleteUserHandle(user.id)}>
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

export default UsersCollection;
