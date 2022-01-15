import React from 'react';
import searchIcon from '../res/Icons_Illustrations/search-24px.svg';

const SearchBar = ({ devs }) => {
    return (
        <div className="searchBarContainer">
            <div className='searchBarInput'>
                <input
                    type="text"
                    name="github_id"
                    placeholder="Search for username"
                />
            </div>
            <div className='searchBarIcon'>
                <img src={searchIcon} alt="search icon" />
            </div>
        </div>
    );
};

export default SearchBar;