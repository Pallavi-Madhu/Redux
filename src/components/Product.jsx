import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
const Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "150px" }}
          ></Card.Img>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
          <Card.Footer style={{backgroundColor:"white"}}>
            <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <h2>Product dashboard</h2>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
