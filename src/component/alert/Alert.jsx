import React from 'react';
import { Alert as BAlert } from 'react-bootstrap';
import './alert.css'

const Alert = ({setShowAlert, message}) => {

    return (
        <div>
            <BAlert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              <BAlert.Heading>{!message? 'Invalid Email or Password' : message}</BAlert.Heading>
            </BAlert>
        </div>
    );
}

export default Alert;
