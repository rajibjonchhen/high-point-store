import React, { useState } from 'react'
import './checkOut.scss'
import { ConstRoutes } from '../../constant/ConstRoutes'
import * as yup from 'yup'
import {Formik} from 'formik'

import {
  Box,
  IconButton,
  Typography,
  Button,
  useTheme,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import { useSelector } from 'react-redux';
import { shades } from '../../theme'
import Shipping from './Shipping'
import Payment from './Payment'

const initialValues = {
  billingAddress  : {
    firstName :"",
    lastName:"",
    country:"",
    street1:"",
    street2:"",
    city:"",
    state:"",
    postalCode:"",
  },
  shippingAddress  : {
    isSameAddress : true,
    firstName :"",
    lastName:"",
    country:"",
    street1:"",
    street2:"",
    city:"",
    state:"",
    postalCode:"",
  },
  email : "",
  phoneNumber : ""
}

const checkOutSchema = [yup.object().shape({billingAddress : yup.object().shape({
  firstName : yup.string().required("required"),
    lastName : yup.string().required("required"),
    country : yup.string().required("required"),
    street1 : yup.string().required("required"),
    street2 : yup.string(),
    city : yup.string().required("required"),
    state : yup.string().required("required"),
    postalCode : yup.string().required("required"),
})}),
yup.object().shape({shippingAddress : yup.object().shape({
    isSameAddress : yup.boolean(),
    firstName : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
    lastName : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
    country : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
    street1 : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
    street2 : yup.string(),
    city : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
    state : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
    postalCode : yup.string().when("isSameAddress", {is : false, then :yup.string().required("required")}),
})
}),
yup.object().shape({
  email : yup.string().required("required"),
  phoneNumber : yup.string().required("required")
})
]

export default function CheckOut() {
const cart = useSelector(state => state.cart.cart)
const [activeStep,setActiveStep] = useState(0)
let isFirstStep = activeStep === 0
let isSecondStep = activeStep === 1

const handleFormSubmit = async(values, actions) =>  {
  setActiveStep(activeStep+1)

  // 
  if(isFirstStep && values.shippingAddress.isSameAddress){
    actions.setFieldValue("shippingAddress", {
      ...values.billingAddress,
      isSameAddress : true
    })
  }

  if(isSecondStep){
    makePayment(values)
  }

  actions.setTouched({})
}

async function makePayment(values){

}
  return (
    <Box width = '80%' m = '100px auto'>
        <Stepper>
          <Step>
            <StepLabel>Billing</StepLabel>
          </Step>
          <Step>
            <StepLabel>Payment</StepLabel>
          </Step>
        </Stepper>
        <Box>
          <Formik
          onSubmit = {handleFormSubmit}
          initialValues = {initialValues}
          validationSchema = {checkOutSchema[activeStep]}
          >
            {({
              values, 
              errors, 
              touched, 
              handleBlur, 
              handleChange, 
              handleSubmit, 
              setFieldValue
            }) => (
            <form onSubmit = {handleSubmit}>
                {isFirstStep && 
              <Shipping 
                values ={values} 
                errors={errors} 
                touched={touched} 
                handleBlur ={handleBlur} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                setFieldValue={setFieldValue} 
                />
                }
                {isSecondStep && <Payment/>}
                <Box display = 'flex' justifyContent= 'space-between' gap = '50px'>
                  {isSecondStep && (
                    <Button
                    fullWidth
                    variant='contained'
                    color = 'primary'
                    sx = {{
                      backgroundColor : shades.primary[200],
                      boxShadow : 'none',
                      color : 'white',
                      borderRadius : 0,
                      padding : '15px 40px'
                    }}
                    onClick = {() => setActiveStep(activeStep - 1)}
                    >Back</Button>
                  )}
                  <Button
                    fullWidth
                    type = 'submit'
                    variant='contained'
                    color = 'primary'
                    sx = {{
                      backgroundColor : shades.primary[200],
                      boxShadow : 'none',
                      color : 'white',
                      borderRadius : 0,
                      padding : '15px 40px'
                    }}
                    onClick = {() => setActiveStep(activeStep + 1)}
                    >{isFirstStep? "Next" : "Place Order"}</Button>
                </Box>
            </form>
            )}
          </Formik>
        </Box>
    </Box>
  )
}
