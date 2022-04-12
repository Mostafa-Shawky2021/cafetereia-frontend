import React from 'react';
import { Alert as BAlert } from 'react-bootstrap';
import './alert.css'

const Alert = ({setShowAlert}) => {

    return (
        <div>
            <BAlert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              <BAlert.Heading>Invalid Email or Password</BAlert.Heading>
            </BAlert>
        </div>
    );
}

export default Alert;
