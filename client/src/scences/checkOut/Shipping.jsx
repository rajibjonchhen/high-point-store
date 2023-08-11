import React from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
    Typography
  } from "@mui/material";
  import AddressForm from './AddressForm';

export default function Shipping({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue}) {
  return (
    <Box m = '30px auto'>
         <Box>
            <Typography sx = {{mb : '15px'}} fontSize= '18px'>Billing Information</Typography>
            <AddressForm
                type = "billingAddress"
                values = {values.billingAddress} 
                errors = {errors}
                touched={touched} 
                handleBlur ={handleBlur} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
        </Box>
        <Box mb = '20px'>
            <FormControlLabel control={<Checkbox 
             
            value = {values.shippingAddress.isSameAddress}
            onChange = {() =>
                setFieldValue("shippingAddress.isSameAddress",!values.shippingAddress.isSameAddress)
            }
            defaultChecked
            />}/> Is the Shipping Address the same as the Billing Address
        </Box>
        {!values.shippingAddress.isSameAddress && (
        <Box>
            <Typography  sx = {{mb : '15px'}} fontSize= '18px'>Shipping Address</Typography>
            <AddressForm
                type = "shippingAddress"
                values = {values.shippingAddress} 
                errors = {errors}
                touched={touched} 
                handleBlur ={handleBlur} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
        </Box>
        )} 
    </Box>
  )
}
