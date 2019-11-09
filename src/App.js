import React from 'react';
import './index.css';
import './App.css'
import Login from './Components/Login';
import Profile from './Components/Profile';
import ChangePassword from './Components/ChangePasword';
import  Registration  from './Components/Registration';
import * as serviceWorker from './serviceWorker';
import Adminlogin from './Components/Adminlogin';
import Adminpage from './Components/Adminpage';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password: ''
    }
    
  }
  onemailChange = ( event ) => {
    this.setState( { email: event.target.value } );
    console.log(event.target.value);
  }
  onpasswordChange = ( event ) => {
    this.setState( { password: event.target.value } );
    console.log(event);
  }
render()
{
  return (
    <div className="App">
      <header className="App-header">
        <h1> 
        <Login onemailchange = { this.onemailChange }  onpasswordchange = { this.onpasswordChange } />
        </h1>   
      </header>
    </div>
  );
}
}

export default App;
