import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import NavBar from './components/NavBar'
import Expenses from './components/Expenses'
import Income from './components/Income'

class App extends Component {
  state = {
    name: '',
    userInfo:{}
  }
  

  changeName = (e) => {
    this.setState({
      name:e.target.value
    })
  }

  setUserInfo = (userInfo) => {
    this.setState(
      userInfo
    )
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='row'>
            <Route path='/' render={NavBar} />
            <Route exact path='/' render={ () => 
              <Home 
                changeName={this.changeName} 
                name={this.state.name} 
                setUserInfo= {this.setUserInfo}
              />
            } />
            <Route exact path='/setup' component={Setup} />
            <Route exact path='/add-expense' render={ () => 
              <Expenses userInfo={this.state.userInfo} />
            } />
            <Route exact path='/add-income' render={ () => 
              <Income userInfo={this.state.userInfo} />
            } />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
