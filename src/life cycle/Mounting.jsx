import React from "react";

class Mounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "world"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return{
    //         text:props.Alt
    //     }
    // }

    render() {
        return (
            <div className="container">
                <h1 className="text-primary"> Welcome {this.state.text}</h1>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ text: "Everyone" })
        }, 3000);
    } 
}
export default Mounting;