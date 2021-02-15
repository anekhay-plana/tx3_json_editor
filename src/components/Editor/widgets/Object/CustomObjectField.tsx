import './CustomObjectField.css'
import * as React from "react";

interface Props {
    title: string
    properties: Array<any>
}

const CustomObjectField:React.FC<Props> = ({title,properties}) => {
    return (
    <div className='container-field'>
        {title&&
            <div className='title'>{title}</div>
        }
            {properties.map((element,i:number)=> <div key={element.content + i} className="children-container">{element.content}</div>)}
    </div>
    )
}
export default CustomObjectField
