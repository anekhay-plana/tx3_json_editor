import {SynchronizationPolicy} from '../../json/SynchronizationPolicy'
import Constructor from "./Constructor/Constructor";

interface Props {
    yupSchema: any
}

const NewEditor: React.FC<Props> = ({yupSchema}) => {
    return <Constructor field={yupSchema} json={SynchronizationPolicy}/>
}

export default NewEditor
