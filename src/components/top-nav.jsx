import React from "react";

class TopNavigation extends React.Component {
    render() {
        return (
            <div class="navbar navbar-fixed-top custom-navbar" role="navigation">            
                <div class="container">            
                    <div class="navbar-header">
                        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon icon-bar"></span>
                                <span class="icon icon-bar"></span>
                                <span class="icon icon-bar"></span>
                        </button>                
                    </div>

                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">                    
                                <li><a href="#about" class="smoothScroll">About Me</a></li>
                                <li><a href="#experience" class="smoothScroll">Experiences</a></li>
                                <li><a href="#social" class="smoothScroll">Social</a></li>
                                <li><a href="https://aumikabbo.rizwan.me" target="_blank" rel="noreferrer">Aumikabbo (Poetry)</a></li>
                                <li><a href="#contact" class="smoothScroll">Contact</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            );
        }
    }

export default TopNavigation;