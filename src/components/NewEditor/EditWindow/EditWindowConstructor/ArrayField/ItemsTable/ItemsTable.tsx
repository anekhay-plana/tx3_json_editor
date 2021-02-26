import * as React from "react";
import TableObjects from "./TableObjects/TableObjects";
import TableStrings from "./TableStrings/TableStrings";
import './ItemsTable.css'

interface Props {
    field?: any
    json?: any
    onClick: any
    removeItem: any
}

const ItemsTable: React.FC<Props> = (props) => {
    const itemsType = props.field.type
    return (
        <div>
        {itemsType === 'object'
            ? <TableObjects {...props}/>
            : <TableStrings {...props}/>
        }
        </div>
    )

}

export default ItemsTable
