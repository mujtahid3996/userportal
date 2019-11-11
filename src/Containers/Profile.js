import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Components/Profilepage.css'
import Changepassword from '../Components/ChangePasword';
import Navigation from '../Components/Navigation';
import Profilepage from '../Components/Profilepage';
var relemnt;
class Profile extends React.Component {
    constructor(){
      super();
      this.state = {
        route:'Userprofile',
      }
    }
    onRouteChange = ( route ) => {
        this.setState({route : route })
      }
    
    render() { 
      if(this.state.route === 'Changepassword')
        {
          relemnt= <Changepassword/>
        } 
      else
      {
        relemnt = <Profilepage/>
      }
    return (
        <div >
            <Navigation onRouteChange={this.onRouteChange} />         
            <div>
              <header className="App-header">
                { relemnt }
              </header>
             </div>   
        </div>
    );
    }
}
export default Profile;