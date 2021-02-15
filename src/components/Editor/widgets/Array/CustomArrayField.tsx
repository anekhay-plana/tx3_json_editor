import AddCircleIcon from '@material-ui/icons/AddCircle';
import './CustomArrayField.css'
import Collapsible from "react-collapsible";
import * as React from "react";

interface Props {
    title: string
    items: Array<any>
    canAdd:boolean
    onAddClick: ()=>void
}

const CustomArrayField:React.FC<Props> = ({items,title,canAdd,onAddClick}) => {
    return (
        <div className='container-field'>
            <Collapsible
                trigger={
                    <div className='title'>
                        {title}
                    </div>
                }
                transitionTime={200}
            >
                <div>
                    <div className='children-container'>
                        <div className='children'>
                            {items.map((element, i) =>
                                <div key={element.children.key + i}>
                                    {element.children}
                                </div>
                            )}
                        </div>
                        {canAdd &&
                        <div className='add-field'>
                            <div className='add-button'>
                                <AddCircleIcon
                                    onClick={onAddClick}
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
