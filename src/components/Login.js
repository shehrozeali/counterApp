import React, {Component} from 'react';
import { fire } from './Firestore';
 class Login extends Component {


    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            username: ''
        }
    }

    login(e){

    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {}).catch((error)=>{document.getElementById("err").innerHTML = "Email or password not correct";});
    }

     handleChange(e) {
         this.setState({ [e.target.name]: e.target.value });
     }


     render(){
         return (
            <div class="login-comp">
                <p>LOG IN TO SUPERMART BILLING SYSTEM</p>
               <form>
               
                   <div class="form-group">
                       <label>Email address</label>
                       <input type="email" name="email" class="form-control" id="exampleInputEmail" onChange={this.handleChange} placeholder="Enter email address"></input>
                   </div>
                   <div class="form-group">
                       <label>Password</label>
                       <input type="password" name="password" class="form-control" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Password"></input>
                   </div>
                   
                   <button type="submit" class="btn btn-primary" onClick={this.login}>Login</button>
                   <p id="err"></p>
                   
                   </form> 
            </div>
//                     <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
                
         )
     }
 }
 export default Login;