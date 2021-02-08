import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import React, {useEffect} from "react";
import './ViewJson.css'

const ViewJson = ({scrollTop, data}) => {
    const myRef = React.createRef()

    useEffect(()=>{
        myRef.current.scrollTop = myRef.current.clientHeight*4*scrollTop
    },[scrollTop])

    return(
        <div className='json-display-window' ref={myRef}>
            <JSONInput
                locale={locale}
                placeholder={data}
                confirmGood={false}
                viewOnly={true}
                width='100%'
                height='100%'
            />
        </div>
    )

}
export default ViewJson
