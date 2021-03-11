import * as React from "react";
import {useEffect} from "react";

interface Props {
    field?: any
    json?: any
    onChange?: any
    name?: string | number
    onClick?: any
    childName?: string
    searchWay: string
    openPatent?: any
    way?: string
    parentWay?: string
}

const StringField: React.FC<Props> = (
    {
        field,
        json,
        onChange,
        name,
        onClick,
        childName,
        searchWay,
        openPatent,
        way,
        parentWay
    }) => {

    useEffect(() => {
        if (way === searchWay) {
            handleClickObject()
        }
    }, [json])

    useEffect(() => {
        if (way === searchWay) {
            handleClickObject()
            openWhenChildOpen()
        }
    }, [searchWay])

    const openWhenChildOpen = () => {
        if (openPatent) {
            openPatent()
        }
    }
    useEffect(() => {
        if (way?.indexOf('>') === -1) {
            handleClickObject()
        }
    }, [field])

    const title = childName ? childName : name

    const handleClickObject = () => {
        onClick(field, json, onChange, name, onClick, way, parentWay)
    }


    return (
        <div
            className={way === searchWay ? 'selected' : ''}
            onClick={handleClickObject}
            style={{cursor:'pointer'}}
        >
            {title}
        </div>
    )
}

export default StringField
