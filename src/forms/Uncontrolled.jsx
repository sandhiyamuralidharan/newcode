import React from "react";

class Uncontrolled extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.username = React.createRef();
        this.password = React.createRef();
    }

    submit(event) {
        event.preventDefault();
        console.log(this.username.current.value);
        console.log(this.password.current.value);
    }

    render() {
        return (
            <div>
                <input style={{
                    borderWidth: "10px", textAlign: "center", position: "absolute",
                    right: "45%", borderRadius: "5px", cursor: "pointer", backgroundColor: "beige"
                }}

                    type="text" placeholder="username" name="UserName" ref={this.username} />

                <input style={{
                    borderWidth: "10px", textAlign: "center", position: "absolute",
                    right: "45%", top: "20%", backgroundColor: "beige", borderRadius: "5px", cursor: "pointer"
                }}

                    type="password" placeholder="password" name="Password" ref={this.password} />

                <button style={{ position: "absolute", right: "50%", top: "28%", cursor: "pointer", backgroundColor: "beige" }}
                    type="submit" onClick={this.submit}>Login</button>
            </div>
        );
    }
}

export default Uncontrolled;
