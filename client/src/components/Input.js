import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
    state = {
        github_id: '',
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
                <button onClick={this.addDev}>add dev</button>
            </div>
        );
    }
}

export default Input;