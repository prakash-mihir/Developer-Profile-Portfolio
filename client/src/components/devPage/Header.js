import React, { Component } from 'react';
import About from './About';

class Header extends Component {
    render() {
        return(
            <div>
                <div className='navbar'>
                    <p>The Developer Profile</p>
                    <p><a href="/">All Developers</a></p>
                </div>
                <About/>
            </div>
        )
    }
};

export default Header;