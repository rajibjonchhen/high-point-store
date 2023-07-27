import React from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
    Button,
    Typography
  } from "@mui/material";
  import AddressForm from './AddressForm';

export default function Shipping({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue}) {
  return (
    <Box m = '30px auto'>
         <Box>
            <Typography sx = {{mb : '15px'}} fontSize= '18px'>Billing Information</Typography>
            {/* <AddressForm
                type = "billingAddress"
                values = {values.billingAddress} 
                errors = {errors}
                touched={touched} 
                handleBlur ={handleBlur} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            /> */}
        </Box>
        <Box mb = '20px'>
            {/* <FormControlLabel control={<Checkbox 
            defaultChecked 
            value = {values.shippingAddress.isSameAddress}
            onChange = {
                setFieldValue("shippingAddress.isSameAddress",!values.shippingAddress.isSameAddress)
            }
            />}/> */}
        </Box>
        {!values.shippingAddress.isSameAddress && (
        <Box>
            <Typography>Shipping Address</Typography>
            {/* <AddressForm
                type = "billingAddress"
                values = {values.billingAddress} 
                errors = {errors}
                touched={touched} 
                handleBlur ={handleBlur} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            /> */}
        </Box>
        )} 
    </Box>
  )
}
