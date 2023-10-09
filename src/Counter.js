import React from "react";

class Counter extends React.Component{
  //cons will be called every time a new instance is created
  //to add state we need to call constructor
  constructor(props){
    super(props);
    //creating state variable
    this.state = { count : 2}
    this.handleDec = this.handleDec.bind(this); // will give access to the current component instance by binding 'this' to the method
  }
  handleDec(){
    this.setState(curState => {
      return { count: curState.count - 1 };
    })
  }
  render() {
    const date = new Date('10 oct 2023')
    date.setDate((date.getDate() + this.state.count))
    return(
      <div>
        <button onClick={this.handleDec}> - </button>
        <span>{date.toDateString()}{this.state.count}</span>
        <button > + </button>
      </div>
    )
  }
}

export default Counter