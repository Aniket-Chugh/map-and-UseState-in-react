import React, { useState } from "react";

function UseStateReact() {
    const [isPrinted,setIsPrinted] = useState(false);
     return (

        <div>
            <button onClick={
                ()=>{
setIsPrinted(true)
                }
            }>Click me</button>
            <p>{     isPrinted ? "hello world" : "nothing to print here" }</p>
        </div>

 );
}
export default UseStateReact;
