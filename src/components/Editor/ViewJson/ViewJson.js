import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import React, {useEffect} from "react";
import './ViewJson.css'

const ViewJson = ({scrollTop, data}) => {
    const scrollRef = React.createRef()
    const clientHeight = React.createRef()

    useEffect(() => {
        scrollRef.current.scrollTop = clientHeight.current.clientHeight * scrollTop
    }, [scrollTop])

    return (
        <div className='json-display-window' ref={scrollRef}>
            <div ref={clientHeight}>
                <JSONInput
                    locale={locale}
                    placeholder={data}
                    confirmGood={false}
                    viewOnly={true}
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    )

}
export default ViewJson
