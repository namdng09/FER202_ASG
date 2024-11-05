import React, { useContext } from 'react';
import AppContext from '../provider/Context';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function MainTable() {
    const { products, toggleWishlist, wishlist } = useContext(AppContext); 

    const isProductInWishlist = (productId) => {
        return wishlist.some((item) => item.id === productId);
    };

    return (
        <Row>
            {products.map((product) => (
                <Col key={product.id} md={4} lg={3} style={{ marginBottom: '20px' }}>
                    <div className="product-card" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', position: 'relative' }}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="product-image"
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price" style={{ fontWeight: 'bold', color: '#d9534f' }}>
                            {product.price.toLocaleString()} VND
                        </p>
                        <p className="product-shipping" style={{ color: '#5bc0de' }}>
                            {product.shippingInformation}
                        </p>
                        <Button as={Link} to={`/detail/${product.id}`} variant="success" style={{ width: '100%' }}>
                            View Details
                        </Button>
                        <Button
                            variant="link"
                            onClick={() => toggleWishlist(product)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                fontSize: '20px',
                                color: isProductInWishlist(product.id) ? 'red' : 'black',
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        >
                            <FaHeart />
                        </Button>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default MainTable;
