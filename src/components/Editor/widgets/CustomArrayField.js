import {Accordion, AccordionSummary} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './CustomArrayField.css'

const CustomArrayField = (props) => {

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                {props.title}
            </AccordionSummary>
            <div>
                <div className='children'>
                    {props.items.map(element => element.children)}
                </div>
                <div className='add'>
                    {props.canAdd && <AddIcon type="button" onClick={props.onAddClick}>add</AddIcon>}
                </div>
            </div>
        </Accordion>
    )
}
export default CustomArrayField
