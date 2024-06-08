import React from 'react'
import Icon from '../Icons'
import { useThemeSwither } from '../../context/ThemeSwither'

const NavBar = () => {
  const { themeMode, lightTheme, darkTheme } = useThemeSwither()

  const handleThemeChange = () => {
    if (themeMode === 'dark') {
      return lightTheme()
     
    } else {
     return  darkTheme(),  console.log('light');
    }
  }
  return (
    <div className='flex justify-between items-center'>
      <h1 className=' text-2xl sm:text-3xl !text-white font-[510]  tracking-5 '>TODO</h1>
      <div className="" >
        {themeMode === 'light' ? <Icon iconName={'ion:moon-sharp'} className={'!w-7 !h-7 mr-1'} onClick={handleThemeChange}/> : <Icon iconName={'clarity:sun-solid'} className={'!w-7 !h-7 mr-1'} onClick={handleThemeChange}/>}
      </div>
    </div>

  )
}

export default NavBar