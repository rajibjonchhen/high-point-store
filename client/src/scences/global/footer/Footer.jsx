import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import './footer.scss'
import { shades } from '../../../theme'


export default function Footer() {
  const {palette : {neutral}} = useTheme()
  return (
    <Box mt='70px' p = '40px 0' backgroundColor = {neutral.light}>
     
    </Box>
  )
}
