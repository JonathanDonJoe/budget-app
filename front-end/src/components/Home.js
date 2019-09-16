import React, { Component } from 'react';
import Axios from 'axios';


class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         budget: 0,
    //         spent: 0
    //     }
    // }
    state = {
        submitName: false
    }

    componentDidMount() {



    }

    getUser = async () => {
        const getUserUrl = `${window.apiUrl}/get-users`
        const userInfo = await Axios.post(getUserUrl, {name:this.props.name});
        console.log(userInfo);
        this.props.setUserInfo(userInfo.data.msg)
        console.log(userInfo.data.msg)
    }

    submitNameHandler = (e) => {
        e.preventDefault();
        this.setState({
            submitName: true
        }, this.getUser)
    }
    
    render() { 

        if(!this.state.submitName) {
            const form = 
                <div className='col col-sm-12'>
                    <form onSubmit={this.submitNameHandler}>
                        <div className='form-group'>
                            <label htmlFor='name'>What is your name?</label>
                            <input type='text' value={this.props.name} onChange={this.props.changeName} className='form-control' id='name' />
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            return(form)
        }
        console.log(this.props.userInfo)

        if (!this.props.userInfo.length) {
            return (
                <h1>hi</h1>
            )
        }

        
        return (
            <div className='col col-sm-12'>
                <div className='total-budget'>Total Budget: {this.props.userInfo[0].budget}</div>
                <div className='total-spent'>Total Spent: $1000</div>
            </div>
        )
    }
}

export default Home;