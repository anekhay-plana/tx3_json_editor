import React from 'react';
import Select from 'react-select';
import './Selector.css'

const createOption = (array) => {
    const options = array.map((item, i) => {
     return {
         value: i,
         label: item.name
     }})
    return options
}

const Selector = ({variants, handleChange, selected}) => {
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
