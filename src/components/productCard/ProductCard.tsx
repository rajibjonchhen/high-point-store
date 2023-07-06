import React from 'react'
import './productCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Iproduct } from '../../interface/productInterface';
import {GiShoppingCart} from 'react-icons/gi'

export default function ProductCard({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.images[0]} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
        {/* {Object.keys(product.description).forEach((key, index) => 
          <div key={index}>
            <span>{key}</span><span>{product.description[key]}</span>
          </div>
          )
        } */}
            <span>{product.description.style}</span>
            <br/>
            <span>{product.description.type}</span>
        </Card.Text>
        <Button variant="success"><GiShoppingCart/></Button>
      </Card.Body>
    </Card>
  );
}
