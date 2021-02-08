import {useEffect, useState} from "react";
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import JSONInput from "react-json-editor-ajrm";
import locale from 'react-json-editor-ajrm/locale/en';
import CustomArrayField from "./widgets/CustomArrayField";
import './Editor.css'

const Form = withTheme(AntDTheme);

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
                    uiSchema={json.uiSchema}
                    ArrayFieldTemplate={CustomArrayField}
                >
                    <div>
                        <button type="submit" className='hidden'>Submit</button>
                    </div>
                </Form>
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
