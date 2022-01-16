import React, { Component } from 'react';
import Arrow from '../res/Icons_Illustrations/north_east-24px.svg';

class ListDev extends Component {
    render() {
        let { devs } = this.props;
        return (
            <div id="devListContainer">
                <ul id="devList">
                    
                {devs && devs.length > 0 ? (
                    devs.map((dev) => {
                        var github_id = dev.github_id;
                        return (
                            <li key={dev._id}>
                                <a href={`/dev/${github_id}`} target="_blank" rel="noreferrer">
                                {dev.github_id}
                                <img src={Arrow} alt="open dev"></img>
                                </a>
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