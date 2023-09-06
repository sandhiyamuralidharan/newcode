import React from "react";
class List1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stdList: [{
                roll: 10,
                name: "Sandhiya",
                class: "IX std"
            },
            {
                roll: 20,
                name: "Rohini",
                class: "X std"
            },
            {
                roll: 30,
                name: "Sneha",
                class: "XI std"
            },
            {
                roll: 40,
                name: "Sethu",
                class: "XII std"
            },
            {
                roll: 50,
                name: "Vinoth",
                class: "XII std"
            }]
        }
    }
    deleteUser = (index) => {
        let res = [...this.state.stdList]
        res.splice(index, 1);
        this.setState({
            stdList: res
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <tabel class="table ">
                        <thead className="table-primary">
                            <tr>
                                <th>Roll No</th>
                                <th>Name</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody className="table-warning">
                            {this.state.stdList.map((user, index) =>
                                <tr>
                                    <td>{user.roll}</td>
                                    <td>{user.name}</td>
                                    <td>{user.class}</td>
                                    <br></br>
                                    <button className="btn btn-danger" onClick={() => this.deleteUser(index)}>del</button>
                                </tr>
                            )}
                        </tbody>
                    </tabel>

                </div>
            </div>

        )
    }
}
export default List1;

