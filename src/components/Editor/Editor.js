import React, {useEffect, useState} from "react";
import Form from "@rjsf/core";
import CustomArrayField from "./widgets/CustomArrayField";
import './Editor.css'
import ViewJson from "./ViewJson/ViewJson";

const Editor = ({json}) => {
    const myRef = React.createRef()
    const [formData, setFormData] = useState(json.json)
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(()=>{setFormData(json.json)},[json])

    const handleScroll = () => {
        setScrollTop(myRef.current.scrollTop/(myRef.current.clientHeight * 2))
    }

    return (
        <div className='container'>
            <div
                className='json-editor-window'
                onScroll={handleScroll}
                ref={myRef}
            >
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
            <ViewJson scrollTop={scrollTop} data={formData}/>
        </div>
    );

}
export default Editor
