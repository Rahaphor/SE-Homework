import React, { Component } from 'react'

class Displaylist extends Component{

    handleClick=(index,event)=>{
        console.log(this.props.list[index].isPurchased = !this.props.list[index].isPurchased)
    }

    
    render(){
        return(

        <div>
            <h3>Adding To Shopping Cart</h3>
            <ul>
                {this.props.list.map((grocery, index)=> grocery.isPurchased ? <li key={index}>Added to List: {grocery.item}, {grocery.quantity}, {grocery.unit} <button className='removeButton' onClick={(event)=> this.handleClick(index, event)} > Later </button> </li>:null)}
            </ul>
        </div>)
    }
}
export default Displaylist;



// {/* <div className="addedList">   
//             <ul className="grocery-list">
//             {this.props.list.map((grocery, index) => grocery.isPurchased ? 
//             <li key={index}>Added to the list:  {grocery.item} , {grocery.quantity} {grocery.units}
//             <button className="removeButton" onClick= { (event) => this.handleClick(index, event)}> SAVE FOR LATER</button> 
//             {/* {grocery.isPurchased ? "purchased" : "added"} */} </li>: null)}
//         </ul>
//         </div>) */}