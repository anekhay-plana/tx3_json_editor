import * as React from "react";
import {useState} from "react";
import {SynchronizationPolicy} from '../../json/SynchronizationPolicy'
import Constructor from "./Constructor/Constructor";
import ViewJson from "./ViewJson/ViewJson";
import './NewEditor.css'

interface Props {
    yupSchema: any
}

const NewEditor: React.FC<Props> = ({yupSchema}) => {
    const [formData, setFormData] = useState(SynchronizationPolicy)


    const handleChange = (object) => {
        setFormData(object)
    }

    return (
        <div className='container'>
            <div className='json-editor-window'>
                <Constructor field={yupSchema} json={formData} onChange={handleChange}/>
            </div>
            <div>
                <ViewJson data={formData}/>
            </div>
        </div>
    )
}

export default NewEditor
