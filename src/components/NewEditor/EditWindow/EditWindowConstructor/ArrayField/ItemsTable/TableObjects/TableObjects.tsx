import * as React from "react";
import {TablePagination} from "@material-ui/core";

interface Props {
    field?: any
    json?: any
    onClick: any
    removeItem: any
    addItem: (schema:object) => void
}

const TableObjects: React.FC<Props> = ({field, json, onClick, removeItem, addItem}) => {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 5;
    const keys = Object.keys(field.fields)

    const content = Array.isArray(json) ? json : []

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    {keys.map(item =>
                        <td key={item}>{item}</td>
                    )}
                    <td className='buttons-field'>
                        <u onClick={()=>addItem(field)} className='array-button add'>Add</u>
                    </td>
                </tr>
                </thead>
                <tbody>
                {content
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((object, i) => (
                            <tr key={'bob' + i}>
                                {keys.map(item =>
                                    <td key={item + i}>
                                        {field.fields[item].type === 'string'
                                            ? object[item]
                                            : `[${field.fields[item].type}]`
                                        }
                                    </td>
                                )}
                                <td className='buttons-field'>
                                    <u
                                        onClick={() => onClick(object, page * rowsPerPage + i)}
                                        className='array-button edit'
                                    >
                                        Edit
                                    </u>
                                    <u
                                        onClick={() => removeItem(page * rowsPerPage + i)}
                                        className='array-button delete'
                                    >
                                        Delete
                                    </u>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            {content.length > 5 &&
            <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                component="div"
                count={content.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
            />
            }
        </div>
    )

}

export default TableObjects
