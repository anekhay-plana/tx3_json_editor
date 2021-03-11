import * as React from "react";
import TableObjects from "./TableObjects/TableObjects";
import TableStrings from "./TableStrings/TableStrings";
import MixedField from "./TableMixedes/MixedField";
import './ItemsTable.css'

interface Props {
    field?: any
    json?: any
    onClick: any
    removeItem: any
    addItem: (schema:object) => void
    name?:string
}

const ItemsTable: React.FC<Props> = (props) => {
    const itemsType = props.field.type
    const renderArrayTable = () => {
        switch (itemsType){
            case 'string':
                return <TableStrings {...props}/>
            case 'object':
                return <TableObjects {...props}/>
            default:
                return <MixedField {...props}/>
        }
    }
    return renderArrayTable()

}

export default ItemsTable
