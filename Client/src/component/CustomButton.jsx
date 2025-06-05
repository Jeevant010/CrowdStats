import React from 'react'

const CustomButton = ({ btnType, title, styles, handleClick }) => {
    return (
        <button
        type={btnType}
        className={`py-4 px-6 font-epilogue font-semibold text-[14px] text-white rounded-[10px] ${styles}`}
        onClick={handleClick}
        >
        {title}
        </button>
    )
    }


export default CustomButton