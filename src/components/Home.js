import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';
import {db} from './Firestore';
import Billing from './Billing';
import AddProducts from './AddProducts';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trolleys: [

      ]
    }
  }

  componentDidMount(){
    db.collection('trolleys').get().then(snapshot => {
      const data = snapshot.docs.map(data=>{
        console.log(data.data())
        return data.data()
      })
      console.log(data)
      this.setState({trolleys: data})
      console.log("State", this.state);
    })
  }

  render() {
    console.log(this.state.trolleys);
    return this.state.trolleys.map((trolley, id) => (
        <div className="first">

            <h3>{trolley.id}</h3>
            <p>User ID: {trolley.guestID}</p>
            Click <Link to={"/billing/"+trolley.id}>here</Link> for details
            <hr></hr>
            
        </div>
    ));
  }
}

export default Home;
