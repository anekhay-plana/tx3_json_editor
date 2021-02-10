import AddCircleIcon from '@material-ui/icons/AddCircle';
import './CustomArrayField.css'
import Collapsible from "react-collapsible";

const CustomArrayField = (props) => {

    return (
        <div className='container-field'>
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
                            {props.items.map((element, i) =>
                                <div key={element.children.key + i}>
                                    {element.children}
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
