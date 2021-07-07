
import React from "react"
import photo from "./img_avatar.png"
import "./card.css"

let card = (props) =>
{  
    return(
<>
<div className="card">
  <img src={photo} alt="Avatar" width="100px" height="100px" />
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
</>
    );   
}
export default card;