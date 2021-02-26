import EditWindowConstructor from "../EditWindowConstructor";
import * as React from "react";
import './ObjectField.css'
import {useEffect, useState} from "react";

interface Props {
    field?: any
    json?: any
    onChange?: any
    name?: string | number
    onClick?: any
}

const ObjectField: React.FC<Props> = ({field, json, onChange, name,onClick}) => {
    const [object,setObject] = useState(json)
    const fields = Object.keys(field.fields)

    const checkFields = () => {
        fields.forEach(item => {
            if (!json[item]){
                onChangeInObject(item,[])
            }
        })
    }

    useEffect(()=>checkFields(),[])

    const onChangeInObject = (key, value) => {
        const newObject = new Object(object)
        newObject[key] = value
        if (name || name === 0) {
            onChange(name, newObject)
        } else {
            onChange(newObject)
        }
        setObject(newObject)
    }

    return (
        <div className='object-container'>
            {Boolean(name && typeof name !== "number") &&
            <div className='edit-title'>
                <h2>
                    {name}
                </h2>
            </div>
            }
                {fields.map((item, i) =>
                    <div key={i} className='object-child-item'>
                        <EditWindowConstructor
                            field={field.fields[item]}
                            json={json[item] || ''}
                            name={item}
                            onChange={onChangeInObject}
                            onClick={onClick}
                        />
                    </div>
                )}
        </div>
    )
}

export default ObjectField
