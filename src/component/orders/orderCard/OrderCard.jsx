import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { getProductById } from "../../../api/index2";
import useToken from "../../../utils/hooks/useToken";

// import item from "../../assests/img/product.jpg";

function OrderCard({orderProd, quantity, price}) {

  const { token } = useToken();
  const [product, setProduct] = useState({});
  
  const getProducts = async (id) => {
      await getProductById(id, token)
      .then((res) => {
          setProduct(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      })
    }

  useEffect(() => {
    getProducts(orderProd.product_id);
  }, [])

  return (
    <Card style={{margin: "10px", display: "inline-block" }} className="col col-md-6 col-lg-4 col-sm-12">
      <Card.Img variant="top" src={product.avatar} />
      <Card.Body>
        <Card.Title>{product?.name}</Card.Title>
        <Card.Text style={{ color: "#4e4e4e" }}>
        {quantity}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{price}</ListGroupItem>
      </ListGroup>
    </Card>
  );
}
export default OrderCard;
