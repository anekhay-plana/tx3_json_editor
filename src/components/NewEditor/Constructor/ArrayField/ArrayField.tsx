import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Constructor from "../Constructor";
import Collapsible from "react-collapsible";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import './ArrayField.css'
import {useState} from "react";
import {createObject} from "./helpers";

interface Props {
    field: any
    json?: any
    name?: string
    onChange: any
}

const ArrayField: React.FC<Props> = ({field, json = [], name, onChange}) => {
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

    const handleClickAddItem = () => {
        const newArray = [...json]
        if (field.innerType.type === 'string') {
            newArray.push('')
        } else {
            const newObj = createObject(field.innerType)
            newArray.push(newObj)
        }
        onChange(name, newArray)
    }

    const handleClickRemoveItem = (index) => {
        const newArray = json.filter((item, i) => i !== index)
        onChange(name, newArray)
    }

    return (
        <div className='array-container'>
            <Collapsible
                trigger={
                    <div className='title'>
                        <div>{name}</div>
                        <ExpandMoreIcon className={open ? 'rev-icon' : 'icon'}/>
                    </div>
                }
                onOpening={onOpen}
                onClose={onClose}
                transitionTime={200}
            >
                {open &&
                <div>
                    <div className='array-children'>
                        {json.map((item, i) =>
                            <div key={i} className='array-item'>
                                <div className='field'>
                                    <Constructor
                                        field={field.innerType}
                                        json={item}
                                        name={i}
                                        onChange={onChangeInArray}
                                    />
                                </div>
                                <div className='remove-field'>
                                    <DeleteIcon
                                        onClick={() => handleClickRemoveItem(i)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='add-field'>
                        <div className='add-button'>
                            <AddCircleIcon
                                onClick={handleClickAddItem}
                            />
                        </div>
                    </div>
                </div>
                }
            </Collapsible>
        </div>
    )
}

export default ArrayField
