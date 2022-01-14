import React from 'react';

const ListDev = ({ devs, deleteDev }) => {
    return (
        <ul id="devList">
        {devs && devs.length > 0 ? (
            devs.map((dev) => {
            return (
                <li key={dev._id} onClick={() => deleteDev(dev._id)}>
                    {dev.github_id}
                </li>
            );
            })
        ) : (
            <li>No dev(s) left</li>
        )}
        </ul>
    );
};

export default ListDev;