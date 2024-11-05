// import React, { useContext } from 'react';
// import AppContext from '../provider/Context';
// import { Button, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function MainTable() {
//     const { products } = useContext(AppContext);

//     return (
//         <Row>
//             {products.map((product) => (
//                 <Col key={product.id} md={4} lg={3} style={{ marginBottom: '20px' }}>
//                     <div className="product-card" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
//                         <img 
//                             src={product.thumbnail} 
//                             alt={product.title} 
//                             className="product-image" 
//                             style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
//                         />
//                         <h3 className="product-title">{product.title}</h3>
//                         <p className="product-price" style={{ fontWeight: 'bold', color: '#d9534f' }}>
//                             {product.price.toLocaleString()} VND
//                         </p>
//                         <p className="product-shipping" style={{ color: '#5bc0de' }}>
//                             {product.shippingInformation}
//                         </p>
//                         <Button as={Link} to={`/detail/${product.id}`} variant="success" style={{ width: '100%' }}>
//                             View Details
//                         </Button>
//                     </div>
//                 </Col>
//             ))}
//         </Row>
//     );
// }

// export default MainTable;


import React, { useContext } from 'react';
import AppContext from '../provider/Context';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoriesList from '../filter/CategoriesList';
import { FaStar } from 'react-icons/fa';

function MainTable() {
    const { products } = useContext(AppContext);

    return (
        <div>
            <Row>
                <Col md={3}>
                    <CategoriesList/>
                </Col>
                <Col md={9}>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} md={4} lg={3} style={{ marginBottom: '20px' }}>
                                <Link to={`/detail/${product.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="product-card" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                className="product-image"
                                                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                                            />
                                        </div>

                                        <h3 className="product-title" style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
                                            {product.title}
                                        </h3>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#ffc107' }}>
                                            {[...Array(5)].map((_, index) => (
                                                <FaStar key={index} color={index < product.rating ? '#ffc107' : '#e0e0e0'} />
                                            ))}
                                            <span style={{ color: '#000', fontSize: '14px' }}>({product.rating})</span>
                                        </div>

                                        <p className="product-price" style={{ fontWeight: 'bold', color: '#d9534f', fontSize: '18px' }}>
                                            US ${Math.round((product.price - (product.price * product.discountPercentage / 100)) * 100) / 100}
                                        </p>

                                        <p className="product-shipping" style={{ color: '#ccc', fontSize: '14px' }}>
                                            Was: <span style={{ textDecoration: 'line-through', color: '#ccc' }}>US ${product.price}</span>
                                        </p>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>


    );
}

export default MainTable;
