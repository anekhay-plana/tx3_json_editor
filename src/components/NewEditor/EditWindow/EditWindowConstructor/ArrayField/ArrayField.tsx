import * as React from "react";
import {TablePagination} from "@material-ui/core";
import './ArrayField.css'
import {createObject} from "./helpers";
import ItemsRows from "./ItemsTable/ItemsTable";
import {useEffect, useState} from "react";

interface Props {
    field?: any
    json?: any
    name?: string
    onChange?: any
    onClick?: any
}

const ArrayField: React.FC<Props> = ({field, json = [], name, onChange, onClick}) => {
    const [array, setArray] = useState(json)

    useEffect(()=> setArray(json),[json])

    const onChangeInArray = (i, value) => {
        const newArray = [...array]
        newArray[i] = value
        setArray(newArray)
        onChange(name, newArray)
    }

    const handleClickAddItem = () => {
        const newArray = [...array]
        if (field.innerType.type === 'string') {
            newArray.push('')
        } else {
            const newObj = createObject(field.innerType)
            newArray.push(newObj)
        }
        setArray(newArray)
        onChange(name, newArray)
    }

    const handleClickRemoveItem = (index) => {
        const newArray = array.filter((item, i) => i !== index)
        setArray(newArray)
        onChange(name, newArray)
    }

    const handleClickItem = (item, i) => {
        console.log('LOOG', item)
        onClick(field.innerType, item, onChangeInArray, i, onClick)
    }

    return (
        <div className='array-edit-container'>
            <div className='edit-title'>
                <h2>{name}</h2>
                <button onClick={handleClickAddItem}>add</button>
            </div>
            <div>
                <ItemsRows json={array} field={field.innerType} onClick={handleClickItem} removeItem={handleClickRemoveItem}/>
            </div>
        </div>
    )
}

export default ArrayField
