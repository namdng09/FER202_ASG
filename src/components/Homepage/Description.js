import React from 'react';
import { Table, Card, Image, Badge } from 'react-bootstrap';

const ProductDescription = ({ product }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Image src={product.images[0]} thumbnail />
        <Card.Text className="mt-3">{product.description}</Card.Text>
        <Badge bg="success">{product.availabilityStatus}</Badge>
        <Table bordered={false} className="mt-3">
          <tbody>
            <tr>
              <td>Category</td>
              <td>{product.category}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Discount Percentage</td>
              <td>{product.discountPercentage}%</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>{product.rating} ⭐</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>{product.stock}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>SKU</td>
              <td>{product.sku}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{product.weight} g</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>
                {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
              </td>
            </tr>
            <tr>
              <td>Warranty</td>
              <td>{product.warrantyInformation}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>{product.shippingInformation}</td>
            </tr>
            <tr>
              <td>Return Policy</td>
              <td>{product.returnPolicy}</td>
            </tr>
            <tr>
              <td>Minimum Order Quantity</td>
              <td>{product.minimumOrderQuantity}</td>
            </tr>
          </tbody>
        </Table>
        <h5 className="mt-4">Tags</h5>
        {product.tags.map(tag => (
          <Badge key={tag} bg="primary" className="me-1">{tag}</Badge>
        ))}
        <h5 className="mt-4">Reviews</h5>
        {product.reviews.map(review => (
          <div key={review.date} className="border-bottom mb-2 pb-2">
            <strong>{review.reviewerName}</strong> ({review.rating} ⭐):
            <p>{review.comment}</p>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default ProductDescription;