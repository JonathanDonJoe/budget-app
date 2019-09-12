import React, { Component } from 'react';

class Setup extends Component {
    render() { 
        return ( 
            <div className='col col-sm-12'>
                <form onSubmit={this.submitSetup}>
                    <div className='form-group'>
                        <label for='name'>Name</label>
                        <input type='text' className='form-control' id='name' />
                    </div>

                    <div className='form-group'>
                        <label for='total-budget'>What is your budget?</label>
                        <input type='text' className='form-control' id='total-budget' />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Setup;