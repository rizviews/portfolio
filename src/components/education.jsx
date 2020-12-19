import React from 'react';

class Education extends React.Component {
    render () {
        return (
            <section id="education" class="parallax-section">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-6">
                                <div class="color-white education-thumb">
                                    <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                                        <h1>Education/Training</h1>                              
                                    </div>

                                    <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div class="media-object media-left">
                                            <i class="fa fa-laptop"></i>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">Bachelor in Science <small>2002 - 2006</small></h3>
                                            <p class="color-white">Computer Science</p>
                                            <p class="color-white">American International University - Bangladesh (AIUB)</p>
                                        </div>                              
                                    </div>

                                    <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div class="media-object media-left">
                                            <i class="fa fa-laptop"></i>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">Microsoft Certified Developer (MCPD)</h3>
                                            
                                        </div>                            
                                    </div>
                                    <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div class="media-object media-left">
                                            <i class="fa fa-laptop"></i>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">ISTQB (Foundation)</h3>
                                            
                                        </div>                            
                                    </div>

                                </div>
                        </div>

                        <div class="col-md-6 col-sm-6">
                                <div class="background-image education-img"></div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Education;