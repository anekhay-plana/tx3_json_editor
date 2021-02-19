import * as React from "react";
import {useState} from "react";
import {SynchronizationPolicy} from '../../json/SynchronizationPolicy'
import {ApprovalPolicy} from "../../json/ApprovalPolicy";
import Constructor from "./Constructor/Constructor";
import ViewJson from "./ViewJson/ViewJson";
import './NewEditor.css'

interface Props {
    yupSchema: any
}

interface RefObject<T> {
    readonly current: T | null
}

const NewEditor: React.FC<Props> = ({yupSchema}) => {
    const scrollRef: RefObject<any> = React.createRef()
    const clientHeight: RefObject<any> = React.createRef()
    const [formData, setFormData] = useState(ApprovalPolicy)
    const [scrollTop, setScrollTop] = React.useState(0)

    const handleScroll = () => {
        setScrollTop(scrollRef.current.scrollTop / (clientHeight.current.clientHeight))
    }

    const handleChange = (object) => {
        setFormData(object)
    }

    return (
        <div className='container'>
            <div
                className='json-editor-window'
                onScroll={handleScroll}
                ref={scrollRef}
            >
                <div ref={clientHeight}>
                    <Constructor field={yupSchema} json={formData} onChange={handleChange}/>
                </div>
            </div>
            <div>
                <ViewJson scrollTop={scrollTop} data={formData}/>
            </div>
        </div>
    )
}

export default NewEditor
