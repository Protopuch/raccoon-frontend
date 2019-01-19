import React from "react";

export default props => (
    <div>
        <p>{props.date} | <strong>{props.message}</strong> | <img src={props.img}/></p>
    </div>
);