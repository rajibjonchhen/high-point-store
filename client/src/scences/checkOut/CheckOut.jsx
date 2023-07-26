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

export default function CheckOut() {
  const cart = useSelector(state => state.cart.cart)
const [activeStep,setActiveStep] = useState(0)
let isFirstStep = activeStep === 0
let isSecondStep = activeStep === 1

const handleFormSubmit = async(value, action) =>  {
  setActiveStep(activeStep+1)
}

async function makePayment(values){

}
  return (
    <Box width = '80%' m = '100px auto'>
        CheckOut
        <Link to = {ConstRoutes.confirmation.url()}>
            <button>Confirmation</button>
        </Link>
    </Box>
  )
}
