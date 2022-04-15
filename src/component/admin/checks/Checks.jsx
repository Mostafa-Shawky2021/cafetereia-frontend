import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './checks.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
const Checks = ()=> {
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
                        {/* Heaad */}
                        <div className="col-6 head">Name</div>
                        <div className="col-6 head">Total Amount</div>

                        {/* Datahere */}
                        <div className="col-6 body"><i className="fa fa-plus"></i> Mostafa</div>
                        <div className="col-6 body">110</div>
                        <div className="col-6 body"><i className="fa fa-plus"></i> Bola</div>
                        <div className="col-6 body">50</div>

                    </div>
                </div>
            </section>
        </>
    )

}   

export default Checks;