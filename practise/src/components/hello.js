import React from "react";
const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Hellloooooo</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello'},React.createElement('h1',null,'hellllo'));
}
export default Hello;