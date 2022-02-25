import React, { useState } from "react";

const PrintHii = () => {
  // with falsy value ==> null,  0,  undefined,  false,  ""
  const [fallysValue, setFallsyValue] = useState("");
  // with trully value ==> " ",  rest of values all are truelly
  const [truellyValue, setTruellyValue] = useState("Chandan");

  return (
    <div>
      {
        // if(true){
        //     <h1>Hii</h1>
        // }
        // else{
        //     <h1>Byee</h1>
        // }
      }

      {/* Using TERNARY operator */}
      {fallysValue ? (
        <h1>Hii I'm Truelly value</h1>
      ) : (
        <h1>Hii I'm Fallsy value</h1>
      )}
      {truellyValue ? (
        <h1>Hii I'm Truelly value</h1>
      ) : (
        <h1>Hii I'm Fallsy value</h1>
      )}

      {/* Using Short Circuite */}
      {fallysValue || <h1>I'</h1>}
      {<h1>Byee</h1> || <h1>Hii</h1>}

      {<h1>Hii</h1> && <h1>Byee</h1>}
      {<h1>Byee</h1> && <h1>Hii</h1>}
    </div>
  );
};

export default PrintHii;
