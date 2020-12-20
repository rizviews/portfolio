import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Social extends React.Component {
    render () {
        const socialIconStyle = {
            paddingTop: "15px",
            paddingBottom: "15px"            
          };
        return (
            <section id="social" className="parallax-section">
     <div className="overlay"></div>
     <div className="container">
          <div className="row">
               <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                    <h1>Socially Me</h1>                              
               </div>
               <div className="bg-yellow col-md-3 col-sm-6">
                    <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">                         
                         <a className="color-white" href="https://www.facebook.com/rizviews/" target="_blank" rel="noreferrer">                              
                              <p style={{socialIconStyle}}>
                                   <FontAwesomeIcon icon={['fab','facebook']} color="white" size="3x" /> 
                              </p>
                         </a>
                    </div>
               </div>

               <div className="bg-dark col-md-3 col-sm-6">
                    <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                         <a className="color-white" href="https://github.com/rizviews" target="_blank" rel="noreferrer">     
                              <p style={{socialIconStyle}}>
                                   <FontAwesomeIcon icon={['fab','github']} color="white" size="3x" />  
                              </p>                             
                         </a>
                    </div>
               </div>

               <div className="bg-yellow col-md-3 col-sm-6">
                    <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                         <a className="color-white" href="https://twitter.com/rizviews" target="_blank" rel="noreferrer">                            
                              <p style={{socialIconStyle}}>
                                   <FontAwesomeIcon icon={['fab','twitter']} color="white" size="3x" />
                              </p>
                         </a>     
                    </div>
               </div>

               <div className="bg-dark col-md-3 col-sm-6">
                    <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                         <a className="color-white" href="https://www.linkedin.com/in/rizregion/" target="_blank" rel="noreferrer">
                              <p style={{socialIconStyle}}>
                                   <FontAwesomeIcon icon={['fab','linkedin']} color="white" size="3x" />                         
                              </p>
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