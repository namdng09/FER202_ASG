import React, { useContext, useEffect, useState } from "react";
import AppContext from "../provider/Context";
import { Container, Row, Col, Image, FormControl, Form } from "react-bootstrap";
import EbayNav from "../../modules/Homepage/Ebaynav";

export const Card = () => {
  const {
    card,
    removeItemFromCart,
    handleDeleteAll,
    updateQuantity,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");

  // Calculate the total price of filtered items
  const filteredCard = card.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total price
  const totalPrice = card.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  console.log(card);

  return (
    <div>
      <EbayNav />
      <container>
        <Row>
          <h3 className="mb-5">Shopping cart</h3>

          <Col md={8}>
            {/* Search box */}
            <div className="cart-remove">
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteAll()}
              >
                Remove All
              </button>
            </div>
            <Form.Control
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {card && card.length > 0 ? (
              filteredCard.map((item, index) => (
                <div className="cart-item" key={index}>
                  <Image
                    className="cart-image"
                    src={item.images}
                    fluid
                    alt="Cart Item"
                  />
                  <div className="cart-title">{item.title}</div>
                  {/* <div className="cart-count">Quantity: {item.quantity}</div> */}
                  <div className="d-flex align-items-center">
                    Qty:
                    <Form.Control
                      type="number"
                      min="1"
                      style={{ marginLeft: "10px", width: "75px" }}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </div>
                  <div className="cart-price d-flex align-items-center justify-content-center">
                    <h3>
                      <strong>US ${item.price * item.quantity}</strong>
                    </h3>
                  </div>
                  <div className="cart-remove d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </Col>
          <Col md={4}>
            <h1>Cart Summary</h1>
            <div className="cart-total">
              <h4>Total Price: US ${totalPrice.toFixed(2)}</h4>
            </div>
          </Col>
        </Row>
      </container>
    </div>
  );
};
