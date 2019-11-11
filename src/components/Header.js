import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';
import { firebase } from './Firestore';

import Home from './Home';
import AddProducts from './AddProducts';

class Header extends Component{
render(){

    this.signOut = () => {
        firebase.auth().signOut();
    }

    return(
        <div>
            <button onClick={() => this.signOut()} class="btn btn-danger">LogOut</button>
<nav class="nav nav-tabs nav-justified">
<a class="nav-item nav-link active"><Link to={"/Home"}>Trolleys</Link></a>
<a class="nav-item nav-link"><Link to={"/AddProducts"}>Products</Link></a>

</nav>
        </div>
    )
}
}

export default Header;



