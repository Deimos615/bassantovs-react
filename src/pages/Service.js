import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/common/Icon (1).png'
import icon2 from '../assets/common/Icon (2).png'
import icon3 from '../assets/common/Icon (3).png'
import icon4 from '../assets/common/Icon (4).png'
import icon_1 from '../assets/service/Icon1.png'
import icon_2 from '../assets/service/Icon2.png'
import icon_3 from '../assets/service/Icon3.png'
import icon_4 from '../assets/service/Icon4.png'
import user1 from '../assets/home/user1.jpg'
import user2 from '../assets/home/user2.jpg'
import star from '../assets/home/Star.png'

const Service = () => {
  return (
    <div className='service_page'>
      <div className='service_slide_section'>
        <div className='slide_title_section'>
          <div className='slide_title_content'>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>Our Services</div>
            </div>
            <div className='slide_title_description'>
              We’re Offering
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
          <div className='product_description'>
            These projects in the field of IT consulting have the potential to offer significant returns in the long term, just like more traditional investments. However, it is important to remember that all investments carry risk and it is essential to carry out extensive due diligence before making investment decisions.
          </div>
        </div>
      </div>
      <div className='service_list grid grid-cols-1 xl:grid-cols-3 pb-24'>
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
      <div className='provide_section'>
        <div className='provide_top_section'>
          <div>
            <div className='flex items-center'>
              <div className='product_tip'></div>
              <div className='product_tip_text text-white'>What we’re offering</div>
            </div>
            <div className='provide_description'>Services we’re providing to our customers</div>
          </div>
          <div className='flex items-center'>
            <div className='provide_content'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with service for state of the art customer service.</div>
          </div>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-4 gap-7'>
          <div className='provide_card'>
            <div className='provide_card_content'>
              <div>
                <img src={icon_1}/>
              </div>
              <div className='provide_card_description'>Product<br/>development</div>
            </div>
          </div>
          <div className='provide_card'>
            <div className='provide_card_content'>
              <div>
                <img src={icon_2}/>
              </div>
              <div className='provide_card_description'>UI/UX<br/>designing</div>
            </div>
          </div>
          <div className='provide_card'>
            <div className='provide_card_content'>
              <div>
                <img src={icon_3}/>
              </div>
              <div className='provide_card_description'>Data<br/>analysis</div>
            </div>
          </div>
          <div className='provide_card'>
            <div className='provide_card_content'>
              <div>
                <img src={icon_4}/>
              </div>
              <div className='provide_card_description'>Content<br/>management</div>
            </div>
          </div>
        </div>
      </div>
      <div className='link_section'>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-150'>
          <div className='link_group'>
            <div className='links_title'>DEVOPS</div>
            <ul className='links_items'>
              <li className='links_item'>Infrastructure as a Code (IaaC)</li>
              <li className='links_item'>Site reliability engineering CI/CD</li>
              <li className='links_item'>Infrastructure automation and orchestration</li>
              <li className='links_item'>Infrastructure stability and security</li>
              <li className='links_item'>Incident management</li>
              <li className='links_item'>Configuration management</li>
            </ul>
          </div>
          <div className='link_group'>
            <div className='links_title'>CLOUD</div>
            <ul className='links_items'>
              <li className='links_item'>Cloud native services</li>
              <li className='links_item'>Cloud-readiness assessment</li>
              <li className='links_item'>Cloud adoption and migration</li>
              <li className='links_item'>Cloud agnostic services</li>
              <li className='links_item'>Hybrid and private clouds</li>
              <li className='links_item'>Serverless computing</li>
              <li className='links_item'>Cloud optimization and automation</li>
            </ul>
          </div>
          <div className='link_group'>
            <div className='links_title'>DIGITAL PLATFORMS</div>
            <ul className='links_items'>
              <li className='links_item'>OpenText, SAP, Salesforce development</li>
              <li className='links_item'>Lowcode and nocode development</li>
              <li className='links_item'>CRM development, integration, and support</li>
              <li className='links_item'>Robotic process automation (RPA)</li>
            </ul>
          </div>
          <div className='link_group'>
            <div className='links_title'>DATA ANALYTICS</div>
            <ul className='links_items'>
              <li className='links_item'>Data and analytics strategy</li>
              <li className='links_item'>Data governance</li>
              <li className='links_item'>Cloud-based data solutions</li>
              <li className='links_item'>Data & analytics platforms</li>
              <li className='links_item'>Building or extending data teams</li>
              <li className='links_item'>Data science, AI, and ML</li>
            </ul>
          </div>
          <div className='link_group'>
            <div className='links_title'>IOT & EMBEDDED</div>
            <ul className='links_items'>
              <li className='links_item'>Data management and predictive analytics</li>
              <li className='links_item'>Hardware selection or prototyping</li>
              <li className='links_item'>Firmware/software development</li>
              <li className='links_item'>Network connectivity solutions</li>
              <li className='links_item'>Cloud-native IoT</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='customers_section'>
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
    </div>
  )
}

export default Service
