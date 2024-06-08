import React from 'react'
import { Icon } from '@iconify/react'

const Icons = ({ iconName, className , onClick }) => {
    return (
        <Icon icon={iconName} onClick={onClick} className={` w-6 h-6 cursor-pointer text-white ${className}`} />
    )
}

export default Icons