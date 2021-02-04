import React from 'react';
import Select from 'react-select';

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
        <Select
            value={selected}
            onChange={handleChange}
            options={createOption(variants)}
        />
    )
}
export default Selector
