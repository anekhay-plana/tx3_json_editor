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
    selected: any
    openPatent?: any
    way?: string
}

const ObjectField: React.FC<Props> = (
    {
        field,
        json,
        onChange,
        name,
        onClick,
        childName,
        selected,
        openPatent,
        way
    }) => {

    const [open, setOpen] = useState(name || childName ? false : true)
    const fields = Object.keys(field.fields)
    useEffect(()=>{
        if(selected?.way!==undefined && way===selected?.way){
            console.log(selected?.way,way)
            handleClickObject()
        }
    },[json])

    useEffect(() => {
        if (way === selected?.way) {
            openWhenChildOpen()
        }
    }, [selected])

    const openWhenChildOpen = () => {
        if (openPatent) {
            openPatent()
            setOpen(true)
        }
    }
    useEffect(() => {
        if (way?.indexOf('>') === -1) {
            handleClickObject()
        }
    }, [field])

    const title = childName ? childName : name

    const handleClickObject = () => {
        setOpen(true)
        onClick(field, json, onChange, name, onClick, way)
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
                <div
                    className={way === selected?.way ? 'selected' : ''}
                    onClick={handleClickObject}
                >
                    {title}
                </div>
            </div>
            }
            <div className={open ? 'object-child-container' : 'hidden'}>
                {renderContent.map((item, i) =>
                    <div key={i} className={'object-child-item'}>
                        <Constructor
                            field={field.fields[item]}
                            json={json[item] || ''}
                            name={item}
                            onChange={onChangeInObject}
                            onClick={onClick}
                            selected={selected}
                            openPatent={openWhenChildOpen}
                            way={way ? way + '>' + item : item}
                        />
                    </div>
                )}
            </div>

        </div>
    )
}

export default ObjectField
