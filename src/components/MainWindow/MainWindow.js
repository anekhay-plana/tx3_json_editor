import {useState} from "react";
import Selector from "../Selector/Selector";
import {jsons} from '../../json'
import Editor from "../Editor/Editor";

const MainWindow = () => {
    const [selected, setSelected] = useState(null)
    const handleChange = selectedOption => {
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
