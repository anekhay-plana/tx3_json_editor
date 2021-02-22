import Constructor from "../Constructor";
import './ObjectField.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import {useState} from "react";

interface Props {
    field: any
    json?: any
    onChange: any
    name?: string | number
    onClick: any
}

const ObjectField: React.FC<Props> = ({field, json, onChange, name,onClick}) => {
    const [open, setOpen] = useState(true)

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
    const fields = Object.keys(field.fields)
    return (
        <div className='object-container'>
            {Boolean(name && typeof name !== "number") &&
            <div className='title'>
                <ExpandMoreIcon
                    onClick={onOpen}
                    className={open ? 'rev-icon' : ''}
                />
                <div
                    onClick={onClick}
                >
                    {name}
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
