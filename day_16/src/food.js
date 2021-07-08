import React from "react"
import './food.css'

 let food = (props) =>
{
    return(
    <div className="foo">
            <h1>{props.name}</h1>
            <h3>{props.desc}</h3>
    </div>
    );
}
export default food;