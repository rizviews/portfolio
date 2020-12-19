import React from 'react';

class Social extends React.Component {
    render () {
        const socialIconStyle = {
            fontSize: "42px",
            marginTop: "32px",
            marginBottom: "22px"
          };
        return (
            <section id="social" class="parallax-section">
     <div class="overlay"></div>
     <div class="container">
          <div class="row">
               <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                    <h1>Socially Me</h1>                              
               </div>
               <div class="bg-yellow col-md-3 col-sm-6">
                    <div class="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">                         
                         <a class="color-white" href="https://www.facebook.com/rizviews/" target="_blank" rel="noreferrer">
                              <i class="fab fa-facebook-square" style={{socialIconStyle}}></i>                                                                         
                              <p class="color-white"></p>
                         </a>
                    </div>
               </div>

               <div class="bg-dark col-md-3 col-sm-6">
                    <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                         <a class="color-white" href="https://github.com/rizviews" target="_blank" rel="noreferrer">     
                              <i class="fab fa-github-square" style={{socialIconStyle}}></i>                                                       
                              <p class="color-white"></p>
                         </a>
                    </div>
               </div>

               <div class="bg-yellow col-md-3 col-sm-6">
                    <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                         <a class="color-white" href="https://twitter.com/rizviews" target="_blank" rel="noreferrer">                            
                         <i class="fab fa-twitter-square" style={{socialIconStyle}}></i>                           
                              <p class="color-white"></p>
                         </a>     
                    </div>
               </div>

               <div class="bg-dark col-md-3 col-sm-6">
                    <div class="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                         <a class="color-white" href="https://www.linkedin.com/in/rizregion/" target="_blank" rel="noreferrer">
                         <i class="fab fa-linkedin" style={{socialIconStyle}}></i>                         
                              <p class="color-white"></p>
                         </a>
                    </div>
               </div>


          </div>
     </div>
</section>

        )
    }
}

export default Social;