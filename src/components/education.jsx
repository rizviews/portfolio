import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

class Education extends React.Component {
    render () {
        return (
            <section id="education" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6">
                                <div className="color-white education-thumb">
                                    <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                        <h1>Education/Training</h1>                              
                                    </div>

                                    <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div className="media-object media-left">
                                            <FontAwesomeIcon icon={faLaptop} color="white" size="2x" /> 
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">Bachelor in Science <small>2002 - 2006</small></h3>
                                            <p className="color-white">Computer Science</p>
                                            <p className="color-white">American International University - Bangladesh (AIUB)</p>
                                        </div>                              
                                    </div>

                                    <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div className="media-object media-left">
                                            <FontAwesomeIcon icon={faLaptop} color="white" size="2x" /> 
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">Microsoft Certified Developer (MCPD)</h3>
                                            
                                        </div>                            
                                    </div>
                                    <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div className="media-object media-left">
                                            <FontAwesomeIcon icon={faLaptop} color="white" size="2x" /> 
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">ISTQB (Foundation)</h3>
                                            
                                        </div>                            
                                    </div>

                                </div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                                <div className="background-image education-img"></div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Education;