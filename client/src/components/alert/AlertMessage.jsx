import { Alert } from 'bootstrap';
import React from 'react'

export default function AlertMessage({color, message}) {
  return (
        <Alert key={color} variant={color}>
          {message}
        </Alert>
  );
}