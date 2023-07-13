import React, { useEffect } from 'react'
import './productCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {GiShoppingCart} from 'react-icons/gi'
import { ConstRoutes } from '../../constant/ConstRoutes';
import { Link } from 'react-router-dom';

export default function ProductCard({product}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.images[0]} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {Object.keys(product.description).map((item, i) => 
        <><span key={item}> {item}  :  {product.description[item]} </span> <br/></>)}
          <Link to={ConstRoutes.detail.url(product.id)}>
            view more
          </Link>
        </Card.Text>
          <Button variant="success"><GiShoppingCart/></Button>
      </Card.Body>
    </Card>
  );
}
