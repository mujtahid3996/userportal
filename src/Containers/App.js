import React from 'react';
import '../index.css';
import Login from '../Components/Login';
import Profile from './Profile';
import  Registration  from '../Components/Registration';
import Adminlogin from '../Components/Adminlogin';
import Adminpage from '../Components/Adminpage';
import * as serviceWorker from '../serviceWorker';

var renderelement;
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input:'',
      route:'Login',
      usersignedin: false,
      adminsignedin: false,
      userprofile: {
        firstname:'',
        lastname:'',
        phone:'',
        address:'',
        email:'',
        birthday:'',
      },
      userlist:[] 
    }
    
  }
loadUser = ( user ) =>{
  this.setState({userprofile:{
    firstname: user.firstname,
    lastname: user.lastname,
    phone:user.phone,
    email:user.email,
    address:user.address,
    birthday:user.birthday,
  }
}
)
console.log(this.state.userprofile.birthday)
}
onUserRoute = (route) =>{
  this.setState({route: route , usersignedin: true })
}
onRouteChange = ( route ) => {
  this.setState({route : route })
}
  
render()
{
  if(this.state.route === 'Login')
  {
    if(this.state.usersignedin)
      renderelement = <Profile userprofile = {this.state.userprofile}/>
    else
      renderelement =<Login 
                      onRouteChange = { this.onRouteChange } 
                      onUserRoute = { this.onUserRoute }
                    />
  }
  else if(this.state.route === 'Registration')
  {
    renderelement = <Registration 
                      onRouteChange = { this.onRouteChange }
                      onUserRoute = { this.onUserRoute }
                      onLoadUser ={ this.loadUser } 
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
