import React, { useContext, useEffect } from "react";
import AppContext from "../provider/Context";
import { Container, Row, Col, Image } from "react-bootstrap";
import EbayNav from "../../modules/Homepage/Ebaynav";

export const Card = () => {
  const { cart, setCart, setCount, count } = useContext(AppContext);

  useEffect(() => {
    // Đọc giỏ hàng từ Local Storage khi ứng dụng khởi động
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      setCount(JSON.parse(storedCart).length); // Cập nhật số lượng nếu cần
    }
  }, []);

  console.log(count);

  return (
    <Container>
      <EbayNav />
      <Row>
        <h3 className="mb-5">Shopping cart</h3>
        <Col md={8}>
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <Image
                  className="cart-image"
                  src={item.images}
                  fluid
                  alt="Cart Item"
                />
                <div className="cart-title">{item.title}</div>
                <div className="cart-count">Quantity: {item.quantity}</div>
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
