// import React, { useContext } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import AppContext from '../provider/Context';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import { FaHeart } from 'react-icons/fa';
// import Ebaynav from './../../modules/Homepage/Ebaynav';

// function ProductDetail() {
//     const { id } = useParams();
//     const { products } = useContext(AppContext);
//     const product = products.find((item) => item.id === parseInt(id));

//     if (!product) {
//         return <p>Product not found</p>;
//     }

//     return (
//         <>
//             <Ebaynav />
//             <Link to={'/'} style={{ textDecoration: 'none' }}>Back to previous page</Link>
//             <Container>
//                 <Row>
//                     <Col md={7}>
//                         {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
//                 {product.images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Product image ${index + 1}`}
//                         style={{ width: '80px', height: '80px', borderRadius: '5px', cursor: 'pointer' }}
//                     />
//                 ))}
//             </div> */}
//                         <div style={{ position: 'relative' }}>
//                             <img
//                                 src={product.thumbnail}
//                                 alt={product.title}
//                                 style={{ width: '100%', borderRadius: '10px' }}
//                             />
//                         </div>
//                     </Col>

//                     <Col md={5}>
//                         {/* Main product image and details */}
//                         <div style={{ flex: '1' }}>


//                             <h2>{product.title}</h2>
//                             <h3>Price: {product.price} VND/ea</h3>
//                             <p>"{product.description}"</p>
//                             <p>Quantity: {product.quantity}</p>
//                             <p style={{ color: '#d9534f' }}>{product.availabilityStatus} ({product.stock})</p>

//                             {/* Buttons */}
//                             <Button variant="primary" style={{ width: '100%', marginTop: '10px' }}>Buy It Now</Button>
//                             <Button variant="outline-primary" style={{ width: '100%', marginTop: '10px' }}>Add to cart</Button>
//                             <Button variant="outline-secondary" style={{ width: '100%', marginTop: '10px' }}>Add to watchlist</Button>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }

// export default ProductDetail;


import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../provider/Context';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import Ebaynav from './../../modules/Homepage/Ebaynav';

function ProductDetail() {
    const { id } = useParams();
    const { products } = useContext(AppContext);
    const product = products.find((item) => item.id === parseInt(id));
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        if (product) {
            setMainImage(product.thumbnail);
        }
    }, [product]);

    if (!product) {
        return <p>Product not found</p>;
    }

    const usPrice = Math.round((product.price - (product.price * product.discountPercentage / 100)) * 100) / 100;
    const vndPrice = (usPrice * 25000).toFixed(2);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    return (
        <>
            <Ebaynav />
            <Container style={{ paddingTop: '20px' }}>
                <Link to={'/'} style={{ textDecoration: 'none', color: '#007bff', fontSize: '14px' }}>
                    &larr; Back to previous page
                </Link>
                <Row className="mt-3">
                    {/* Sidebar with product images */}
                    <Col md={1} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Number ${index + 1}`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: image === mainImage ? '2px solid #007bff' : '1px solid #ccc'
                                }}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </Col>

                    {/* Main product image */}
                    <Col md={6}>
                        <div style={{ position: 'relative', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                            <img
                                src={mainImage}
                                alt={product.title}
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    backgroundColor: '#f00',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {product.views} WATCHED IN THE LAST 24 HOURS
                            </span>
                            <Button
                                variant="light"
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    borderRadius: '50%',
                                    border: '1px solid #ccc',
                                }}
                            >
                                <FaHeart />
                            </Button>
                        </div>
                    </Col>

                    {/* Product details */}
                    <Col md={5}>
                        <h2>{product.title}</h2>
                        <h3>US ${usPrice}/ea</h3>
                        <p style={{ fontSize: '14px', color: '#555' }}>Approximately {vndPrice} VND</p>
                        <p style={{ color: '#d9534f' }}>{product.availabilityStatus} ({product.stock})</p>
                        <p>Brand: <strong>{product.brand}</strong></p>
                        <p style={{ fontSize: '16px', marginTop: '10px' }}>"{product.description}"</p>
                        <p style={{ fontSize: '16px' }}>
                            Quantity: <input type='number' min="1" max={product.stock} defaultValue="1" />
                            {product.stock >= 10 ? ' More than 10 available' : ''}
                            {product.stock === 1 ? ' Last one' : ''}
                        </p>

                        {/* Buttons */}
                        <Button variant="primary" style={{ width: '100%', marginTop: '10px' }}>Buy It Now</Button>
                        <Button variant="outline-primary" style={{ width: '100%', marginTop: '10px' }}>Add to cart</Button>
                        <Button variant="outline-secondary" style={{ width: '100%', marginTop: '10px' }}>Add to watchlist</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={6}>
                        <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>Item specifics</h2>
                        <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', backgroundColor: '#f9f9f9' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc', fontWeight: 'bold', width: '30%' }}>Brand</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{product.brand}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>Dimensions</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
                                            Width: {product.dimensions.width} - Height: {product.dimensions.height} - Depth: {product.dimensions.depth}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>Weight</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{product.weight}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>Shipping Information</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{product.shippingInformation}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>Warranty</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{product.warrantyInformation}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc', fontWeight: 'bold' }}>Return Policy</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{product.returnPolicy}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col md={5}>
                        <h3 style={{ marginTop: '20px', fontWeight: 'bold' }}>Customer Feedback</h3>
                        {product.reviews.map((review, index) => (
                            <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', marginBottom: '10px', backgroundColor: '#f9f9f9' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>
                                    Rating: <span style={{ color: '#d9534f' }}>{review.rating} / 5</span>
                                </p>
                                <p style={{ fontSize: '14px', color: '#555', marginTop: '5px', marginBottom: '5px' }}>
                                    "{review.comment}"
                                </p>
                                <p style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
                                    By: <strong>{review.reviewerName}</strong> on {review.date}
                                </p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductDetail;
