import React, { useState } from 'react'
import './mainCarousel.scss'
import  {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material'
import {shades} from '../../../theme'
import image1 from '../../../assets/ayo-ogunseinde-975db4eBky0-unsplash.jpeg'
import image2 from '../../../assets/christopher-campbell-kFCdfLbu6zA-unsplash.jpeg'
import image3 from '../../../assets/eli-defaria-oV4PktGcXCs-unsplash.jpeg'
import image4 from '../../../assets/marco-lastella-tLqzaCqn5kI-unsplash.jpeg'
import image5 from '../../../assets/rodolfo-sanches-carvalho-DdOl2jwEVls-unsplash.jpeg'
import image6 from '../../../assets/tamara-bellis-zPaxtDNtvCQ-unsplash.jpeg'
// const importAll = (r) => r.keys().reduce((acc, item) => {
//   acc[item.replace('./','')] = r(item);
//     return acc;
// }, {})

// export const heroTextureImports  = importAll(
//   require.context("../../../assets", false, /\.(png|jpe?g|svg)$/)
// )
export const heroTextureImports = [
 image1,
 image2,
 image3,
 image4,
 image5,
 image6,
]
export default function MainCarousel() {
  const [index, setIndex]  = useState(0)
  const isNotMobile =  useMediaQuery("(min-width : 600px)")
 
  return (
    <Carousel
    infiniteLoop = {true}
    showThumbs = {false}
    showIndicators = {false}
    showStatus = {false}
    renderArrowPrev = {(onClickHandler, hasPrev, label) => (
      <IconButton onClick = {onClickHandler}
        sx ={{
          position : 'absolute',
          top : '50%',
          left : '0',
          color : 'white',
          padding : '5px',
          zIndex : '10'

        }}
      >
        <NavigateBeforeIcon sx = {{ fontSize : '40px'}}/>
      </IconButton>
    )}
    renderArrowNext = {(onClickHandler, hasNext, label) => (
      <IconButton onClick = {onClickHandler}
        sx ={{
          position : 'absolute',
          top : '50%',
          right : '0',
          color : 'white',
          padding : '5px',
          zIndex : '10'

        }}
      >
        <NavigateNextIcon sx = {{ fontSize : '40px'}}/>
      </IconButton>
    )}
    >
      {Object.values(heroTextureImports).map((texture, index) =>(
        <Box key = {`carousel-image-${index}`}>
          <img
          style = {{
            width : '100%',
            height : '700px',
            objectFit : 'cover',
            backgroundAttachment : 'fixed'
          }}
          src={texture} alt={texture}/>
          <Box
          color = 'white'
          padding = '20px'
          borderRadius = '1px'
          backgroundColor = 'rgb(0,0,0,0.4)'
          top = '46%'
          position = 'absolute'
          textAlign = 'left'
          left = {isNotMobile? '10%' : '0'}
          right = {isNotMobile? undefined : '0'}
          margin = {isNotMobile? undefined : '0 2px'}
          maxWidth = {isNotMobile? undefined : '240px'}
          >
            <Typography color={shades.secondary[200]}>High point fashion</Typography>
            <Typography variant = "h1" color={shades.secondary[200]}>see the unseen</Typography>
            <Typography fontWeight= "bold" color={shades.secondary[200]} sx={{textDecoration : 'underline', cursor : 'pointer'}}>Discover more</Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  )
}
