import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router,   NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 
import AppApi from './AppApi';
import Users from './users/Users';
import AppInput from './Components/AppInput';

const User = (params) => {
  return (  <h1> WELCOME DAILY-TECH USER {params.username}   </h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn  
    }))
  }
  render() {
    let style1 = { 
         color:'white',
      backgroundColor: 'rgba(210, 47, 155, 0.2)',
    padding:'2rem',
    textDecoration:'none',
    listStyleType:'none'
    }; 
  let a = {
    color:'yellow',
    textDecoration:'none',
    listStyleType:'none', 
    margin:'.5rem', 
  }
  let menu = {
    display:'inline-block',
    float:'left', 
    padding:'+.5rem',
    margin:'.5rem', 


  }
    let style2 = { 
      backgroundColor: 'steelblue',
    padding:'2rem',
    textDecoration:'none',
    listStyleType:'none',
    maxHeight:'600px',
    overflowY:'scroll'
    };
    return (
      <div>
      <div  style={style2} >


    <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>

      <Router>
        <div  style={style1} className="App">
        <ul style={a}>
          <li style={menu}>
            <NavLink to="/"  style={a} exact activeStyle={
              { color:'white' }
            }>HOME</NavLink>
          </li>
          <li style={menu}>
            <NavLink to="/about"  style={a} exact activeStyle={
              { color:'white' }
            }>ABOUT DAILY TECH</NavLink>
          </li>
          <li style={menu}>
            <NavLink to="/user/Member"  style={a} exact activeStyle={
              { color:'white' }
            }>MEMBER ACCESS</NavLink>
          </li>
          <li style={menu}>
            <NavLink to="/user/Guest" style={a} exact activeStyle={
              { color:'white' }
            }>GUEST ACCESS</NavLink>
          </li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'To Access, Please Log in as Guest or Member' : true
             }}
          />

    <div  style={{float:'left'}} >
        <Route path="/" exact strict render={
          () => {
            return ( 
            <div  style={style1} >
            <h1>OUR DAILY TECH</h1>
            <h4>MUSING BLOCKCHAIN</h4>
            <h4>WEB DEV AFFAIRS</h4>
            <h4>SOCIOLOGY TOMORROW</h4>
            </div>
            );
          }
        }/>
        </div>
        <Route path="/about" exact strict render={
          () => {
            return ( <h1>ABOUT<br /> DAILY TECH</h1>);
          }
        }/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router> 
      </div>
      <AppInput />
      <Users />
      <AppApi />
      </div>
    );
  }
}

export default App;
