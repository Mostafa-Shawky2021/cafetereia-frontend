import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import item from "../../assests/img/product.jpg";
function OrderCard() {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={item} />
      <Card.Body>
        <Card.Title>Coffe</Card.Title>
        <Card.Text style={{ color: "#4e4e4e" }}>
          Esspresso Coffe with some milk and sugar
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>30$</ListGroupItem>
        <ListGroupItem>30% Milk</ListGroupItem>
        <ListGroupItem> Meduim</ListGroupItem>
      </ListGroup>
    </Card>
  );
}
export default OrderCard;
