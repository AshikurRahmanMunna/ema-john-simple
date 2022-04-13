import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  Card, Container } from "react-bootstrap";
import Rating from "react-rating";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  // const {product, handleAddToCart} = props;
  const { name, img, seller, price, ratings, category } = product;
  return (
    <Container>
      <Card className="product-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>
              <small>Price: <span className="product-price">BDT {price}</span></small>
            </p>
            <p>
              <small>Category: <small>{category}</small></small>
            </p>
            <p>
              <small>Seller: {seller}</small>
            </p>
            <Rating
              initialRating={ratings}
              emptySymbol={<FontAwesomeIcon style={{color: 'lightgray'}} icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </Card.Text>
          <button onClick={() => handleAddToCart(product)} className="product-btn-cart"><FontAwesomeIcon></FontAwesomeIcon> Add To Cart</button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Product;
