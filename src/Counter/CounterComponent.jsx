import React from "react"

class CounterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.setState({
            count: this.state.count + this.props.inc
        })
     this.props.incAll(this.props.incAll)
    }
    decrement() {
        this.setState({
            count: this.state.count - this.props.inc
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button style={{border:"none",color:"green" ,marginTop:"5px"}} onClick={this.increment}>increment</button>
                <button style={{border:"none",color:"red"}}onClick={this.decrement}>decrement</button></div>
        )
    }

}
export default CounterComponent