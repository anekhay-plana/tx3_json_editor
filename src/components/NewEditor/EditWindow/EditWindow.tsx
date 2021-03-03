import * as React from "react";
import EditWindowConstructor from "./EditWindowConstructor/EditWindowConstructor";

interface Props {
    field?: any
    json?: any
    onClickSearchWay: (string)=>void
    onChange?: any
    way?: string
}

const EditWindow: React.FC<Props> = (props) => {
    return (
        <div >
            <EditWindowConstructor {...props}/>
        </div>
    )
}

export default EditWindow
