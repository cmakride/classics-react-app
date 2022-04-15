import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  //! if current equals last index set it back to start of array
  //!if not set it to the next index in the array
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }



  return (
    <>
    
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    <section className='slider'>
      {SliderData.map((slide, index) => {
        return (
          <div key={index} className={index === current ? 'slide-active' : 'hidden'}>
            {index === current && (
              <img src={slide.image} alt="cocktail" className='image' />
              )}
          </div>
        )
      })}

    </section>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
     
    </>
  )
}

export default ImageSlider