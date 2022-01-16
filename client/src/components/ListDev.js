import React, { Component } from 'react';

class ListDev extends Component {
    render() {
        let { devs } = this.props;
        return (
            <div id="devListContainer">
                <ul id="devList">
                    
                {devs && devs.length > 0 ? (
                    devs.map((dev) => {
                        return (
                            <li key={dev._id}>
                                {dev.github_id}
                            </li>
                        );
                    })
                ) : (
                    <p></p>
                )}
                </ul>
            </div>
        );
    }
};

export default ListDev;