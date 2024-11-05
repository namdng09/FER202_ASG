import React, { useContext } from 'react';
import AppContext from '../provider/Context';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoriesList from '../filter/CategoriesList';

function MainTable() {
    const { products } = useContext(AppContext);

    return (
        <div>
            <Row>
                <Col md={3}>
                    <CategoriesList />
                </Col>
                <Col md={9}>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} md={4} lg={3} style={{ marginBottom: '20px' }}>
                                <div className="product-card" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
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
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>

    );
}

export default MainTable;
