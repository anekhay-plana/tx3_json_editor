import Constructor from "../Constructor";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import './ArrayField.css'
import {createObject} from "./helpers";
import {useState} from "react";

interface Props {
    field: any
    json?: any
    name?: string
    onChange: any
    onClick: any
}

const ArrayField: React.FC<Props> = ({field, json = [], name, onChange, onClick}) => {
    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(!open)
    }

    const onChangeInArray = (i, value) => {
        const newArray = [...json]
        newArray[i] = value
        onChange(name, newArray)
    }

    // const handleClickAddItem = () => {
    //     const newArray = [...json]
    //     if (field.innerType.type === 'string') {
    //         newArray.push('')
    //     } else {
    //         const newObj = createObject(field.innerType)
    //         newArray.push(newObj)
    //     }
    //     onChange(name, newArray)
    // }
    //
    // const handleClickRemoveItem = (index) => {
    //     const newArray = json.filter((item, i) => i !== index)
    //     onChange(name, newArray)
    // }

    const handleClickItem = (item) =>{
        onClick(field, item, onChange)
    }

    return (
        <div className='array-container'>
            <div className='title'>
                <ExpandMoreIcon onClick={onOpen} className={open?'rev-icon': ''}/>
                <div>{name}</div>
            </div>
            <div>
                <div className='array-child-container'>
                    {(json && open) &&
                        <div>
                    {
                        json.map((item, i) =>
                            <div key={i} className='array-item'>
                                <div>
                                    <div
                                        onClick={()=>handleClickItem(item)}
                                    >
                                        {name + (i + 1)}
                                    </div>
                                    <Constructor
                                        field={field.innerType}
                                        json={item}
                                        name={i}
                                        onChange={onChangeInArray}
                                        onClick={onClick}
                                    />
                                </div>
                            </div>
                        )}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ArrayField
