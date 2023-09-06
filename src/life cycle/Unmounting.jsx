import { Alert } from "bootstrap";
import React from "react";

class Unmounting extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            show:true
        }
        this.removeHeader=this.removeHeader.bind(this)
}
removeHeader(){
this.setState({
    show:false
})
}
render(){
    if (this.state.show){
        var header=<Header/>
    }
    return(
        <div>
            {header}
            <button onClick={this.removeHeader}>RemoveHeader</button>
        </div>
    )
}
}
class Header extends React.Component{
    render(){
        return(
            <h1>hello iam header</h1>
        )
    }
    componentWillUnmount(){
        Alert ("HEADER WILL REMOVE")
    }
}
export default Unmounting;