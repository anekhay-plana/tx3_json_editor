import * as React from 'react';
import Select from "react-select";
import {createOption} from './helpers'
import './Selector.css'

interface ArrayItem {
    name: string
    json: object
    schema: object
    uiSchema: object
}

export interface SelectedItem {
    value: number
    label: string
}

interface ProfilesProps {
    variants: Array<ArrayItem>
    handleChange: (selectedOption:SelectedItem|null) => void
    selected: SelectedItem|null
}

const Selector:React.FC<ProfilesProps> = ({variants, handleChange, selected}) => {
    return(
        <div className='selector-container'>
            <Select
                value={selected}
                onChange={handleChange}
                options={createOption(variants)}
            />
        </div>
    )
}
export default Selector
