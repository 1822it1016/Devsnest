import "./card.css"

let Card = (props) =>
{
 return(
     <>
     <div className="car">
         <h1 className="head">
             {props.name}
             <button onClick={props.handleDelete}>delete</button>
        </h1>
        <p>
            Food have {props.cont} calories
        </p>
     </div>
     </>
 );
}

export default Card;