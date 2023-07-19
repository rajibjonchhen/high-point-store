import React, { useState } from 'react'
import { Box, InputBase, Button, IconButton, Typography, useMediaQuery, Divider } from '@mui/material'
import  MarkEmailReadOutlinedIcon  from '@mui/icons-material/MarkEmailReadOutlined'


export default function Subscribe() {
  const [email, setEmail] = useState('')
  return (
    <Box width = "80%" margin = '80px auto' textAlign= 'center'>
      <IconButton>
        <MarkEmailReadOutlinedIcon/>
      </IconButton>
      <Typography>Subscribe to our news letter</Typography>
      <Typography>and receive € 20 coupon for your first order when you checkout</Typography>
      <Box
      p = '2px 4px'
      m = '15px auto'
      display = 'flex'
      alignItems = 'center'
      width = '75%'
      backgroundColor = '#f2f2f2'
      >
        <InputBase
        sx = {{ml : 1, flex : 1 }}
        placeholder = 'enter your email'
        onChange = {(e) => setEmail(e.target.value)}
        value = {email}
        />
        <Divider sx = {{height:28, m : 0.5}} orientation='vertical'/>
        <Typography sx = {{p : '10px', ':hover' : {cursor : 'pointer'}}}
        >Subscribe</Typography>
      </Box>
    </Box>
  )
}
