import React, { Component } from 'react';
import { db } from './Firestore';
import { concat } from 'bytebuffer';
import moment from "moment"

class AddProducts extends Component{

    constructor(props){
        super(props);
        // console.log(`ID - ${this.props.match.params.trID}`)
        this.addItems = this.addItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            trolleyID: this.props.match.params.trID,
            products:[],
            title: '',
            price: null,
            barcode: null,
            id: null,
        }
      }

      componentDidMount(){
        let data = [];
    //     db.collection("products").onSnapshot((snapshot)=>{
    //       console.log(`data here`)
    //       snapshot.forEach(doc=>{
    //         // console.log(doc.data())
    //         data = (doc.data())
    //       })
    //       console.log(data)
          
    //       // this.setState({products: products})
    //       // console.log(this.state)
    //       this.setState({products:data})
    //     })
    // }


    // db.collection("products").get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         data= data.concat(doc.data());    
    //     })
    //     this.setState({products:data})
    // console.log("MAIN DATAAA", this.state.products)
    // })

    db.collection("products").onSnapshot(function(querySnapshot) {
        
        querySnapshot.forEach(function(doc) {
            data.push(doc.data());
        });
        console.log("Temp data", data)
        
    });
    this.setState({products: data})
    console.log(this.state.products)
}

      handleChange(e){
         this.setState({ [e.target.name] : e.target.value})
         
      }
      
 
      addItems(){
        var items = {
            title: this.state.title,
            price: this.state.price,
            barcode: this.state.barcode,
            id: this.state.id,
        }
          db.collection("products").doc().set({
              title: items.title,
              barcode: items.barcode,
              price: items.price,
              id: items.id
          }).then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }

render(){
console.log("Main items: ", this.state.products);
    return(
            <div className="bill">
     <table className="content">
      <thead>
        
        <tr className="heading">
          <th>S. No</th>
          <th>Name</th>
          <th>Item ID</th>
          <th>Price</th>
          <th>Barcode number</th>
        </tr>
      
      </thead>
      <tbody>
       {this.state.products.map((item, id)=>(
         <tr className="info">
           <td>{id+1}</td>
           <td>{item.title}</td>
           <td>{item.id}</td>
           <td>{item.price}</td>
           <td>{item.barcode}</td>
         </tr>
       ))}
       
      </tbody>
      
    </table>
    <div class="modalbtn">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add product</button>
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Products</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Product Name: </label>
            <input type="text" name="title" class="form-control" id="product-name" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Barcode No. : </label>
            <input type="text" name="barcode"  class="form-control" id="product-name" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Product ID: </label>
            <input type="text" name="id" class="form-control" id="product-name" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Price: </label>
            <input type="text" name="price" class="form-control" id="product-price" onChange={this.handleChange}/>
          </div>
          
          {/* <div class="form-group">
            <label for="recipient-name" class="col-form-label">Expiry date: </label>
            <input type="date" class="form-control" id="product-exp" />
          </div> */}
          {/* <div class="form-group">
            <label for="recipient-name" class="col-form-label">Product image: </label>
          <input type="file" name="pic" accept="image/*"/>
          </div> */} 
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={this.addItems}>Add product</button>
      </div>
    </div>
  </div>
</div> 
        </div>
    )
}
}

export default AddProducts;