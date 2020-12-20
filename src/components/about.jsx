import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <section id="about" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-12">
                                <div className="about-thumb">
                                    <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                                        <h1>About Me</h1>
                                        <p className="color-yellow">Test automation specialist, Selenium expert, performance and load testing practitioner</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0.8s">
                                        <p>Experienced software Test and QA specialist more than thirteen years of experience specially excels within team management, test automation and test analysis.</p>
                                        <p>Proven skills in process analysis and Agile/Scrum. Successful in developing test automation frameworks that have resulted significant reduction in total testing time. Skilled in manual testing, microservice testing, GraphQL and REST API testing.</p>
                                    </div>
                                </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                                <div className="background-image about-img"></div>
                        </div>

                        <div className="bg-yellow col-md-3 col-sm-6">
                                <div className="skill-thumb">
                                    <div className="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                                        <h1>My Skills</h1>
                                        <p className="color-white">Selenium Specflow Webdriver.io. Java C#.NET BDD . QA & Testing</p>
                                    </div>

                                    <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                                    <strong>Selenium</strong>
                                        <span className="color-white pull-right">90%</span>
                                            <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                            </div>

                                    <strong>QA & Testing</strong>
                                        <span className="color-white pull-right">90%</span>
                                            <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%"}}></div>
                                            </div>

                                    <strong>Technical Documentation</strong>
                                        <span className="color-white pull-right">80%</span>
                                            <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%"}}></div>
                                            </div>

                                    <strong>Framework Development</strong>
                                        <span className="color-white pull-right">95%</span>
                                            <div className="progress">
                                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%"}}></div>
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