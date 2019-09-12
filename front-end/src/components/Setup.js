import React, { Component } from 'react';
import axios from 'axios';

class Setup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            budget: 0
        }
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changeBudget = (e) => {
        this.setState({
            budget: e.target.value
        })
    }
 
    submitSetup = async (e) => {
        e.preventDefault();
        console.log('Budget:', this.state.budget, '\nName:', this.state.name)
        const setupUrl = `${window.apiUrl}/setup`
        const setupResponse = await axios({
            method: 'POST',
            data: {
                name: this.state.name,
                budget: this.state.budget
            },
            url: setupUrl
        })
        if (setupResponse.data.msg === 'added') {
            this.props.history.push('/');
        } else {
            // this.props.history.push('/error');
        }
        console.log(setupResponse);
    }

    render() { 
        return ( 
            <div className='col col-sm-12'>
                <form onSubmit={this.submitSetup}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' value={this.state.name} onChange={this.changeName} className='form-control' id='name' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='total-budget'>What is your budget?</label>
                        <input type='number' value={this.state.budget} onChange={this.changeBudget} className='form-control' id='total-budget' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Setup;