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
        columnGap = 'clamp(20px, 30px, 40px)' 
      >
        <Box width = 'clamp(20%, 30%, 40%)'>
            <Typography variant='h4' fontWeight = 'bold' mb = '20px' color = {shades.secondary[500]}>High Point</Typography>
            <div>
              Risus primis platea egestas facilisi donec. Nam inceptos cubilia donec egestas ornare mattis. Scelerisque metus nullam per tempus pretium dis curabitur primis dictum taciti eget. Pede duis libero tellus rutrum bibendum sed gravida mattis scelerisque turpis molestie. Sagittis convallis litora metus rutrum senectus. Nisi ad condimentum semper diam habitant metus.
            </div>
        </Box>
        <Box>
          <Typography variant='h4'  fontWeight = 'bold' mb = '20px'  >About Us</Typography>
          <Typography  mb = '20px' >Career</Typography>
          <Typography  mb = '20px' >Terms and condition</Typography>
          <Typography  mb = '20px' >Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant='h4'  fontWeight = 'bold' mb = '20px' >Help Center</Typography>
          <Typography  mb = '20px' >Track your order</Typography>
          <Typography  mb = '20px' >Corporate and bulk purchasing</Typography>
          <Typography  mb = '20px' >Returns and refund</Typography>
        </Box>
        <Box width = 'clamp(20%, 25%, 30%)'
        >
            <Typography variant='h4' fontWeight = 'bold' mb = '20px' >Contact Us</Typography>
            <Typography  mb = '20px' >Rua Langgade - 39 </Typography>
            <Typography  mb = '20px' >Valby Langgade</Typography>
            <Typography  mb = '20px' >2250</Typography>
        </Box>
      </Box>
    </Box>
  )
}
