import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/common/Icon (1).png'
import icon2 from '../assets/common/Icon (2).png'
import icon3 from '../assets/common/Icon (3).png'
import icon4 from '../assets/common/Icon (4).png'
import icon_1 from '../assets/about/Icon_1.png'
import icon_2 from '../assets/about/Icon_2.png'
import icon_3 from '../assets/about/Icon_3.png'
import icon_4 from '../assets/about/Icon_4.png'
import logo_image from '../assets/common/logo_image.jpg'
import vector from '../assets/common/Vector.png'
import vector1 from '../assets/home/Vector.png'
import instagram from '../assets/about/Insta.png'
import twitter from '../assets/about/Twiter.png'
import facebook from '../assets/about/Fb.png'
import photo_1 from '../assets/home/Photo_1.png'
import photo_2 from '../assets/home/Photo_2.png'
import goTo from '../assets/home/_.png'
import user1 from '../assets/home/user1.jpg'
import user2 from '../assets/home/user2.jpg'
import star from '../assets/home/Star.png'
import calendly from '../assets/home/calendly.png'

import { InlineWidget, PopupWidget } from 'react-calendly'

const Homepage = () => {
  const pageSettings={
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055',
    minWidth: '500px'
  }
  return (
    <div className='home_page'>
      <div className='home_slide_section'>
        <div className='home_slide_title_section'>
          <div className='slide_title_content'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>Welcome to Bassantovs</div>
            </div>
            <div className='slide_title_description'>
              The Best Value for <span className='business_color'>Business</span> and Corporation
            </div>
          </div>
        </div>
      </div>
      <div className='welcome_section flex'>
        <div className='logo_section'>
          <div className=' pt-10'>
            <img src={logo_image} />
            <div className='logo_description'>We’re Ready To Grow Your Business With Us</div>
          </div>
        </div>
        <div className='plan_section'>
          <div className='plan_title'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text c-grey'>Welcome Bassantovs</div>
            </div>
            <div className='plan_content'>We Care About Your Devlopment Plan.</div>
          </div>
          <div className='plan_description'>Bassantovs became a long-term partner for tech businesses, enterprises &nbsp;&nbsp; across the globe. Our top experts will help you with the end-to-end delivery of your solution: from a vision to a full-fledged product. We will guide you through every step of the process, from a Discovery Phase to implementation and support.</div>
          <div className='flex flex-col'>
            <div className='flex mt-12'>
              <div>
                <img src={vector} />
              </div>
              <div className='vision_content'>
                <div className='vision_title'>Components of a Business Strategy</div>
              </div>
            </div>
            <div className='flex mt-8'>
              <div>
                <img src={vector} />
              </div>
              <div className='vision_content'>
                <div className='vision_title'>Business Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='product_section'>
        <div className='product_content text-center'>
          <div className='flex items-center justify-center'>
            <div className='product_tip'></div>
            <div className='product_tip_text c-grey'>We Are Expertise In</div>
          </div>
          <div className='product_title max-w-lg'>We Provide Professional Business Solutions.</div>
        </div>
      </div>
      <div className='service_list grid grid-cols-1 xl:grid-cols-3'>
        <div className='service_card'>
          <div className='service_card_title'>
            Custom Software
            Development
          </div>
          <div className='service_card_content'>
            Build a custom solution, modernize your system, or solve a specific business issue with our end-to-end software solution development services.
          </div>
          <img src={icon1} className='service_icon' />
        </div>
        <div className='service_card'>
          <div className='service_card_title'>
            Team Extension
          </div>
          <div className='service_card_content'>
            Grow your team and expand your software development capabilities with a reliable tech partner by your side.
          </div>
          <img src={icon2} className='service_icon' />
        </div>
        <div className='service_card'>
          <div className='service_card_title'>
            Technology Consulting
          </div>
          <div className='service_card_content'>
            Achieve sustainable business results, maximize the value of your tech investments and fuel innovation with a reliable technology consulting partner by your side.
          </div>
          <img src={icon3} className='service_icon' />
        </div>
        <div className='service_card'>
          <div className='service_card_title'>
            MVP
          </div>
          <div className='service_card_content'>
            Validate your idea, mitigate risks, ensure successful project kick-off, and shape the final scope of the solution.
          </div>
          <img src={icon4} className='service_icon' />
        </div>
      </div>
      <div className='latest_project_section'>
        <div className='product_section mb-10'>
          <div className='latest_product_content'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='latest_product_tip_text c-grey'>Work Process</div>
            </div>
            <div className='latest_product_title'>You can check our projects as inspirations.</div>
          </div>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
          <div className='latest_project'>
            <div className='latest_project_back_1'>
              <img src={photo_1} />
            </div>
            <div className='flex items-center justify-between w-full'>
              <div className='latest_project_content'>Social Bussiness Network</div>
              <img src={goTo} />
            </div>
          </div>
          <div className='latest_project'>
            <div className='latest_project_back_2'>
              <img src={photo_2} />
            </div>
            <div className='flex items-center justify-between w-full'>
              <div className='latest_project_content'>Social Bussiness Network</div>
              <img src={goTo} />
            </div>
          </div>
        </div>
        <hr className='copyright_hr mt-6' />
      </div>
      <div className='customers_section pb-40'>
        <div className='client_say'>
          <div className='say_title'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text'>Testimonial</div>
            </div>
            <div className='say_content'>
              What Our Client Say’s
            </div>
          </div>
          <div className='clients'>
            <div className='client_card'>
              <div className='client_info'>
                <div className=' mr-4'>
                  <img src={user1} className='user_avatar' />
                </div>
                <div className='user_info'>
                  <div className='user_name'>James Liu</div>
                  <div className='user_role'>Senior Software</div>
                  <div>
                    <img src={star} />
                  </div>
                </div>
              </div>
              <div className='user_say'>
                “During his time with me, he consistently impressed us with his skills, and out of the box solutions. He was a reliable resource who never failed to surprise us with his creativity and out-of-the-box thinking abilities.”
              </div>
            </div>
            <div className='client_card'>
              <div className='client_info'>
                <div className=' mr-4'>
                  <img src={user2} className='user_avatar' />
                </div>
                <div className='user_info'>
                  <div className='user_name'>Anna Lashkoa</div>
                  <div className='user_role'>Electronics Engineer</div>
                  <div>
                    <img src={star} />
                  </div>
                </div>
              </div>
              <div className='user_say'>
                “I thoroughly enjoyed my time working with Ina, and came to know him as a truly valuable asset to our team. He is honest, dependable, and incredibly hardworking. Beyond that, he is an impressive Full stack Engineer who is able to handle whole project and lead it to a success.”
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='book_section'>
        <div className='how_section'>
          <div>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>Work Process</div>
            </div>
            <div className='how_title mt-4'>To Get Your Business To The Next Level</div>
          </div>
          <div className='flex flex-col'>
            <div className=' flex mt-12'>
              <div>
                <img src={vector1} />
              </div>
              <div className='vision_content'>
                <div className='how_vision_title'>Planning</div>
                <div className='how_description'>
                  All steps are planned through milestones having a clear path to follow
                  <hr className='how_hr' />
                </div>
              </div>
            </div>
            <div className=' flex mt-8'>
              <div>
                <img src={vector1} />
              </div>
              <div className='vision_content'>
                <div className='how_vision_title'>Briefing</div>
                <div className='how_description'>
                  The steps are executed successively until the project is finished
                  <hr className='how_hr' />
                </div>
              </div>
            </div>
            <div className=' flex mt-8'>
              <div>
                <img src={vector1} />
              </div>
              <div className='vision_content'>
                <div className='how_vision_title'>Feedback</div>
                <div className='how_description'>
                  Periodically we will have a meeting to receive feedback and follow up on progress.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='book_content_section'>
          <div>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>Book Now</div>
            </div>
            <div className='how_title mt-4'>Get Free Business Appointment</div>
          </div>
          <div className='flex items-center calendly'>
            <InlineWidget url="https://calendly.com/duediligenze/promotion" styles={{maxWidth: '40vw', minHeight: '753px', width: '50vw', height: '50vw'}}/>
            {/* <img src={calendly} className='calendly_img'/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
