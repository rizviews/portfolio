import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <section id="home" class="parallax-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                                <div class="home-img"></div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                                <div class="home-thumb">
                                    <div class="section-title">
                                        <h4 class="wow fadeInUp" data-wow-delay="0.3s">welcome to my portfolio site</h4>
                                        <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Rizwan</strong> currently based in Selangor, Malaysia.</h1>
                                        <p class="wow fadeInUp" data-wow-delay="0.9s">Working as Software Testing and QA specialist for living and play with rhymes (poetry in Bengali) in my leisure. Happily married with Fauzia and proud father of Wania.</p>                                    
                                        <a href="#about" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">About Me</a>                                    
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