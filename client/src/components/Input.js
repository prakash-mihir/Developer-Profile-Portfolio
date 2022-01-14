import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
    state = {
        github_id: '',
        showForm: false,
    };

    showForm = () => {
        document.getElementById('landing').style = 'opacity: 0.5';
        document.getElementById('welcome').style = 'opacity: 0.5';
        document.getElementById('devList').style = 'opacity: 0.5';
        return (
            <div className='devFormOverlay'> 
            <form id = "add-dev" className='devForm'>
                <div className='devFormContent'>
                    <p>Add developer profile</p>
                    <hr></hr>
                    <label>Github*</label>
                    <input
                        type="text"
                        name="github_id"
                    />
                    <label>Linkedin</label>
                    <input
                        type="text"
                        name="linkedin_id"
                    />
                    <label>Codechef</label>
                    <input
                        type="text"
                        name="codechef_id"
                    />
                    <label>Hackerrank</label>
                    <input
                        type="text"
                        name="hackerrank_id"
                    />
                    <label>Twitter</label>
                    <input
                        type="text"
                        name="twitter_id"
                    />
                    <label>Medium</label>
                    <input
                        type="text"
                        name="medium_id"
                    />
                    <button onClick={() => this.hide()}>Cancel</button>
                    <button type="submit">Add Dev</button>
                </div>
            </form>
            </div>
        );
    }

    hide = () => {
        document.getElementById("landing").style = 'opacity: 1';
        document.getElementById("welcome").style = 'opacity: 1';
        document.getElementById("devList").style = 'opacity: 1';
        this.setState({showForm: false});
    };

    addDev = () => {
        const dev = { github_id: this.state.github_id };

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

        this.setState({
            github_id: e.target.value,
        });
    };

    render() {
        let { github_id } = this.state;
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={github_id} />
                <button onClick={() => this.setState({showForm: true, shouldBlur: true})}>Add developer info</button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        );
    }
}

export default Input;