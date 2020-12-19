import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <section id="about" class="parallax-section">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-12">
                                <div class="about-thumb">
                                    <div class="wow fadeInUp section-title" data-wow-delay="0.4s">
                                        <h1>About Me</h1>
                                        <p class="color-yellow">Test automation specialist, Selenium expert, performance and load testing practitioner</p>
                                    </div>
                                    <div class="wow fadeInUp" data-wow-delay="0.8s">
                                        <p>Experienced software Test and QA specialist more than thirteen years of experience specially excels within team management, test automation and test analysis.</p>
                                        <p>Proven skills in process analysis and Agile/Scrum. Successful in developing test automation frameworks that have resulted significant reduction in total testing time. Skilled in manual testing, microservice testing, GraphQL and REST API testing.</p>
                                    </div>
                                </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                                <div class="background-image about-img"></div>
                        </div>

                        <div class="bg-yellow col-md-3 col-sm-6">
                                <div class="skill-thumb">
                                    <div class="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                                        <h1>My Skills</h1>
                                        <p class="color-white">Selenium Specflow Webdriver.io. Java C#.NET BDD . QA & Testing</p>
                                    </div>

                                    <div class=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                                    <strong>Selenium</strong>
                                        <span class="color-white pull-right">90%</span>
                                            <div class="progress">
                                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                            </div>

                                    <strong>QA & Testing</strong>
                                        <span class="color-white pull-right">90%</span>
                                            <div class="progress">
                                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%"}}></div>
                                            </div>

                                    <strong>Technical Documentation</strong>
                                        <span class="color-white pull-right">80%</span>
                                            <div class="progress">
                                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%"}}></div>
                                            </div>

                                    <strong>Framework Development</strong>
                                        <span class="color-white pull-right">95%</span>
                                            <div class="progress">
                                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%"}}></div>
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

export default Home;