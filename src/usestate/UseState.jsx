import { Fragment, useState } from "react"
function UseState(){
    //  const[count,setCount]=useState(0)
    // const[color,setColor]=useState("red")
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
        return(
        
          <Fragment>
            <form>
                <h1>{name}</h1>
            <h1>{password}</h1>
            <div  class="row-sm">
            <div class="col">
      <label style={{color:"grey"}}>Enter your name:</label>
        <input
          type="text" onChange={() => setName()} ></input>
      </div>
      <div class="col">
      <label style={{color:"grey"}}>Enter your password:</label>
        <input
          type="password" onChange={() => setPassword()} ></input>
     </div>
      <button className="btn btn-primary"> submit</button>
      </div>
    </form>

    </Fragment>
    
    )
}
export default UseState;



