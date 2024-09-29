import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
      <div className="paddings innerWidth c-container">
        <div className="callEl">
          <span className="orangeText">Our Contacts</span>
          <span className='primaryText'>Easy to Contact us</span>
          <span className='secondaryText'>We are always ready to help by providing the best services for you.</span>
        <div className="callEl contactModes">
          <div className="flexStart row">

            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25} />
                </div>
                <div className="callEl detail">
                <span className='primaryText'>Call</span>
                  <span className='secondaryText'>07048222080</span>
                </div>
              </div>
              <div className="flexCenter button">
                <a href="tel:+234 70 3116 0057">
                Call Now
                  </a>
              </div>
            </div>
             {/* second mode */}
             <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25}/>
                </div>
                <div className="callEl detail">
                  <span className='primaryText'>Facebook</span>
                  <span className='secondaryText'>Adetokunbo Andrew</span>
                </div>
              </div>
              <div className="flexCenter button">
                <a href="https://www.facebook.com/profile.php?id=100087040522475">
                Chat Now
                </a>
              
              </div>
            </div>

          </div>

          {/*second row */}
          <div className="flexStart row">

            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="callEl detail">
                  <span className='primaryText'>Video Call</span>
                  <span className='secondaryText'>
                   07048222080</span>
                </div>
              </div>
              <div className="flexCenter button">
              <a href="tel:+234 70 3116 0057">
                Video Call Now
                </a>
              </div>
            </div>
             {/* fourth mode */}
             <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="callEl detail">
                  <span className='primaryText'>WhatsApp</span>
                  <span className='secondaryText'>07048222080</span>
                </div>
              </div>
              <div className="flexCenter button">
                <a href="http://whatsapp.com">
                Message Now
                </a>
                
              </div>
            </div>

          </div>

        </div>
        </div>
      </div>
  )
}

export default Contact
