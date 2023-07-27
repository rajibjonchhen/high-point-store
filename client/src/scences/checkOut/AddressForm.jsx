import { TextField, useMediaQuery } from '@mui/material'
import React from 'react'

export default function AddressForm({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue}) {
    const isNonMobil = useMediaQuery("(min-width:600px)")
    const formattedName = field => `${type}.${field}`
    const formattedError = field => Boolean(getIn(touched, formattedName(field)) && getIn(errors, formattedName(field)) )
    const formattedHelper = field => Boolean(getIn(touched, formattedName(field)) && getIn(errors, formattedName(field)) ) 
    return (
    <Box 
    display = "grid" 
    gridTemplateColumns = 'repeat(4, minmax(0, 1fr))'
    sx = {{'& >div' :{gridColumn : isNonMobil? undefined : 'span 4'}}}
    >
        <TextField 
        fullWidth
        type='text'
        label = 'First Name'
        onBlur={handleBlur}
        onChange={handleChange}
        value = {values.firstName}
        name = {formattedName('firstName')}
        error = {formattedError('firstName')}
        helperText = {formattedHelper('firstName')}
        sx = {{gridColumn : 'span 2'}}
        />
        <TextField 
        fullWidth
        type='text'
        label = 'Last Name'
        onBlur={handleBlur}
        onChange={handleChange}
        value = {values.lastName}
        name = {formattedName('lastName')}
        error = {formattedError('lastName')}
        helperText = {formattedHelper('lastName')}
        sx = {{gridColumn : 'span 2'}}
        />
        <TextField 
        fullWidth
        type='text'
        label = 'Country'
        onBlur={handleBlur}
        onChange={handleChange}
        value = {values.country}
        name = {formattedName('country')}
        error = {formattedError('country')}
        helperText = {formattedHelper('country')}
        sx = {{gridColumn : 'span 2'}}
        />
    </Box>
  )
}
