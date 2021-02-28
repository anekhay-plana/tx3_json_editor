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
    selected: any
    openPatent?: any
    way?: string
}

const ArrayField: React.FC<Props> = (
    {
        field,
        json = [],
        name,
        onChange,
        onClick,
        selected,
        openPatent,
        way
    }) => {

    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(!open)
    }

    useEffect(()=>{
        if(selected?.way==way){
            handleClickArray()
        }
    },[json])

    const onChangeInArray = (i, value) => {
        const newArray = [...json]
        newArray[i] = value
        onChange(name, newArray)
    }

    const openWhenChildOpen = () => {
        openPatent()
        setOpen(true)
    }

    const handleClickArray = () => {
        setOpen(true)
        onClick(field, json, onChange, name, onClick, way)
    }
    return (
        <div className='array-container'>
            <div className='title'>
                {field.innerType.type !== 'string' &&
                <ExpandMoreIcon onClick={onOpen} className={open ? 'rev-icon' : ''}/>
                }
                <div
                    className={way === selected?.way ? 'selected' : ''}
                    onClick={handleClickArray}
                >
                    {name}
                </div>
            </div>
            <div>
                <div className='array-child-container'>
                    {json &&
                    <div className={!open ? 'hidden' : ''}>
                        {
                            json.map((item, i) =>
                                <div key={i} className='array-item'>
                                    <div className={way ? 'line' : ''}>
                                    </div>
                                    <Constructor
                                        field={field.innerType}
                                        json={item}
                                        childName={name + (i + 1)}
                                        name={i}
                                        onChange={onChangeInArray}
                                        onClick={onClick}
                                        selected={selected}
                                        openPatent={openWhenChildOpen}
                                        way={way + '>' + name + (i + 1)}
                                    />
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
