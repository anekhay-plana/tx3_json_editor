import Constructor from "../Constructor";
import Collapsible from "react-collapsible";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import './ArrayField.css'
import {useState} from "react";

interface Props {
    field: any
    json: any
    name?: string
    onChange: any
}

const ArrayField: React.FC<Props> = ({field, json, name, onChange}) => {
    const [open, setOpen] = useState(false)

    const onChangeInArray = (i, value) => {
        const newArray = [...json]
        newArray[i] = value
        onChange(name, newArray)
    }
    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const title =
        <div className='title'>
            <div>{name}</div>
            <ExpandMoreIcon className={open ? 'rev-icon' : 'icon'}/>
        </div>


    return (
        <div className='array-container'>
            <Collapsible
                trigger={title}
                onOpening={onOpen}
                onClosing={onClose}
                transitionTime={200}
            >
                <div>
                    {json.map((item, i) =>
                        <Constructor key={i} field={field.innerType} json={item} name={i} onChange={onChangeInArray}/>
                    )}
                </div>
            </Collapsible>
        </div>
    )
}

export default ArrayField
