import React from 'react'
import BgDark from '../../assets/images/bg-desktop-dark.jpg'
import BgLight from '../../assets/images/bg-desktop-light.jpg'


const BgImage = () => {

  return (

    <div className=' absolute top-0 left-0 w-full '>
      <img src={BgLight} alt="img" className='w-full h-80' />
    </div>
  )
}

export default BgImage