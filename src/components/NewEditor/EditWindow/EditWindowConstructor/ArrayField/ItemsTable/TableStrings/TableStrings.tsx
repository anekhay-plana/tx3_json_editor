import * as React from "react";
import {TablePagination} from "@material-ui/core";

interface Props {
    field?: any
    json?: any
    onClick: any
    removeItem: any
}

const TableStrings: React.FC<Props> = ({field, json,onClick,removeItem}) => {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 5;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <table>
                <tbody>
                {json
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, i) => (
                            <tr key={item + i}>
                                <td >
                                    {item}
                                </td>
                                <div className='button-container'>
                                    <div
                                        onClick={()=>onClick(item,i)}
                                        className='array-button edit'
                                    >
                                        Edit
                                    </div>
                                    <div
                                        onClick={()=>removeItem(i)}
                                        className='array-button delete'
                                    >
                                        Delete
                                    </div>
                                </div>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            {json.length > 5 &&
            <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                component="div"
                count={json.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
            />
            }
        </div>
    )

}

export default TableStrings
