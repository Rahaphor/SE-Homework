import React from "react";
import Displaylist from "./Displaylist";

class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { item: "Apple",  unit: "1lb" , quantity: "3" , isPurchased: true},
        { item: "Tomatoes" , unit: "3lb" , quantity: "5" , isPurchased: true},
        { item: "Pineapple" , unit: "4lb",  quantity: "2", isPurchased: true},
      ],

      item:'',
            unit:'',
            quantity:0,
            isPurchased: true,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }
  handleChange(event){
    let r = event.target.name;
    let value = event.target.value;
    this.setState({[r]:value})

  }

  
  handleSubmit(event){
    
    const newItem = {
     
      item: this.state.item,
      unit: this.state.unit,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    };

    this.setState({

      list: this.state.list.concat([newItem]),
      item:'',
      unit:'',
      quantity:0,
      isPurchased: true,
    },() => console.log(this.state.list));

    event.preventDefault();


  }

  
  render() {
    return (
      <div>
         <h1>Check List</h1>
         <form onSubmit ={this.handleSubmit} >
           <label>
             Item:
             <input type = 'text' name ='item' value ={this.state.item} onChange={this.handleChange} ></input>
           </label>
           <br></br>
           <label>
             Unit:
             <input type = 'text' name = 'unit' value ={this.state.unit} onChange={this.handleChange} ></input>
           </label>
           <br></br>
           <label>
             Quantity:
             <input type = 'text' name = 'quantity' value ={this.state.quantity} onChange={this.handleChange} ></input>
           </label>
           <br></br>
           <label>
             Purchased:
             <input type = 'text' value ={this.state.isPurchased} onChange={this.handleChange} ></input>
           </label>
           <input type="submit" value="Submit" />
         </form>
         
         <Displaylist list= {this.state.list}/>

      </div>
    );
  }
}
export default Grocery;
