
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Home1() {
  const [home, setHome] = useState("Welcome All");
const param= useParams()
  return (
    <div>
      
      <div className="container mt-5">
        <h1>{home}{param.name}</h1>
        
      </div>
      
    </div>
  );
}

export default Home1;
