import React from 'react'

const Title = ({ title, description}) => {
  return (
    <div className='text-center mt-6 text-slate-700'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-sm text-slate-600 mt-2 max-w-md mx-auto'>{description}</p>
    </div>
  )
}

export default Title