import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import OrderCard from '../../../orders/orderCard/OrderCard';
import './styles.css';

const ShowOrderDetails = ({prods, show, setShow}) => {
    // const [show, setShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Order Products
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center row" style={{margin: 0}}>
                {
                    prods.length? prods.map(item => (
                        <OrderCard key={item.id} orderProd={item} quantity={item.quantity} price={item.price} />
                    )) : <h3 className="text-center" style={{ margin: "40px auto", color: "#BBB"}}>No Products</h3>
                }
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowOrderDetails;
