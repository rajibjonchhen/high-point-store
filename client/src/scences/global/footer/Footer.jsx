import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import './footer.scss'
import { shades } from '../../../theme'


export default function Footer() {
  const {palette : {neutral}} = useTheme()
  return (
    <Box mt='70px' p = '40px 0' backgroundColor = {neutral.light}>
      <Box 
        width = "80%"
        margin = 'auto'
        display = 'flex'
        justifyContent = 'space-between'
        flexWrap = 'wrap'
        rowGap = '30px'
        columnGap = 'clamp(20px 30px 40px)' 
      >
        <Box width = 'clamp(20% 30% 40%)'>
            <Typography variant='h4' fontWeight = 'bold' mb = '30px' color = {shades.secondary[500]}>High Point</Typography>
            <p>
              Risus primis platea egestas facilisi donec. Nam inceptos cubilia donec egestas ornare mattis. Scelerisque metus nullam per tempus pretium dis curabitur primis dictum taciti eget. Pede duis libero tellus rutrum bibendum sed gravida mattis scelerisque turpis molestie. Sagittis convallis litora metus rutrum senectus. Nisi ad condimentum semper diam habitant metus.
            </p>
        </Box>
        <Box>
          <Typography fontWeight = 'bold' mb = '30px'  >About Us</Typography>
          <Typography  mb = '30px' >Career</Typography>
          <Typography  mb = '30px' >Terms and condition</Typography>
          <Typography  mb = '30px' >Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography  mb = '30px' >Help Center</Typography>
          <Typography  mb = '30px' >Track your order</Typography>
          <Typography  mb = '30px' >Corporate and bulk purchasing</Typography>
          <Typography  mb = '30px' >Returns and refund</Typography>
        </Box>
        <Box width = 'clamp(20% 25% 30%)'
        >
            <Typography variant='h4' fontWeight = 'bold' mb = '30px' >Contact Us</Typography>
            <Typography  mb = '30px' >Rua Langgade - 39 </Typography>
            <Typography  mb = '30px' >Valby Langgade</Typography>
            <Typography  mb = '30px' >2250</Typography>
        </Box>
      </Box>
    </Box>
  )
}
