import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import SearchBar from './SearchBar';

class Dev extends Component {
    state = {
        devs: [],
    };

    componentDidMount() {
        this.getDevs();
    }

    getDevs = (e) => {
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

    deleteDev = (id) => {
        axios
        .delete(`/api/devs/${id}`)
        .then((res) => {
            if (res.data) {
                this.getDevs();
            }
        })
        .catch((err) => console.log(err));
    };

    render() {
        let { devs } = this.state;

        return (
        <div>
            <SearchBar devs={devs} getDevs={this.getDevs}/>
            <Input getDevs={this.getDevs} />
        </div>
        );
    }
}

export default Dev;