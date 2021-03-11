import * as React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './ViewJson.css'

interface Props {
    data: object
    onChange: (object:object)=>void
}

const ViewJson: React.FC<Props>  = ({ data, onChange}) => {

    const changeOnView = (e:any) => {
        const changedObject = e.jsObject
        onChange(changedObject)
    }

    return (
        <div className='json-display-window'>
            <div>
                <JSONInput
                    onChange={changeOnView}
                    locale={locale}
                    placeholder={data}
                    confirmGood={false}
                    width='100%'
                    height='100%'
                    style={{labelColumn:{display:'none'}}}
                />
            </div>
        </div>
    )

}
export default ViewJson
