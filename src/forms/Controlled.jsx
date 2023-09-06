import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Controlled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "ghjk",
            password: ""
        };
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    usernameOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    passwordOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit(event) {
        event.preventDefault();
        console.log(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <input style={{
                            backgroundColor: "beige",
                            textAlign: "center",
                            cursor: "pointer",

                        }}
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.usernameOnChange}
                        />

                        <input style={{
                            backgroundColor: "beige",
                            textAlign: "center",
                            cursor: "pointer",

                        }}
                            className="form-control"
                            type="password "
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.passwordOnChange}
                        />

                        <button style={{
                            cursor: "pointer"
                        }}
                            className="btn btn-primary "
                            type="submit"
                            onClick={this.submit}
                        >
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Controlled;
