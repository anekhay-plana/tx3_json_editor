import Constructor from "../Constructor";
import Collapsible from "react-collapsible";
import * as React from "react";
import './ArrayField.css'

interface Props {
    field: any
    json: any
    name?: string
}

const ArrayField: React.FC<Props> = ({field, json, name}) => {

    return (
        <div className='array-container'>
            <Collapsible
                trigger={
                    <div className='title'>
                        {name}
                    </div>
                }
                transitionTime={200}
            >
                <div>
                    {json.map((item, i) =>
                        <Constructor key={i} field={field.innerType} json={item}/>
                    )}
                </div>
            </Collapsible>
        </div>
    )
}

export default ArrayField
