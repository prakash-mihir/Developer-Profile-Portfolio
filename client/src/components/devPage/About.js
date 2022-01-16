import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    componentDidMount() {
        this.getDev();
    }

    getDev = (e) => {
        const github_id = window.location.pathname.slice(5);
        axios
        .get(`/api/devs/search/${github_id}`)
        .then((res) => {
            if (res.data) {
                this.setState({
                    dev: res.data,
                    github_id: res.data.github_id
                });
                console.log(this.state.dev);
            }
        })
        .catch((err) => console.log(err));
    };


    
    render() {
        let { dev } = this.state;
        if(!dev) {
            console.log('no dev');
            this.getDev();
        }
        return(
            <div>
                <div className='name'>PLACEHOLDER</div>
            </div>
        )
    }
};

export default About;