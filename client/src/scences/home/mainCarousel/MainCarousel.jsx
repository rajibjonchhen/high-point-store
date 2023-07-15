import React from 'react'
import './mainCarousel.scss'
import  {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useMediaQuery } from '@mui/material'

const importAll = (r) => r.keys().reduce((acc, item) => {
  acc[item.replace('./','')] = r(item);
    return acc;
}, {})

export const heroTextureImports  = importAll(require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
)
export default function MainCarousel() {
  const isNntMobile =  useMediaQuery("(min-width : 600px)")
  const onClickHandler = () =>{}
  return (
    <Carousel
    infiniteLoop = {true}
    showThumbs = {false}
    showArrows = {false}
    showStatus = {false}
    renderArrowPrev = {(onClickHandle, hasPrev, label) => (
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
        <NavigateBeforeIcon sx = {{ fontSize : '40px'}}/>
      </IconButton>
    )}
    >
      {Object.values(heroTextureImports).map((texture, index) =>(
        <Box key = {`carousel-image-${index}`}>
          <img
          style = {{
            width : '100%',
            height : '700px',
            objectFit : 'cover'
          }}

          src={texture} alt={texture}/>
        </Box>
      ))}
    </Carousel>
  )
}
