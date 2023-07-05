import React from 'react'

import AlertMessage from 'react-bootstrap/Alert';
export default function Alert(variant:string, message:string) {
  return (
        <Alert variant={variant}>
          {message}
        </Alert>
  );
}