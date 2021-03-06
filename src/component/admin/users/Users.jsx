import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import "./users.css";

import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useToken from "../../../utils/hooks/useToken";
import { getAllUsers } from "../../../api/index2";
import { deleteUser } from "../../../api/userAPI";
import UsersCollection from "./table/UsersCollection";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const { token } = useToken();

  const getAllClients = async () => {
    await getAllUsers(token)
      .then((res) => {
        console.log(res.data);
        setAllUsers(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const deleteUserHandle = async (id) => {
    await deleteUser(id, token)
      .then((res) => {
        setAllUsers(allUsers.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavbarAdmin />
      <section className="users">
        <div className="container-user">
          <h1 className="title text-center">users</h1>
          <div class="text-center" style={{ marginBottom: "10px" }}>
            <div class="row justify-content-center" style={{margin: 0}}>
              <div class="col-4 col-sm-4">
                <NavLink className="btn btn-primary add d-block" to="/adduser">
                  <i className="fa fa-plus"></i> Add Users
                </NavLink>
              </div>
            </div>
            
          </div>
          <div className="row container-fluid" style={{margin: 0}}>
            <div className="col-12">
              <UsersCollection allUsers={allUsers} deleteUserHandle={deleteUserHandle}/>
            </div>
          </div>

          {/* <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Avatar</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>
                      <NavLink
                        className="btn btn-primary"
                        to={`/edituser/${user.id}`}
                      >
                        <i className="fa fa-edit"></i>
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUserHandle(user.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </div>
      </section>
    </>
  );
};

export default Users;
