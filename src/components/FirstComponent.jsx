import React from "react";

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sandhiya",
    };
  }
  render() {
    return (
      <div>
        <h1>hello, I am {this.state.name}</h1>
      </div>
    );
  }
}
export class ThirdComponent extends React.Component{
render(){
  return(
    <div> 
      <h3>hello iam third component</h3>
    </div>
  )
}
}

export default FirstComponent;
