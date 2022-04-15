import { Container } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./addproduct.css";
const AddProduct = () => {
    return (
        <>
            <NavbarAdmin />
            <section className="add-product">
                <Container>
                    <Breadcrumb />
                    <form className="form">
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Product name</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="price" class="col-sm-2 col-form-label">Price</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="price" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="cateogry" class="col-sm-2 col-form-label">Cateogry</label>
                            <div class="col-sm-10">
                                <select class="form-select" id="cateogry">
                                    <option value="">...</option>
                                    <option value="">iceream</option>
                                    <option value="">hotdrink</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="cateogry" class="col-sm-2 col-form-label">Picture</label>
                            <div class="col-sm-10">
                                <div class="custom-file">
                                    <span>choose file</span>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </Container>
            </section>
        </>

    );
}

export default AddProduct;