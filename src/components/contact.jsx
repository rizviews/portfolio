import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faPhone, faInbox, faBlog, faHouseUser } from '@fortawesome/free-solid-svg-icons';

class Contact extends React.Component {
    render () {
        const socialIconStyle = {
            paddingRight: "10px"
          };
        return (
          <section id="contact" className="parallax-section">
               <div className="container">
                    <div className="row">
          
                         <div className="col-md-6 col-sm-6">
                              <div className="background-image contact-img"></div>
                         </div>
          
                         <div className="bg-dark col-md-3 col-sm-6">
                              <div className="contact-thumb">
                                   <div className="wow fadeInUp contact-info" data-wow-delay="0.6s">
                                        <h3 className="color-white">Say Hello</h3>                              
                                   </div>
          
                                   <div className="wow fadeInUp contact-info" data-wow-delay="0.8s">
                                        <h3 className="color-white">Contact</h3>
                                        <p><FontAwesomeIcon icon={faPhone} color="white" size="1x" /> +601126643227</p>
                                        <p><FontAwesomeIcon icon={faInbox} color="white" size="1x" /> <a href="mailto:rizwan582@gmail.com">rizwan582@gmail.com</a></p>
                                        <p><FontAwesomeIcon icon={faBlog} color="white" size="1x" /> <a href="http://www.rizviews.com" target="_blank" rel="noreferrer">http://www.rizviews.com</a></p>
                                        <p><FontAwesomeIcon icon={faHouseUser} color="white" size="1x" /> <a href="https://www.rizwan.me">https://www.rizwan.me</a></p>
                                   </div>
          
                              </div>
                         </div>
          
                    </div>
               </div>
          </section>

        )
    }
}

export default Contact;