import React, { Component } from 'react';
import { db } from './Firestore';
import { concat } from 'bytebuffer';
import moment from "moment"

class Home extends Component {

  constructor(props){
    super(props);
    // console.log(`ID - ${this.props.match.params.trID}`)
    this.state = {
        trolleyID: this.props.match.params.trID,
        products:[]
    }
  }

  // state = {
  //   info: [
  //     {
  //       name: "Bread",
  //       id: 101000,
  //       Quantity: 1,
  //       price: 100,
  //       exp: "2/3/2020"
  //     },
  //     {
  //       name: "Peanut Butter",
  //       id: 101001,
  //       Quantity: 1,
  //       price: 360,
  //       exp: "4/3/2022"
  //     },
  //     {
  //       name: "Rice",
  //       id: 101002,
  //       Quantity: 2,
  //       price: 400,
  //       exp: "5/10/2021"
  //     },
  //     {
  //       name: "Flour",
  //       id: 101003,
  //       Quantity: 1,
  //       price: 500,
  //       exp: "10/4/2020"
  //     },
  //     {
  //       name: "KitKat",
  //       id: 101004,
  //       Quantity: 4,
  //       price: 80,
  //       exp: "7/1/2021"
  //     },
  //     {
  //       name: "Pesi",
  //       id: 101005,
  //       Quantity: 3,
  //       price: 120,
  //       exp: "10/8/2020"
  //     },
  //     {
  //       name: "Lays",
  //       id: 101006,
  //       Quantity: 3,
  //       price: 40,
  //       exp: "6/3/2022"
  //     },
  //     {
  //       name: "Butter",
  //       id: 101007,
  //       Quantity: 1,
  //       price: 90,
  //       exp: "12/2/2020"
  //     },
  //   ]}

    componentDidMount(){
      let data = []
      db.collection("trolleys").where("id", "==", "TR-110").onSnapshot((snapshot)=>{
        console.log(`data here`)
        
        snapshot.forEach(doc=>{
          // console.log(doc.data())
          data = (doc.data().products)
          
        })
        console.log(data)
        
        // this.setState({products: products})
        // console.log(this.state)
        this.setState({products:data})
      })
    }
   
  render() {
    // let i = 1;
    // const total = this.state.products.reduce((total,item)=>total += item.qty* item.price);
    console.log(this.state.products)
    return (
      <div className="billing">
        <body className="bill">


        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
  <div class="sidebar-brand-icon rotate-n-15">
    <i class="fas fa-laugh-wink"></i>
  </div>
  <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

<hr class="sidebar-divider my-0" />

<li class="nav-item active">
  <a class="nav-link" href="index.html">
    <i class="fas fa-fw fa-tachometer-alt"></i>
    <span>Dashboard</span></a>
</li>

<hr class="sidebar-divider" />

<div class="sidebar-heading">
  Interface
</div>

<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
    <i class="fas fa-fw fa-cog"></i>
    <span>Components</span>
  </a>
  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header">Custom Components:</h6>
      <a class="collapse-item" href="buttons.html">Buttons</a>
      <a class="collapse-item" href="cards.html">Cards</a>
    </div>
  </div>
</li>

<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
    <i class="fas fa-fw fa-wrench"></i>
    <span>Utilities</span>
  </a>
  <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header">Custom Utilities:</h6>
      <a class="collapse-item" href="utilities-color.html">Colors</a>
      <a class="collapse-item" href="utilities-border.html">Borders</a>
      <a class="collapse-item" href="utilities-animation.html">Animations</a>
      <a class="collapse-item" href="utilities-other.html">Other</a>
    </div>
  </div>
</li>

<hr class="sidebar-divider" />

<div class="sidebar-heading">
  Addons
</div>

<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
    <i class="fas fa-fw fa-folder"></i>
    <span>Pages</span>
  </a>
  <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <h6 class="collapse-header">Login Screens:</h6>
      <a class="collapse-item" href="login.html">Login</a>
      <a class="collapse-item" href="register.html">Register</a>
      <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
      <div class="collapse-divider"></div>
      <h6 class="collapse-header">Other Pages:</h6>
      <a class="collapse-item" href="404.html">404 Page</a>
      <a class="collapse-item" href="blank.html">Blank Page</a>
    </div>
  </div>
</li>

<li class="nav-item">
  <a class="nav-link" href="charts.html">
    <i class="fas fa-fw fa-chart-area"></i>
    <span>Charts</span></a>
</li>

<li class="nav-item">
  <a class="nav-link" href="tables.html">
    <i class="fas fa-fw fa-table"></i>
    <span>Tables</span></a>
</li>

<hr class="sidebar-divider d-none d-md-block" />

<div class="text-center d-none d-md-inline">
  <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>


    {/* <table className="content">
      <thead>
        
        <tr className="heading">
          <th>S. No</th>
          <th>Name</th>
          <th>Item ID</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry date</th>
          <th><bold>SUB-TOTAL</bold></th>
        </tr>
      
      </thead>
      <tbody>
       {this.state.products.map((item, id)=>(
         <tr className="info">
           <td>{id+1}</td>
           <td>{item.title}</td>
           <td>{item.itemID}</td>
           <td>{item.qty}</td>
           <td>{item.price}</td>
           <td>{moment.unix(item.expiry.seconds).format("MM/DD/YYYY")}</td>
           <td>{item.qty * item.price}</td>
         </tr>
       ))}
      </tbody>
      
    </table>
    <div className="total">Total: 20000</div> */}
    {this.state.products.map((item, id)=>(
      <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4 image">
      <img src={item.imageURL} class="card-img" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Product Name</h5>
        <p class="card-text">{item.title}</p>
        <p class="card-text price">Price: {item.price}</p>
        <p class="card-text qty">Quantity: {item.qty}</p>
        <p class="card-text sub">Sub-total: {item.price*item.qty}</p>
        
        <p class="card-text"><small class="text-muted">Exp: {item.expiry}</small></p>
      </div>
    </div>
  </div>
</div>
    ))}
    </body>
    </div>
    );
  }
}

export default Home;
