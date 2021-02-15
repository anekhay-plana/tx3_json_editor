import React, {useState} from "react";
import Selector, {SelectedItem} from "../Selector/Selector";
import {jsons} from '../../json'
import Editor from "../Editor/Editor";


const MainWindow: React.FC = () => {
    const [selected, setSelected] = useState<SelectedItem|null>(null)
    const handleChange = (selectedOption:SelectedItem|null) => {
        setSelected(selectedOption);
    };
    return (
        <>
            <Selector variants={jsons} handleChange={handleChange} selected={selected}/>
            {selected !== null &&
            <Editor json={jsons[selected.value]}/>
            }
        </>
    )
}
export default MainWindow
