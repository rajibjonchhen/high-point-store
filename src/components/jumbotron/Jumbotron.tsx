import React from 'react'
import './jumbotron.scss'
import  Button from 'react-bootstrap/Button';

export default function Jumbotron() {
  return (
    <div className='container-fluid jumbotron'>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </div>
  )
}
