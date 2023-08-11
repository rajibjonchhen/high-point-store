import { Box, TextField, useMediaQuery } from '@mui/material';
import {getIn} from 'formik'
import React from 'react'

export default function AddressForm({type, values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue}) {
    const isNonMobil = useMediaQuery("(min-width:600px)")
    const formattedName = field => `${type}.${field}`
    const formattedError = field => Boolean(getIn(touched, formattedName(field)) && getIn(errors, formattedName(field)) )
    const formattedHelper = field => getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))
    
    const formElements = [
        {
            type : "text",
            label : "First Name",
            value:"firstName",
            name:"firstName",
            gridColumn:"span 2",
        },
        {
            type : "text",
            label : "Last Name",
            value:"lastName",
            name:"lastName",
            gridColumn:"span 2",
        },
        {
            type : "text",
            label : "Street 1",
            value:"street1",
            name:"street1",
            gridColumn:"span 4",
        },
        {
            type : "text",
            label : "Street 2 (optional)",
            value:"street2",
            name:"street2",
            gridColumn:"span 4",
        },
        {
            type : "text",
            label : "Country",
            value:"country",
            name:"country",
            gridColumn:"span 2",
        },
        {
            type : "text",
            label : "State",
            value:"state",
            name:"state",
            gridColumn:"span 2",
        },
        {
            type : "text",
            label : "City",
            value:"city",
            name:"city",
            gridColumn:"span 2",
        },
        {
            type : "text",
            label : "Postal Code",
            value:"postalCode",
            name:"postalCode",
            gridColumn:"span 2",
        },
    ]

    return (
    <Box 
    display = "grid"
    gap = "15px" 
    gridTemplateColumns = 'repeat(4, minmax(0, 1fr))'
    sx = {{'& >div' :{gridColumn : isNonMobil? undefined : 'span 4'}}}
    >
        {   formElements.map((element) => <TextField key = {element.name}
            fullWidth
            type={element.type}
            label = {element.label}
            onBlur={handleBlur}
            onChange={handleChange}
            value = {values[element.name]}
            name = {formattedName(element.name)}
            error = {formattedError(element.name)}
            helperText = {formattedHelper(element.name)}
            sx = {{gridColumn : element.gridColumn
        }}
            /> )}
        
    </Box>
  )
}
