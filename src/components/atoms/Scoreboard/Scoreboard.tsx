import React, {FC} from "react";
import {IScoreboardProps} from "./scoreboard.type";
import {Form} from "react-bootstrap";


const Scoreboard: FC<IScoreboardProps> = (props) => {
    return(
      <div className="scoreboard-item">
          <div className="scoreboard-no">{props.number}</div>
          <div className="scoreboard-address">{props.address}</div>
          <div className="scoreboard-badges">
              {props.images.map(image=>{
                  return(
                      <img src={image}/>
                  )
              })}
          </div>

      </div>
    )
}

export default Scoreboard;