import {Accordion, AccordionSummary} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const CustomArrayField = (props) => {

return(
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            {props.title}
        </AccordionSummary>
        <div className='container'>
            <div className='content'>
                {props.items.map(element =><div key={Math.random()}> {element.children}</div>)}
            </div>
            <div className='active'>
                {props.canAdd && <AddIcon type="button" onClick={props.onAddClick}>add</AddIcon>}
            </div>
        </div>
    </Accordion>
)
}
export default CustomArrayField
