import React from "react";
import './HistoryBlock.css'

export default props => (
    <div className="HistoryBlock">
        <p>{props.date} | <strong>{props.message}</strong> | <img src={props.img}/></p>
    </div>
);