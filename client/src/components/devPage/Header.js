import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className='navbar'>
                <p>The Developer Profile</p>
                <p><a href="/">All Developers</a></p>
            </div>
        )
    }
};

export default Header;