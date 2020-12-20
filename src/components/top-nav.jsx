import React from "react";

class TopNavigation extends React.Component {
    render() {
        return (
            <div className="navbar navbar-fixed-top custom-navbar" role="navigation">            
                <div className="container">            
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                        </button>                
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">                    
                                <li><a href="#about" className="smoothScroll">About Me</a></li>
                                <li><a href="#experience" className="smoothScroll">Experiences</a></li>
                                <li><a href="#social" className="smoothScroll">Social</a></li>
                                <li><a href="https://aumikabbo.rizwan.me" target="_blank" rel="noreferrer">Aumikabbo (Poetry)</a></li>
                                <li><a href="#contact" className="smoothScroll">Contact</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            );
        }
    }

export default TopNavigation;