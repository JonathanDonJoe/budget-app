import React, { Component } from 'react';
import Axios from 'axios';


class Home extends Component {
    

    async componentDidMount() {
        const getUserUrl = `${window.apiUrl}/get-users`
        const userInfo = await Axios.get(getUserUrl);
        console.log(userInfo);
    }
    
    render() { 
        return(
            <div className='col col-sm-12'>
                <div className='total-budget'>Total Budget: $2000</div>
                <div className='total-spent'>Total Spent: $1000</div>
            </div>
        )
    }
}

export default Home;