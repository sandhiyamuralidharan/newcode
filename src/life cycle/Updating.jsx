import React from "react";

class Updating extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: "Sandhiya"
        }
        this.changeText = this.changeText.bind(this)
    }
    changeText() {
        this.setState({
            text: " a Student",
        })
    }

    // static getDerivedStateFromProps(props,state){
    //         return{
    //             text:props.New
    //         }
    //     }
shouldComponentUpdate(){
    return true
}
    render() {
        return (
            <div className="container">
                <h2 className="text-success"> Iam {this.state.text}</h2>
                <button className="btn btn-primary" onClick={this.changeText}>change</button>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevPops,prevState){
        document.getElementById("div1").innerHTML=prevState.text
        return null
    }
    componentDidUpdate(){
        console.log(this.state.text);
        document.getElementById("div2").innerHTML=this.state.text
    }
}
export default Updating;