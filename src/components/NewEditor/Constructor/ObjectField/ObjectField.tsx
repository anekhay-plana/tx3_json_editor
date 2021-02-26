import * as React from "react";
import {useEffect, useState} from "react";
import Constructor from "../Constructor";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './ObjectField.css'

interface Props {
    field?: any
    json?: any
    onChange?: any
    name?: string | number
    onClick?: any
    childName?: string
}

const ObjectField: React.FC<Props> = ({field, json, onChange, name, onClick, childName}) => {
    const [open, setOpen] = useState(name||childName ? false : true)
    const fields = Object.keys(field.fields)

    const checkFields = () => {
        fields.forEach(item => {
            if (!json[item]){
                onChangeInObject(item,[])
            }
        })
    }

    useEffect(()=>checkFields(),[])

    const title = childName ? childName : name

    const handleClickObject = () => {
        setOpen(true)
        onClick(field, json, onChange, name, onClick)
    }

    const onOpen = () => {
        setOpen(!open)
    }

    const onChangeInObject = (key, value) => {
        if (name || name === 0) {
            onChange(name, {...json, [key]: value})
        } else {
            onChange({...json, [key]: value})
        }
    }

    const renderContent = fields.filter((item) => field.fields[item].type !== 'string')

    return (
        <div className='object-container'>
            {Boolean(title) &&
            <div className='title'>
                {Boolean(renderContent.length) &&
                <ExpandMoreIcon
                    onClick={onOpen}
                    className={open ? 'rev-icon' : ''}
                />
                }
                <div onClick={handleClickObject}>
                    {title}
                </div>
            </div>
            }
            {open &&
            <div className='object-child-container'>
                {fields.map((item, i) =>
                    <div key={i} className='object-child-item'>
                        <Constructor
                            field={field.fields[item]}
                            json={json[item] || ''}
                            name={item}
                            onChange={onChangeInObject}
                            onClick={onClick}
                        />
                    </div>
                )}
            </div>
            }
        </div>
    )
}

export default ObjectField
