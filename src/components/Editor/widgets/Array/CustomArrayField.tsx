import AddCircleIcon from '@material-ui/icons/AddCircle';
import Collapsible from "react-collapsible";
import * as React from "react";
import './CustomArrayField.css'
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    items: Array<any>
    title: string
    canAdd: boolean
    onAddClick: any
}

const CustomArrayField:React.FC<Props> = (props) => {
    return (
        <div className='container-array-field'>
            <Collapsible
                trigger={
                    <div className='title'>
                        {props.title}
                    </div>
                }
                transitionTime={200}
            >
                <div>
                    <div className='children-container'>
                        <div className='children'>
                            {props.items.map((element: any, i) =>
                                <div
                                    className='container-array-field'
                                    key={element.children.key + i}
                                >
                                    {element.children}
                                    {element.hasRemove && (
                                        <div className='remove-field'>
                                            <DeleteIcon
                                                onClick={element.onDropIndexClick(element.index)}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {props.canAdd &&
                        <div className='add-field'>
                            <div className='add-button'>
                                <AddCircleIcon
                                    onClick={props.onAddClick}
                                />
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}
export default CustomArrayField
