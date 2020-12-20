import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLayerGroup, faTable, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

class Expertise extends React.Component {
    render () {
        return (
            <section id="service" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="bg-yellow col-md-3 col-sm-6">
                                <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                                    <FontAwesomeIcon icon={faDesktop} color="white" size="3x" />
                                        <h3>Test Automation</h3>
                                        <p className="color-white"></p>
                                </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                                <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                                    <FontAwesomeIcon icon={faLayerGroup} color="white" size="3x" />
                                        <h3>Test Design</h3>
                                        <p className="color-white"></p>
                                </div>
                        </div>

                        <div className="bg-dark col-md-3 col-sm-6">
                                <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                                    <FontAwesomeIcon icon={faTable} color="white" size="3x" />
                                        <h3>QA Process</h3>
                                        <p className="color-white"></p>
                                </div>
                        </div>

                        <div className="bg-white col-md-3 col-sm-6">
                                <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                                    <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                                        <h3>Coding</h3>
                                        <p></p>
                                </div>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}

export default Expertise;