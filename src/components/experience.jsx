import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilePdf, faFileWord} from '@fortawesome/free-regular-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

class Experiences extends React.Component {
    render () {
        return (
            <section id="experience" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6">
                                <div className="background-image experience-img"></div>                    
                        </div>

                        <div className="col-md-6 col-sm-6">
                                <div className="color-white experience-thumb">
                                    <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                        <h1>My Experiences</h1>
                                        <p className="color-white">                                   
                                            Previous companies and my tasks (Resume: <a className="color-white" href="./files/M Rizwanur Rashid - Resume.pdf">
                                                    <FontAwesomeIcon icon={faFilePdf} color="white" size="1x" /> 
                                                </a>&nbsp;&nbsp;<a className="color-white" href="./files/M Rizwanur Rashid - Resume.docx">
                                                    <FontAwesomeIcon icon={faFileWord} color="white" size="1x" /> </a>)</p>
                                        <p>
                                            <a href="https://www.linkedin.com/in/rizregion/" target="_blank" rel="noreferrer">
                                                <img src="./images/linkedin-profile-button.png" width="50%" height="50%" alt="" />
                                            </a>
                                        </p>
                                    </div>

                                    <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                                        <div className="media-object media-left">
                                            <FontAwesomeIcon icon={faLaptop} color="white" size="2x" /> 
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">QA Lead <small>2018 Nov - Continuing</small></h3>
                                            <p className="color-white">Process development, technical leading and automation.</p>
                                        </div>
                                    </div>

                                    <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div className="media-object media-left">
                                            <FontAwesomeIcon icon={faLaptop} color="white" size="2x" /> 
                                        </div>
                                        <div className="media-body">
                                            <h3 className="media-heading">Sr. Test Analyst <small>2017 Mar - 2018 Nov</small></h3>
                                            <p className="color-white">Behaviour Driven Development (BDD), Test Automation, API Testing</p>
                                        </div>
                                    </div>                                                  

                                </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Experiences;