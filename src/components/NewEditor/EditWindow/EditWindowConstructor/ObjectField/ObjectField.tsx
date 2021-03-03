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
    way: string
    nestingLevel:number
}

const ObjectField: React.FC<Props> = ({field, json, onChange, name,onClick,way,nestingLevel}) => {
    const fields = Object.keys(field.fields)

    const checkFields = () => {
        fields.forEach(item => {
            if (!json[item]){
                onChangeInObject(item,[])
            }
        })
    }

    useEffect(()=> {
        checkFields()
    },[])

    const onChangeInObject = (key, value) => {
        const newObject = new Object(json)
        newObject[key] = value
        if (name || name === 0) {
            onChange(name, newObject)
        } else {
            onChange(newObject)
        }
    }

    return (
        <div className='object-edit-container'>
            {Boolean(name && typeof name !== "number") &&
            <div className='edit-title'>
                <h2>
                    {name}
                </h2>
            </div>
            }
                {fields.map((item, i) =>
                    <div key={i} className='object-child-item-editor'>
                        <EditWindowConstructor
                            field={field.fields[item]}
                            json={json[item] || ''}
                            name={item}
                            onChange={onChangeInObject}
                            onClick={onClick}
                            way={way+'>'+ item}
                            nestingLevel={nestingLevel+1}
                        />
                    </div>
                )}
        </div>
    )
}

export default ObjectField
