import React, { Component } from 'react';
import WelcomeText from './WelcomeText';
import Dev from './Dev';
import devPhoto from '../res/Icons_Illustrations/undraw_dev_productivity_umsq_1.png'

class Landing extends Component {
    render() {
        return (
            <div>
            <div className = "landing" id = "landing">
                <h1 className = "heading-text">The Developer<br></br>Repository</h1>
                <img src = {devPhoto} className = "landing-photo" alt = "developer coding on a laptop"></img>
            </div>
            <WelcomeText />
            <Dev />
            </div>
        );
    }
};

export default Landing;