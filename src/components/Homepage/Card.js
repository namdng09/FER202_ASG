import React, { useContext, useEffect } from "react";
import AppContext from "../provider/Context";
import { Container, Row, Col, Image, FormControl, Form } from "react-bootstrap";
import EbayNav from "../../modules/Homepage/Ebaynav";

export const Card = () => {
  const {
    card,
    increaseQuantity,
    decreaseQuantity,
    removeEmployeeFromTeam,
    updateQuantity,
  } = useContext(AppContext);

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  console.log(card);

  return (
    <Container>
      <EbayNav />
      <Row>
        <h3 className="mb-5">Shopping cart</h3>
        <Col md={8}>
          {card && card.length > 0 ? (
            card.map((item, index) => (
              <div className="cart-item" key={index}>
                <Image
                  className="cart-image"
                  src={item.images}
                  fluid
                  alt="Cart Item"
                />
                <div className="cart-title">{item.title}</div>
                {/* <div className="cart-count">Quantity: {item.quantity}</div> */}
                <div>
                  <Form.Control
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </div>
                <div className="cart-price">US ${item.price}</div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Col>
        <Col md={4}>
          <h1>Cart</h1>
        </Col>
      </Row>
    </Container>
  );
};
