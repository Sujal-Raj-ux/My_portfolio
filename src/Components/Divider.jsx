import React from "react";
function Divider({ color = "bg-dark", height = "100px" }) {
    return (
      <div className={`w-100 ${color}`} style={{ height }}></div>
    );
  }
  
  export default Divider;