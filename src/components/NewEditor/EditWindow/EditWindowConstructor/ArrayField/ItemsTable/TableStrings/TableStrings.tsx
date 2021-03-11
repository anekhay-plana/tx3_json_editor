import * as React from "react";
import {TablePagination} from "@material-ui/core";

interface Props {
    field?: any
    json?: any
    onClick: any
    removeItem: any
    addItem: (schema:object) => void
}

const TableStrings: React.FC<Props> = ({field, json,onClick,removeItem,addItem}) => {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 5;

    const content = Array.isArray(json)? json:[]

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td></td>
                    <td className='buttons-field'>
                        <u onClick={()=>addItem(field)} className='array-button add'>Add</u>
                    </td>
                </tr>
                </thead>
                <tbody>
                {content
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, i) => (
                            <tr key={item + i}>
                                <td >
                                    {item}
                                </td>
                                <td className='buttons-field'>
                                    <u
                                        onClick={()=>onClick(item,page * rowsPerPage+i)}
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

export default TableStrings
