import React from 'react'
import './productCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Iproduct } from '../../interface/productInterface';

export default function ProductCard({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
        {/* {Object.keys(product.description).forEach((key, index) => 
          <div key={index}>
            <span>{key}</span><span>{product.description[key]}</span>
          </div>
          )
        } */}
        </Card.Text>
        <Button variant="primary">Add to basket</Button>
      </Card.Body>
    </Card>
  );
}
