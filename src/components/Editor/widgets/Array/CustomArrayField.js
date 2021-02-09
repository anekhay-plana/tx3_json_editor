import {Accordion, AccordionSummary} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './CustomArrayField.css'

const CustomArrayField = (props) => {

    return (
        <div className='container-field'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='title'
                >
                    {props.title}
                </AccordionSummary>
                <div>
                    <div className='children-container'>
                        <div className='children'>
                            {props.items.map((element,i) =><div key={element.children.key + i}>{element.children}</div>)}
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
            </Accordion>
        </div>
    )
}
export default CustomArrayField
