import React, {useEffect, useState} from "react";
import Form from "@rjsf/material-ui";
import CustomArrayField from "./widgets/Array/CustomArrayField";
import './Editor.css'
import ViewJson from "./ViewJson/ViewJson";
import CustomObjectField from "./widgets/Object/CustomObjectField";

const Editor = ({json}) => {
    const scrollRef = React.createRef()
    const clientHeight = React.createRef()
    const [formData, setFormData] = useState(json.json)
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(()=>{setFormData(json.json)},[json])

    const handleScroll = () => {
        setScrollTop(scrollRef.current.scrollTop/(clientHeight.current.clientHeight))
    }

    return (
        <div className='container'>
            <div
                className='json-editor-window'
                onScroll={handleScroll}
                ref={scrollRef}
            >
                <div ref={clientHeight}>
                    <Form
                        schema={json.schema}
                        formData={formData}
                        onChange={e => setFormData(e.formData)}
                        uiSchema={json.uiSchema}
                        ArrayFieldTemplate={CustomArrayField}
                        ObjectFieldTemplate={CustomObjectField}
                    >
                        <div>
                            <button type="submit" className='hidden'>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
            <ViewJson scrollTop={scrollTop} data={formData}/>
        </div>
    );

}
export default Editor
