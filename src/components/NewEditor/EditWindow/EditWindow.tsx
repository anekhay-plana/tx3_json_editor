import * as React from "react";
import EditWindowConstructor from "./EditWindowConstructor/EditWindowConstructor";

interface Props {
    field?: any
    json?: any
    onChange?: any
}

const EditWindow: React.FC<Props> = (props) => {
    return <EditWindowConstructor {...props}/>
}

export default EditWindow
