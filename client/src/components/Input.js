import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
    state = {
        github_id: '',
        linkedin_id: '',
        codechef_id: '',
        hackerrank_id: '',
        twitter_id: '',
        medium_id: '',
        showForm: false,
    };

    showForm = () => {
        let { github_id, linkedin_id, codechef_id, hackerrank_id, twitter_id, medium_id } = this.state;
        document.getElementById('landing').style = 'opacity: 0.5';
        document.getElementById('welcome').style = 'opacity: 0.5';
        document.getElementById('devList').style = 'opacity: 0.5';
        document.getElementById('addDevButton').style = 'opacity: 0.5';
        document.getElementById('footer').style = 'opacity: 0.5';
        return (
            <div className='devFormOverlay'> 
            <hr></hr>
            <form id = "add-dev" className='devForm'>
            <div className='formTitle'>Add developer profile</div>
                <div className='devFormContent'>
                    <label>Github*</label>
                    <input
                        type="text"
                        name="github_id"
                        onChange={this.handleChange} value={github_id}
                    />
                    <label>Linkedin</label>
                    <input
                        type="text"
                        name="linkedin_id"
                        onChange={this.handleChange} value={linkedin_id}
                    />
                    <label>Codechef</label>
                    <input
                        type="text"
                        name="codechef_id"
                        onChange={this.handleChange} value={codechef_id}
                    />
                    <label>Hackerrank</label>
                    <input
                        type="text"
                        name="hackerrank_id"
                        onChange={this.handleChange} value={hackerrank_id}
                    />
                    <label>Twitter</label>
                    <input
                        type="text"
                        name="twitter_id"
                        onChange={this.handleChange} value={twitter_id}
                    />
                    <label>Medium</label>
                    <input
                        type="text"
                        name="medium_id"
                        onChange={this.handleChange} value={medium_id}
                    />
                </div>
                    <hr></hr>
                <div className='formFooter'>
                    <button id='cancel-btn' onClick={() => this.hide()}>Cancel</button>
                    <button id='submit-btn' onClick={() => this.addDev()}>Add Dev</button>
                </div>
            </form>
            </div>
        );
    }

    hide = () => {
        document.getElementById("landing").style = 'opacity: 1';
        document.getElementById("welcome").style = 'opacity: 1';
        document.getElementById("devList").style = 'opacity: 1';
        document.getElementById('addDevButton').style = 'opacity: 1';
        document.getElementById('footer').style = 'opacity: 1';
        this.setState({showForm: false});
    };

    addDev = () => {
        const dev = { github_id: this.state.github_id,
            linkedin_id: this.state.linkedin_id,
            codechef_id: this.state.codechef_id,
            hackerrank_id: this.state.hackerrank_id,
            twitter_id: this.state.twitter_id,
            medium_id: this.state.medium_id,
        };

        if (dev.github_id && dev.github_id.length > 0) {
            axios.post('/api/devs', dev)
                .then((res) => {
                    if (res.data) {
                        this.props.getDevs();
                        this.setState({ github_id: '' });
                    }
                })
                .catch((err) => console.log(err));
        } else {
            console.log('input field required');
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        if(this.state.devs === []) {
            document.getElementById('message').innerHTML = 'No developers added';
        }
        return (
            <div className='addDevPanel'>
                <div className='text' id="message">Could not find what you were looking for?</div>
                <button className="addDevButton" id="addDevButton" onClick={() => this.setState({showForm: true, shouldBlur: true})}>Add developer info</button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        );
    }
}

export default Input;