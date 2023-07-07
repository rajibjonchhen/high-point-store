import React from 'react'
import './productCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Iproduct } from '../../interface/productInterface';
import {GiShoppingCart} from 'react-icons/gi'
import { ConstRoutes } from '../../constant/ConstRoutes';
import { Link } from 'react-router-dom';

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
        {Object.keys(product.description).map((item) => 
        <><span> {item} </span> : <span> {product.description[item]} </span> <br/></>)}
          <Link to={ConstRoutes.detail.url(product.productId)}>
            view more
          </Link>
        </Card.Text>
          <Button variant="success"><GiShoppingCart/></Button>
      </Card.Body>
    </Card>
  );
}
