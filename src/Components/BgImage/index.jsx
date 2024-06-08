import React from 'react'
import BgDark from '../../assets/images/bg-desktop-dark.jpg'
import BgLight from '../../assets/images/bg-desktop-light.jpg'
import {  useThemeSwither } from '../../context/ThemeSwither';


const BgImage = () => {
  const {themeMode} = useThemeSwither()
  return (
    <div className=' absolute top-0 left-0 w-full '>
       {themeMode === 'light' ? <img src={BgLight} alt="img" className='w-full h-80' /> : <img src={BgDark} alt="img" className='w-full h-80' />}
    </div>
  )
}

export default BgImage