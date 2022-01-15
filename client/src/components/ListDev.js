import React, { Component } from 'react';

class ListDev extends Component {
    render() {
        let { devs } = this.props;
        return (
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
                <li>No dev(s) left</li>
            )}
            </ul>
        );
    }
};

export default ListDev;