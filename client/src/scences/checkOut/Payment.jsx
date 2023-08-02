import { Box, TextField, Typography } from '@mui/material'
import { ErrorMessage } from 'formik'
import React from 'react'

export default function Payment({values, touched, errors, handleBlur, handleChange}) {
  return (
    <Box m = "30px 0">
        <Box>
            <Typography sx = {{mb : "15px"}} fontSize = "18px"> Contact Info</Typography>
            <TextField 
        fullWidth
        type='email'
        label = 'Email'
        onBlur={handleBlur}
        onChange={handleChange}
        value = {values.firstName}
        name = 'email'
        error = {!!touched.email && !!errors.email}
        helperText = {touched.email && errors.email}
        sx = {{gridColumn : 'span 4', margin : '15px'}}
        />
        <TextField 
            fullWidth
            type='text'
            label = 'Phone Number'
            onBlur={handleBlur}
            onChange={handleChange}
            value = {values.phoneNumber}
            name = 'phoneNumber'
            error = {!!touched.phoneNumber && !!errors.phoneNumber}
            helperText = {touched.phoneNumber && errors.phoneNumber}
            sx = {{gridColumn : 'span 4', margin : '15px'}}
        />
        </Box>
    </Box>
  )
}
