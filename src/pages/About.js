import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/about/Icon1.png'
import icon2 from '../assets/about/Icon2.png'
import icon3 from '../assets/about/Icon3.png'
import icon_1 from '../assets/about/Icon_1.png'
import icon_2 from '../assets/about/Icon_2.png'
import icon_3 from '../assets/about/Icon_3.png'
import icon_4 from '../assets/about/Icon_4.png'
import logo_image from '../assets/common/logo_image.jpg'
import vector from '../assets/common/Vector.png'
import instagram from '../assets/about/Insta.png'
import twitter from '../assets/about/Twiter.png'
import facebook from '../assets/about/Fb.png'

const About = () => {
  return (
    <div className='about_page'>
      <div className='about_slide_section'>
        <div className='slide_title_section'>
          <div className='slide_title_content'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>About Us</div>
            </div>
            <div className='slide_title_description'>
              Know About Us
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
            <div className='vision_section mt-12'>
              <div>
                <img src={vector} />
              </div>
              <div className='vision_content'>
                <div className='vision_title'>Our Vision</div>
                <div className='vision_description'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.</div>
              </div>
            </div>
            <div className='vision_section mt-8'>
              <div>
                <img src={vector} />
              </div>
              <div className='vision_content'>
                <div className='vision_title'>Our Mission</div>
                <div className='vision_description'>Custom solutions, which include UX/UI design, advanced analytics, and the integration of complex features, for the development of high-growth online marketplaces.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='work_section'>
        <div className='product_section mb-10'>
          <div className='product_content text-center'>
            <div className='flex items-center justify-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text c-grey'>Work Process</div>
            </div>
            <div className='product_title max-w-lg'>How We Work</div>
          </div>
        </div>
        <div className='service_list pt-8 grid grid-cols-1 xl:grid-cols-3'>
          <div className='work_card'>
            <div className='work_card_title'>
              Make Appointment
            </div>
            <div className='work_card_content'>
              Book easily on Calendly: 1. Choose time. 2. Complete data. 3. Done! Wait for my confirmation for an enriching chat
            </div>
            <img src={icon1} className='work_icon' />
          </div>
          <div className='work_card'>
            <div className='work_card_title'>
              Consultation
            </div>
            <div className='work_card_content'>
              Explore advanced IT strategies. Book your consulting session to analyze your technological approach, address problems and design solutions that enhance your business.
            </div>
            <img src={icon2} className='work_icon' />
          </div>
          <div className='work_card'>
            <div className='work_card_title'>
              Enjoy the Service
            </div>
            <div className='work_card_content'>
              Supervise for your digital project. Track milestones, deadlines, critical progress via Trello, and weekly appointments. Simplify management and ensure the successful fulfillment of your objectives.
            </div>
            <img src={icon3} className='work_icon' />
          </div>
        </div>
      </div>
      <div className='counts_section'>
        <div className='counts_items'>
          <div className='counts_item'>
            <div>
              <img src={icon_1} className='counts_icon' />
            </div>
            <div className='counts_title'>
              <div className='counts_title_1'>10+</div>
              <div className='counts_title_2'>Years of experience</div>
            </div>
            <div className='counts_content'>We have a lot of Full Stack Developers with 10+ years of experience.</div>
          </div>
          <div className='vertical_line'></div>
          <div className='counts_item'>
            <div>
              <img src={icon_2} className='counts_icon' />
            </div>
            <div className='counts_title'>
              <div className='counts_title_1'>17</div>
              <div className='counts_title_2'>Satisfied clients</div>
            </div>
            <div className='counts_content'>We have already completed a lot of projects and satisfied 17 clients</div>
          </div>
          <div className='vertical_line'></div>
          <div className='counts_item'>
            <div>
              <img src={icon_3} className='counts_icon' />
            </div>
            <div className='counts_title'>
              <div className='counts_title_1'>35k</div>
              <div className='counts_title_2'>IT problems solved</div>
            </div>
            <div className='counts_content'>There are a lot of IT problems. But those are no problem for us.</div>
          </div>
          <div className='vertical_line'></div>
          <div className='counts_item'>
            <div>
              <img src={icon_4} className='counts_icon' />
            </div>
            <div className='counts_title'>
              <div className='counts_title_1'>7</div>
              <div className='counts_title_2'>Pro team members</div>
            </div>
            <div className='counts_content'>We have 7 developers who joined in Pro Team. So that they can develop any project.</div>
          </div>
        </div>
      </div>
      <div className='expert_section'>
        <div className='product_section mb-10'>
          <div className='product_content text-center'>
            <div className='flex items-center justify-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text c-grey'>Our Team</div>
            </div>
            <div className='product_title max-w-lg'>Meet Our Experts</div>
          </div>
        </div>
        <div className='service_list pt-8 grid grid-cols-1 xl:grid-cols-3'>
          <div className='expert1'>
            <div className='expert_info'>
              <div className='expert_name'>Martin</div>
              <div className='expert_content'>Full Stack Developer</div>
            </div>
            <div className='expert_hover'>
              <div className='social_group'>
                <img src={instagram}/>
                <img src={facebook}/>
                <img src={twitter}/>
              </div>
            </div>
          </div>
          <div className='expert2'>
            <div className='expert_info'>
              <div className='expert_name'>Anton Lee</div>
              <div className='expert_content'>Lead Full Stack</div>
            </div>
            <div className='expert_hover'>
              <div className='social_group'>
                <img src={instagram}/>
                <img src={facebook}/>
                <img src={twitter}/>
              </div>
            </div>
          </div>
          <div className='expert3'>
            <div className='expert_info'>
              <div className='expert_name'>Redouan El jeld</div>
              <div className='expert_content'>Full Stack Developer</div>
            </div>
            <div className='expert_hover'>
              <div className='social_group'>
                <img src={instagram}/>
                <img src={facebook}/>
                <img src={twitter}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
