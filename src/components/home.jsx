import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <section id="home" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                                <div className="home-img"></div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                                <div className="home-thumb">
                                    <div className="section-title">
                                        <h4 className="wow fadeInUp" data-wow-delay="0.3s">welcome to my portfolio site</h4>
                                        <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Rizwan</strong> currently based in Selangor, Malaysia.</h1>
                                        <p className="wow fadeInUp" data-wow-delay="0.9s">Working as Software Testing and QA specialist for living and play with rhymes (poetry in Bengali) in my leisure. Happily married with Fauzia and proud father of Wania.</p>                                    
                                        <a href="#about" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">About Me</a>                                    
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