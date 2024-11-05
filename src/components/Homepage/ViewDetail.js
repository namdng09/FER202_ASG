import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../provider/Context";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Badge,
  Image,
} from "react-bootstrap";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import ProductDescription from "./Description";
import EbayNav from "../../modules/Homepage/Ebaynav";
import Footer from "../../modules/Homepage/Footer";

function ViewDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProductById, card, setCard, toggleWishlist, wishlist, addEmployeeToCard } = useContext(AppContext);
  const [isHighResLoaded, setHighResLoaded] = useState(false); // State to check if high-res is loaded

  const [quantities, setQuantities] = useState({});

  // Fetch product by ID
  const product = getProductById(parseInt(id));

  const handleHighResLoad = () => {
    setHighResLoaded(true);
  };

  useEffect(() => {
    // Khởi tạo giá trị số lượng từ trạng thái team
    const initialQuantities = {};
    card.forEach((member) => {
      initialQuantities[member.id] = member.quantity;
    });
    setQuantities(initialQuantities);
  }, [card]);

  // const handleQuantityChange = (id, value) => {
  //   setQuantities({ ...quantities, [id]: parseInt(value, 10) });
  // };

  const handleAddToCart = () => {
    const quantity = parseInt(quantities[id], 10) || 1;

    // Retrieve current cart from local storage or initialize as an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex > -1) {
      // If product exists, update quantity
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      // If product does not exist, add new item with quantity
      existingCart.push({ ...product, quantity });
    }

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Optionally, update context or state if needed
    addEmployeeToCard(product, quantity);
  };

  const handleAddToWatchlist = () => {
    toggleWishlist(product);
  };

  // Display loading if product not found
  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(card);

  return (
    <div>
      <EbayNav />
      <Container className="my-4">
        <Row>
          <Col md={6}>
            <Image
              src={isHighResLoaded ? product.images[0] : product.thumbnail} // Switch to high-res when loaded
              alt={product.title}
              fluid
              onLoad={!isHighResLoaded ? handleHighResLoad : undefined} // Trigger only on first load
            />
          </Col>
          <Col md={6}>
            <Card
              className="text-center p-3 border-0 shadow-sm"
              style={{ maxWidth: "500px" }}
            >
              <Row>
                <h4 className="fw-bold">{product.title}</h4>
              </Row>
              {/* Brand Section */}
              <Row className="align-items-center mb-3">
                <Col>
                  <strong>Brand: </strong>
                  <strong>{product.brand}</strong>
                </Col>
              </Row>

              {/* Price Section */}
              <div className="mb-3">
                <h4 className="fw-bold">US ${product.price}</h4>
              </div>

              {/* Condition Section */}
              <p className="text-muted">
                Condition: <strong>New with box</strong>
              </p>

              {/* Buttons Section */}
              <Row>
                <Button
                  variant="primary"
                  className="w-l00 rounded-pill btn-lg mb-2"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart className="me-2" />
                  Add to Cart
                </Button>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant={wishlist.some((item) => item.id === product.id) ? "danger" : "outline-primary"}
                    className="w-100 rounded-pill btn-lg"
                    onClick={handleAddToWatchlist}
                  >
                    <FaEye className="me-2" />
                    {wishlist.some((item) => item.id === product.id) ? "Remove from Watchlist" : "Add to Watchlist"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <ProductDescription product={product} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ViewDetail;
