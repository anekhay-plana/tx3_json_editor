import * as React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './ViewJson.css'

interface Props {
    data: object
}

const ViewJson: React.FC<Props> = ({data}) => {
    return (
        <div className='json-display-window'>
            <div>
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
