import * as React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './ViewJson.css'

interface Props {
    scrollTop: number
    data: object
}

interface RefObject<T> {
    readonly current: T | null
}

const ViewJson: React.FC<Props>  = ({scrollTop, data}) => {
    const scrollRef:RefObject<any> = React.createRef()
    const clientHeight:RefObject<any> = React.createRef()

    React.useEffect(() => {
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
