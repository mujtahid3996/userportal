import React from 'react';
import '../index.css';
import Login from '../Components/Login';
import Profile from './Profile';
import  Registration  from '../Components/Registration';
import Adminlogin from '../Components/Adminlogin';
import Adminpage from '../Components/Adminpage';
import * as serviceWorker from '../serviceWorker';
var userprofile =  {
  id:'',
  name:'',
  phone:'',
  address:'',
  email:'',
  birthday:'',
  password:''
}
var renderelement;
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input:'',
      route:'Login',
      usersignedin: false,
      adminsignedin: false,
      user : userprofile,
      userlist:[ userprofile ]
    }
    
  }
onInputChange = (event) => {
 return event.target.value; 
}
onRouteChange = ( route ) => {
  this.setState({route : route })
}
  
render()
{
  if(this.state.route === 'Login')
  {
    if(this.state.usersignedin)
      renderelement = <Profile />
    else
      renderelement =<Login 
                      onRouteChange = { this.onRouteChange }  
                    />
  }
  else if(this.state.route === 'Registration')
  {
    renderelement = <Registration 
                      onRouteChange = { this.onRouteChange } 
                    />
  }
  else  {
    if(this.state.adminsignedin )
    {
      renderelement = <Adminpage />
    }
    else
    {
      renderelement =<Adminlogin 
                        onRouteChange = { this.onRouteChange }
                    />
    }
  }
  
  return (
    <div >
      <header>
      { renderelement } 
      </header>
    </div>
  );
}
}

export default App;
