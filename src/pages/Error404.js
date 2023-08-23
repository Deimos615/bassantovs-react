import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../assets/error/Photo.png'

const Error404 = () => {
  return (
    <div className='error_page'>
      <div className='error_section'>
        <div className='error_content text-center'>
          <div className='error_type'>404</div>
          <div className='error_msg'>Oops! Page not found!</div>
          <div className='error_btn'>Back To Home</div>
        </div>
      </div>
    </div>
  )
}

export default Error404
