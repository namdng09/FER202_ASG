import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PopularCategories() {
  const categories = [
    { name: 'Luxury', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg' },
    { name: 'Sneakers', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/02_PopularDestination_Sneakers.jpg' },
    { name: 'P&A', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/03_PopularDestination_Tire.jpg' },
    { name: 'Refurbished', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/ECM_PopularDestination_Reburbished.jpg' },
    { name: 'Trading cards', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/05_PopularDestination_Cards.jpg' },
    { name: 'Pre-loved Luxury', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/06_PopularDestination_PreLoved.jpg' },
    { name: 'Toys', imgSrc: 'https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg' },
  ];

  return (
    <Container className="text-center my-5" style={{}}>
      <h2>Explore Popular Categories</h2>
      <Row className="mt-4">
        {categories.map((category, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <div className="category-item">
              <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
                <img
                  src={category.imgSrc}
                  alt={category.name}
                  className="rounded-circle"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <p className="mt-2" style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>{category.name}</p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PopularCategories;
