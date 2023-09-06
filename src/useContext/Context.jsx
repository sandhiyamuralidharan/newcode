import { userContext } from "../App";
import { useContext } from "react";
function Children() {
    return (
        <div>
            <Child2></Child2>
        </div>
    )
}

function Child2() {
    return (
        <div>
            <Child3></Child3>
        </div>
    )
}

function Child3() {
    const obj = useContext(userContext)
    return (
        <div>
            <h3>{obj.user}</h3>
            {obj.status ? <h3>iam in</h3> : <h3>im out</h3>}
            <button onClick={obj.changeStatus}> change</button>
        </div>
    )
}

export default Children;