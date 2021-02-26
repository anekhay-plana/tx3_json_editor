import * as React from "react";
import {useEffect, useState} from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Constructor from "../Constructor";
import './ArrayField.css'

interface Props {
    field?: any
    json?: any
    name?: string
    onChange?: any
    onClick?: any
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
    const handleClickArray = () =>{
        setOpen(true)
        onClick(field, json, onChange, name,onClick)
    }
    return (
        <div className='array-container'>
            <div className='title'>
                {field.innerType.type !== 'string' &&
                <ExpandMoreIcon onClick={onOpen} className={open ? 'rev-icon' : ''}/>
                }
                <div onClick={handleClickArray}>{name}</div>
            </div>
            <div>
                <div className='array-child-container'>
                    {(json && open) &&
                        <div>
                    {
                        json.map((item, i) =>
                            <div key={i} className='array-item'>
                                <div>
                                    <Constructor
                                        field={field.innerType}
                                        json={item}
                                        childName={name + (i+1)}
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
