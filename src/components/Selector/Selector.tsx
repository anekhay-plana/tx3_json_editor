import * as React from 'react';
import Select from "react-select";
import './Selector.css'

interface ArrayItem {
    label: string
    value: object
}

interface ProfilesProps {
    variants: Array<ArrayItem>
    handleChange: (selectedOption:ArrayItem|null) => void
    selected: ArrayItem|null
}

const Selector:React.FC<ProfilesProps> = ({variants, handleChange, selected}) => {
    return(
        <div className='selector-container'>
            <Select
                value={selected}
                onChange={handleChange}
                options={variants}
            />
        </div>
    )
}
export default  Selector
