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
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51NZEN1DNxHz5g8S8fTqAlTLDOrVUHuowZWb3AmQlD0iIMb3yYxErAT3uSST0pFhShJswQw10ucVMB0YL22LpTO2U00gVvPRupn')
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
const [activeStep,setActiveStep] = useState(1)

const handleFormSubmit = async(values, actions) =>  {

  setActiveStep(activeStep+1)
  // 
  if(activeStep === 1 && values.shippingAddress.isSameAddress){
    actions.setFieldValue("shippingAddress", {
      ...values.billingAddress,
      isSameAddress : true
    })
  }
  if(activeStep === 2){
    makePayment(values)
  }
  actions.setTouched({})
}

async function makePayment(values){
  const stripe = await stripePromise
  const requestBody = {
    userName : [values.firstName, values.secondName].join(" "),
    email : values.email,
    products : cart.map(({id, count}) => ({
      id,
      count,
    }))
  }
  const response = await fetch("http://localhost:1337/api/orders", {
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(requestBody)
  });
  const session = await response.json();
  console.log("make payment session" , session)
  await stripe.redirectToCheckout({
    sessionId : session.id
  })


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
                {activeStep === 1 && 
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
                {activeStep === 2 && 
                <Payment
                values ={values} 
                errors={errors} 
                touched={touched} 
                handleBlur ={handleBlur} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                setFieldValue={setFieldValue} 
                />}
                <Box display = 'flex' justifyContent= 'space-between' gap = '50px'>
                  {activeStep === 2 && (
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
                    >{activeStep === 1? "Next" : "Place Order"}</Button>
                </Box>
            </form>
            )}
          </Formik>
        </Box>
    </Box>
  )
}
