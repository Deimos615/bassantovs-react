import React from 'react'
import { Link } from 'react-router-dom'
import project1 from '../assets/product/Photo (3).png'
import project2 from '../assets/product/Photo (4).png'
import photo_1 from '../assets/home/Photo_1.png'
import photo_2 from '../assets/home/Photo_2.png'

const Product = () => {
  return (
    <div className='product_page'>
      <div className='product_slide_section'>
        <div className='slide_title_section'>
          <div className='slide_title_content'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>The Case Studies</div>
            </div>
            <div className='slide_title_description'>
              Our Latest
              Projects
            </div>
          </div>
        </div>
      </div>
      <div className='product_section'>
        <div className='product_content text-center'>
          <div className='flex items-center justify-center'>
            <div className='product_tip'></div>
            <div className='product_tip_text c-grey'>Latest Projects</div>
          </div>
          <div className='product_title'>Discover our latest client projects</div>
          <div className='product_description'>
            These projects in the field of IT consulting have the potential to offer significant returns in the long term, just like more traditional investments. However, it is important to remember that all investments carry risk and it is essential to carry out extensive due diligence before making investment decisions.
          </div>
        </div>
      </div>
      <div className='project_list grid grid-cols-1 lg:grid-cols-3'>
        <div className='project_logo'>
          <img src={photo_1} />
        </div>
        <div className='project_logo'>
          <img src={photo_2} />
        </div>
        <div className='project_logo'>
          <img src={project1} />
        </div>
        <div className='project_logo'>
          <img src={project2} />
        </div>
      </div>
    </div>
  )
}

export default Product
