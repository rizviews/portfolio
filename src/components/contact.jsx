import React from 'react';

class Contact extends React.Component {
    render () {
        const socialIconStyle = {
            paddingRight: "10px"
          };
        return (
          <section id="contact" class="parallax-section">
               <div class="container">
                    <div class="row">
          
                         <div class="col-md-6 col-sm-6">
                              <div class="background-image contact-img"></div>
                         </div>
          
                         <div class="bg-dark col-md-3 col-sm-6">
                              <div class="contact-thumb">
                                   <div class="wow fadeInUp contact-info" data-wow-delay="0.6s">
                                        <h3 class="color-white">Say Hello</h3>                              
                                   </div>
          
                                   <div class="wow fadeInUp contact-info" data-wow-delay="0.8s">
                                        <h3 class="color-white">Contact</h3>
                                        <p><i class="fa fa-phone"></i> +601126643227</p>
                                        <p><i class="fas fa-inbox" style={{socialIconStyle}}></i> <a href="mailto:rizwan582@gmail.com">rizwan582@gmail.com</a></p>
                                        <p><i class="fas fa-blog" style={{socialIconStyle}}></i> <a href="http://www.rizviews.com" target="_blank" rel="noreferrer">http://www.rizviews.com</a></p>
                                        <p><i class="fas fa-house-user" style={{socialIconStyle}}></i> <a href="https://www.rizwan.me">https://www.rizwan.me</a></p>
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