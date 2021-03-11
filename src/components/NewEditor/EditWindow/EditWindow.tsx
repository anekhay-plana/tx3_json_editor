import * as React from "react";
import EditWindowConstructor from "./EditWindowConstructor/EditWindowConstructor";
import Button from "../../MainWindow/Button/Button";

interface Props {
    field?: any
    json?: any
    onClickSearchWay: (string) => void
    onChange?: any
    way?: string
    parentsWay?: string
}

const EditWindow: React.FC<Props> = (props) => {
    const {onClickSearchWay, parentsWay} = props
    return (
        <div>
            <EditWindowConstructor {...props}/>
            {parentsWay &&
            <div style={{marginTop:'20px'}}>
                <Button text={'Save'} onClick={() => onClickSearchWay(parentsWay)}/>
            </div>
            }
        </div>
    )
}

export default EditWindow
