import React from 'react';

class Experiences extends React.Component {
    render () {
        return (
            <section id="experience" class="parallax-section">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-6">
                                <div class="background-image experience-img"></div>                    
                        </div>

                        <div class="col-md-6 col-sm-6">
                                <div class="color-white experience-thumb">
                                    <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                                        <h1>My Experiences</h1>
                                        <p class="color-white">                                   
                                            Previous companies and my tasks (Resume: <a class="color-white" href="./files/M Rizwanur Rashid - Resume.pdf">
                                                <i class="fas fa-file-pdf" aria-hidden="true"></i></a>&nbsp;&nbsp;<a class="color-white" href="./files/M Rizwanur Rashid - Resume.docx">
                                                    <i class="fas fa-file-word" aria-hidden="true"></i></a>)</p>
                                        <p>
                                            <a href="https://www.linkedin.com/in/rizregion/" target="_blank" rel="noreferrer">
                                                <img src="./images/linkedin-profile-button.png" width="50%" height="50%" alt="" />
                                            </a>
                                        </p>
                                    </div>

                                    <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                                        <div class="media-object media-left">
                                            <i class="fa fa-laptop"></i>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">QA Lead <small>2018 Nov - Continuing</small></h3>
                                            <p class="color-white">Process development, technical leading and automation.</p>
                                        </div>
                                    </div>

                                    <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                        <div class="media-object media-left">
                                            <i class="fa fa-laptop"></i>
                                        </div>
                                        <div class="media-body">
                                            <h3 class="media-heading">Sr. Test Analyst <small>2017 Mar - 2018 Nov</small></h3>
                                            <p class="color-white">Behaviour Driven Development (BDD), Test Automation, API Testing</p>
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