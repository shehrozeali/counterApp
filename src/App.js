import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Billing from './components/Billing';
import Login from './components/Login';
import './App.css';
import {db} from './components/Firestore';
import {fire} from './components/Firestore';
import AddProducts from './components/AddProducts';
import Header from './components/Header';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    user: {}
  }
}

componentDidMount(){
  this.authListener();
}
  authListener(){
    fire.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({ user });
      }
      else{
        this.setState({user: null});
      }
    })
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     trolleys: [

  //     ]
  //   }
  // }

  // state = {
  //   trolleys: [
  //     // {
  //     //   number: 1,
  //     //   isActivated: false,
  //     //   userID: 100,
  //     //   trID: 152
  //     // },
  //     // {
  //     //   number: 2,
  //     //   isActivated: true,
  //     //   userID: 101,
  //     //   trID: 91
  //     // },
  //     // {
  //     //   number: 3,
  //     //   isActivated: false,
  //     //   userID: 102,
  //     //   trID: 72
  //     // },
      
  //   ]
  // }
    //  componentDidMount(){
    //     db.collection('trolleys').get().then(snapshot => {
    //       const data = snapshot.docs.map(data=>{
    //         console.log(data.data())
    //         return data.data()
    //       })
    //       console.log(data)
    //       this.setState({trolleys: data})
    //       console.log("State", this.state);
    //     })
    //   }
  render() {

    
    return (
      
        
      
      <BrowserRouter>
      {this.state.user ? (<Header/>) : (<Login />)}
      <Route path="/Home" component={Home} />
      <Route path="/billing/:trID" component={Billing} />
      <Route path="/AddProducts" component={AddProducts} />
      </BrowserRouter>
    );
  }

}

export default App;
