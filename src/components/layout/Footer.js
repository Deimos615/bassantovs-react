import React from "react";
import logo from '../../assets/footer/footer_logo.png';
import location from '../../assets/footer/Icon.png';
import message from '../../assets/footer/Message.png'
// import instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div id="footer" className="flex justify-center items-center">
      <div className="footer_section">
        <div className="top_footer">
          <div className="flex justify-between">
            <div className=" pt-2">
              <img src={logo} height="22" width="192" />
            </div>
            <div className="flex items-center top_footer_item1">
              <img src={message} />
              <div className=" ml-3">
                <div className="top_footer_title">Mail Us</div>
                <div className="top_footer_content">support@bassantovs.com</div>
              </div>
            </div>
            <div className="flex items-center top_footer_item2">
              <img src={location} />
              <div className=" ml-3">
                <div className="top_footer_title">Location</div>
                <div className="top_footer_content">Santa Fe, 530 B HARKLE ROAD STE 100</div>
              </div>
            </div>
          </div>
          <hr className="footer_hr" />
        </div>
        <div className="footer_detail grid grid-cols-1 xl:grid-cols-2">
          <div className="footer_pages justify-center xl:justify-start">
            <div className="quick_links">
              <div className="flex items-center">
                <div className="check_box"></div>
                <div className=" ml-2 link_title">Quick Link</div>
              </div>
              <div className="link_items mt-3">
                <div className="link_item">Services</div>
                <div className="link_item">About Us</div>
                <div className="link_item">Success Stories</div>
                <div className="link_item">Our Products</div>
                <div className="link_item">Contact Us</div>
              </div>
            </div>
            <div className="services">
              <div className="flex items-center">
                <div className="check_box"></div>
                <div className=" ml-2 link_title">Our Services</div>
              </div>
              <div className="service_item">Team extension</div>
              <div className="service_item">Custom Software Development</div>
              <div className="service_item">Technology Consulting</div>
              <div className="service_item">MVP</div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end">
            <div className="subscribe_section mt-8 xl:mt-0">
              <div className="subscribe_content">
                <div className="subscribe_title_section">
                  <div className="subscribe_title">Subscribe</div>
                  <div className="subscribe_content">Join Our Mailing List & to get our news.</div>
                </div>
              </div>
              <div className="mailbox flex">
                <input className="mail_input" id="email" name="email" placeholder="your email address" />
                <div className="send_btn">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_section">
          <hr className="copyright_hr" />
          <div className="copyright_text">Copyright © 2022 - 2023 Bassantovs LLC</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
