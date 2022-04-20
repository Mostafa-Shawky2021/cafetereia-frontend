import { Accordion, Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './checks.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Checks = ()=> {
    const [active, setActive] = useState(false)
    const HandleDetails = (e)=> {
        //setActive(!active);
        console.log(e.target)
    }
    console.log(active);
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
                                    <input type="date" name="date-from" className="form-control"/>
                                </div>
                                <div className="col-3">
                                    <input type="date" name="date-to"  className="form-control col-md-3"/>
                                </div>
                                
                            </div>
                            <div className="users mt-5  m-auto col-2">
                                <select name="user " className="form-select">
                                    <option option="">...</option>
                                    <option option="samar">Samar</option>
                                    <option option="samar">Bola</option>
                                    <option option="samar">Nehal</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="table-checks row">
                        {/* Head */}
                        <div className="col-6 head">Name</div>
                        <div className="col-6 head">Total Amount</div>

                        {/* Data here */}
                        <div className="wrapper" onClick={HandleDetails}>
                            <div className="user-details" >
                                <div className="col-6 body"><i className="fa fa-plus"></i> Mostafa</div>
                                <div className="col-6 body">110</div>
                            </div>
                            <div className={"order-details" + (active ? "active" : "")}>
                                <div className="col-6 head">Order Date</div>
                                <div className="col-6 head">Amount</div>
                                <div className="col-6 body"><i className="fa fa-plus"></i> 2020-10-20</div>
                                <div className="col-6 body">55EGB</div>  
                            </div>  
                        </div>
                        <div className="wrapper">
                            <div className="user-details" onClick={HandleDetails}>
                                <div className="col-6 body"><i className="fa fa-plus"></i> Atef</div>
                                <div className="col-6 body">110</div>
                            </div>
                            <div className={"order-details" + (active ? "active" : "")}>
                                <div className="col-6 head">Order Date</div>
                                <div className="col-6 head">Amount</div>
                                <div className="col-6 body"><i className="fa fa-plus"></i> 2020-10-20</div>
                                <div className="col-6 body">55EGB</div>  
                            </div>  
                        </div>



<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>




                    </div>
                </div>
            </section>
        </>
    )

}   

export default Checks;