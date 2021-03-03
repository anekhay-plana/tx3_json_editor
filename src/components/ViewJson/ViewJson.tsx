import * as React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './ViewJson.css'

interface Props {
    data: object
    onChange?: any
}

const ViewJson: React.FC<Props>  = ({ data, onChange}) => {

    console.log('LOOG123123123', data)

    const bob = (e:any) => {
        onChange(e.plainText)
    }

    return (
        <div className='json-display-window'>
            <div>
                <JSONInput
                    onChange={bob}
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
