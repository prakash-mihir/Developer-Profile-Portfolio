import React, { Component } from 'react';
import searchIcon from '../res/Icons_Illustrations/search-24px.svg';
import axios from 'axios';
import ListDev from './ListDev';

class SearchBar extends Component {
    state = {
        search: '',
    }
    // function to search devs using the api
    searchDevs = () => {
        axios.get(`/api/devs/search/?github_id=${this.state.search}`)
            .then((res) => {
                if (res.data) {
                    this.setState({ devs: res.data });                    
                    console.log(this.state.devs);
                }
            })
    };

    componentDidMount() {
        this.listDevs();
    }

    listDevs = () => {
        axios
        .get('/api/devs')
        .then((res) => {
            if (res.data) {
                this.setState({
                    devs: res.data,
                    github_id: res.data.github_id
                });
            }
        })
        .catch((err) => console.log(err));
    };


    handleChange = (e) => {

        this.setState({
            search: e.target.value,
        });
    };

    render() {
        let { search } = this.state;
        return (
            <div>
            <div className="searchBarContainer">
                <div className='searchBarInput'>
                    <input
                        type="text"
                        name="github_id"
                        placeholder="Search for username"
                        id="searchBarInput"
                        onChange={this.handleChange} 
                        value={search}
                    />
                </div>
                <div className='searchBarIcon'>
                    <button onClick={() => this.searchDevs()}>
                        <img src={searchIcon} alt="search icon" />
                    </button>
                </div>
            </div>
            <ListDev devs={this.state.devs} />
            <hr></hr>
            </div>
        );
    }
};

export default SearchBar;