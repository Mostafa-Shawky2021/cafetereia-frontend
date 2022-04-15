import "./adduser.css";
import NavbarAdmin from "../navbar/NavbarAdmin";
import  Breadcrumb  from "../breadcrumb/Breadcrumb";
import { useState } from "react";
const AddUser = ()=> {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPass,setConfirmPass] = useState("");
    const [nameerr,setNameerr] = useState("");
    const [emailerr,setEmailerr] = useState("");
    const [passworderr,setPassworderr] = useState("");
    const [confirmPasserr,setConfirmPasserr] = useState("");     
    let validPattern = {
        alpha:/^[A-z\s]+$/g,
        email:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
    }
    const HandleName = (event)=> {
        setName(event.target.value);
    }
    const HandleEmail = (event) => {
        setEmail(event.target.value);
    }
    const HandlePassword = (event) => {
        setPassword(event.target.value);
    }
    const HandleConfirmpass = (event) => {
        setConfirmPass(event.target.value);
    }
   

    const HandleSubmit = ( event )=> {
      
        // Check name validation
        if( validPattern.alpha.test(name) == false || name.length < 5 ) {
            setNameerr("Sorry the name is required and must be greater than 5character ");
            event.preventDefault();
        } else {
            setNameerr("");
        }
        if( validPattern.email.test(email) == false ) {
            setEmailerr("Sorry the email is required and must be valid");
            event.preventDefault();
        } else {
            setEmailerr("");
        }
        if( password.length < 5 ) {
            setPassworderr("Sorry the password is required and must be greater than 5 character");
            event.preventDefault();
        } else {
            
            setPassworderr("");

        }
        if( password !== confirmPass ) {
            setConfirmPasserr("password must be identical");
            event.preventDefault();
        } else {
            setConfirmPasserr("");
        }




    }
    return (
        <>
        <NavbarAdmin />
        <section className="adduser">
            <div className="container-adduser">
                <Breadcrumb />  
                <form className="form">
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10 form-group">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="username" onChange={HandleName}/>  
                                <span className="error">{nameerr}</span>
                                <i class="fa fa-asterisk"></i>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10 form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email" onChange={HandleEmail}/>
                                <span className="error">{emailerr}</span>
                                <i class="fa fa-asterisk"></i>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="password" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10 form-group">
                                <input type="password" name="password" className="form-control" id="password" onChange={HandlePassword} placeholder="password"/>
                                <span className="error">{passworderr}</span>
                                <i class="fa fa-asterisk"></i>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="confirmpassword" class="col-sm-2 col-form-label">Confirm Pass</label>
                            <div class="col-sm-10 form-group">
                                <input type="password" name="password" className="form-control" id="confirmpassword" onChange={HandleConfirmpass} placeholder="confirm password"/>
                                <span className="error">{confirmPasserr}</span>
                                <i class="fa fa-asterisk"></i>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="cateogry " class="col-sm-2 col-form-label">Picture</label>
                            <div class="col-sm-10 form-group">
                                <div class="custom-file">
                                    <span>choose file</span>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    <div style={{textAlign:'right'}}>
                        <button type="submit" class="btn btn-primary" onClick={HandleSubmit}><i className="fa fa-plus"></i> Add User</button>
                    </div>
                    </form>
            </div>

        </section>
        
        </>
    );
    
}

export default AddUser;