import React from 'react';

class Expertise extends React.Component {
    render () {
        return (
            <section id="service" class="parallax-section">
                <div class="container">
                    <div class="row">

                        <div class="bg-yellow col-md-3 col-sm-6">
                                <div class="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                                    <i class="fa fa-desktop"></i>
                                        <h3>Test Automation</h3>
                                        <p class="color-white"></p>
                                </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                                <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                                    <i class="fa fa-paper-plane"></i>
                                        <h3>Test Design</h3>
                                        <p class="color-white"></p>
                                </div>
                        </div>

                        <div class="bg-dark col-md-3 col-sm-6">
                                <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                                    <i class="fa fa-table"></i>
                                        <h3>QA Process</h3>
                                        <p class="color-white"></p>
                                </div>
                        </div>

                        <div class="bg-white col-md-3 col-sm-6">
                                <div class="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                                    <i class="fa fa-laptop-code" style={{fontSize:"42px"}}></i>
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