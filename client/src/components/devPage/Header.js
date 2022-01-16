import React, { Component } from 'react';
import About from './About';
import Repo from './Repo';

class Header extends Component {
    render() {
        return(
            <div>
                <div className='navbar'>
                    <p>The Developer Profile</p>
                    <p><a href="/">All Developers</a></p>
                </div>
                <About/>
                <Repo/>
            </div>
        )
    }
};

export default Header;