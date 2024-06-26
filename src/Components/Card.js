import { useState } from "react";
import './Card.css'

function Card({id,info,image,price,name,removeTour}){
    const [readmore,setReadmore]=useState(false);
    const description= readmore ?info:`${info.substring(0,200)}.......`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="details">
                <div className="tour-details">
                    <h4 className="tour-price">${price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description};
                    <span onClick={readmoreHandler} className="readmore">
                        {readmore? `Show less`:`Read more`}
                    </span>
                </div>
            </div>
            <button className="not-interested" onClick={()=> removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;