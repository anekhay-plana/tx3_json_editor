import {useEffect, useState} from "react";
import Form from '@rjsf/material-ui'
import JSONInput from "react-json-editor-ajrm";
import locale from 'react-json-editor-ajrm/locale/en';
import './Editor.css'

const Editor = ({json}) => {
    const [formData, setFormData] = useState(json.json)

    useEffect(()=>{setFormData(json.json)},[json])

    return (
        <div className='container'>
            <div>
                <Form
                    schema={json.schema}
                    formData={formData}
                    onChange={e => setFormData(e.formData)}
                />
            </div>
            <div>
                <JSONInput
                    locale={locale}
                    placeholder={formData}
                />
            </div>
        </div>
    );

}
export default Editor
