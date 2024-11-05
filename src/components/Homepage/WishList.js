import React, { useContext, useState } from 'react';
import AppContext from '../provider/Context';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import EbayNav from '../../modules/Homepage/Ebaynav';
function Wishlist() {
    const { wishlist, removeFromWishlist } = useContext(AppContext);
    const [selectedItems, setSelectedItems] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredWishlist = wishlist.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedWishlist = [...filteredWishlist].sort((a, b) => 
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

    const toggleSelectItem = (productId) => {
        setSelectedItems((prev) =>
            prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
        );
    };

    const toggleSelectAll = () => {
        setSelectedItems(selectedItems.length === sortedWishlist.length ? [] : sortedWishlist.map((product) => product.id));
    };

    const deleteSelectedItems = () => {
        selectedItems.forEach((productId) => removeFromWishlist(productId));
        setSelectedItems([]);
    };

    return (
        <>
        <EbayNav />
        <Container>
            <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>My eBay - Watchlist</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
                <Form.Control
                    type="text"
                    placeholder="Search your Watchlist"
                    style={{ maxWidth: '300px', borderRadius: '20px', marginRight: '10px' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Form.Select
                    aria-label="Sort by price"
                    onChange={(e) => setSortOrder(e.target.value)}
                    style={{ maxWidth: '250px', borderRadius: '20px' }}
                >
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </Form.Select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Form.Check
                    type="checkbox"
                    checked={selectedItems.length === sortedWishlist.length && sortedWishlist.length > 0}
                    onChange={toggleSelectAll}
                    label="Select All"
                    style={{ marginRight: '10px' }}
                />
                <Button variant="success" onClick={() => alert("Buy all selected items")} style={{ marginRight: '10px' }}>Buy All</Button>
                <Button variant="danger" onClick={deleteSelectedItems}>Delete All</Button>
            </div>
            {sortedWishlist.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '50px', color: '#6c757d' }}>
                    <FaHeart style={{ fontSize: '64px', color: '#6c757d' }} />
                    <h3>You have no items in your Watchlist.</h3>
                    <p>Start adding items to your Watchlist today!</p>
                </div>
            ) : (
                <Row style={{ marginTop: '20px' }}>
                    {sortedWishlist.map((product) => (
                        <Col key={product.id} md={12} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
                            <Form.Check
                                type="checkbox"
                                checked={selectedItems.includes(product.id)}
                                onChange={() => toggleSelectItem(product.id)}
                                style={{ marginRight: '10px' }}
                            />
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                style={{ width: '80px', height: 'auto', borderRadius: '5px', marginRight: '15px' }}
                            />
                            <div style={{ flex: 1 }}>
                                <h4 style={{ fontSize: '1rem', margin: '0 0 10px 0' }}>{product.title}</h4>
                                <p style={{ fontWeight: 'bold', color: '#d9534f', margin: 0 }}>{product.price.toLocaleString()} VND</p>
                                <p style={{ color: '#5bc0de' }}>{product.shippingInformation}</p>
                            </div>
                            <Button variant="primary" style={{ borderRadius: '20px', minWidth: '120px', marginRight: '10px' }}>Buy it now</Button>
                            <Button variant="danger" onClick={() => removeFromWishlist(product.id)} style={{ borderRadius: '20px', minWidth: '120px' }}>
                                Delete
                            </Button>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
        </>
    );
}

export default Wishlist;
