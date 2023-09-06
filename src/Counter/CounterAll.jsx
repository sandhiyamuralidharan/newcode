import React from "react"
import CounterComponent from "./CounterComponent"
class CounterAll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counterAll: 0
        }
        this.incrementAll=this.incrementAll.bind(this)
    }
    incrementAll(value) {
        this.setState({
        CounterAll:this.state.counterAll+value
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.counterAll}</h1>
                <CounterComponent inc={1} incAll={this.incrementAll}/>
                <CounterComponent inc={5} incAll={this.incrementAll}/>
                <CounterComponent inc={10} incAll={this.incrementAll}/>
          </div>
        )
    }
}
export default CounterAll
