import React from "react";

function Box(props) {
    return (
        <div>
            <input placeholder={`Enter ${props.value}`} />
        </div>
    );
}

export default Box;