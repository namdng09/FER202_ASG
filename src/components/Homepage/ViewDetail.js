import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../provider/Context';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Image } from 'react-bootstrap';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import ProductDescription from './Description';
import EbayNav from '../../modules/Homepage/Ebaynav';
import Footer from '../../modules/Homepage/Footer';

function ViewDetail() {
    const { id } = useParams();
    const { getProductById } = useContext(AppContext);
    const [isHighResLoaded, setHighResLoaded] = useState(false); // State to check if high-res is loaded


    // Fetch product by ID
    const product = getProductById(parseInt(id));

    // Display loading if product not found
    if (!product) {
        return <div>Loading...</div>;
    }
    const handleHighResLoad = () => {
        setHighResLoaded(true);
    };

    const handleAddToCart = () => {
        // Chuyển hướng đến đường link cho "Add to Cart"
        // Thay đổi đường dẫn này theo nhu cầu của bạn
    };

    const handleAddToWatchlist = () => {
        // Chuyển hướng đến đường link cho "Add to Watchlist"
        // Thay đổi đường dẫn này theo nhu cầu của bạn
    };

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
                        <Card className="text-center p-3 border-0 shadow-sm" style={{ maxWidth: '500px' }}>
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
                                        variant="outline-primary"
                                        className="w-100 rounded-pill btn-lg"
                                        onClick={handleAddToWatchlist}
                                    >
                                        <FaEye className="me-2" />
                                        Add to Watchlist
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