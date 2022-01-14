import React, { Component } from 'react';
import devPhoto from '../res/Icons_Illustrations/undraw_dev_productivity_umsq_1.png'

class Landing extends Component {
    render() {
        return (
            <div className = "landing" id = "landing">
                <h1 className = "heading-text">The Developer<br></br>Repository</h1>
                <img src = {devPhoto} className = "landing-photo" alt = "developer coding on a laptop"></img>
            </div>
        );
    }
};

export default Landing;