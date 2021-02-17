import React, {useState} from "react";
import {jsons} from '../../json'
import Editor from "../Editor/Editor";
import ClearIcon from '@material-ui/icons/Clear';
import FileDropComponent from "../FileDropComponent/FileDropComponent";
import './MainWindow.css'


const MainWindow: React.FC = () => {
    const [selectedJson, setSelectedJson] = useState<any>(null)
    const handleDrop = (name: string, newJson: object) => {
        const json = jsons.filter(item => item.name === name)
        setSelectedJson({...json[0], json: newJson})
    }

    const handleClickClear = () =>{
        setSelectedJson(null)
    }


    return (
        <>

            {selectedJson !== null
                ? <div>
                    <div className='clear-icon'>
                        <ClearIcon
                            onClick={handleClickClear}
                        />
                    </div>
                    <Editor json={selectedJson}/>
                </div>
                : <FileDropComponent handleDrop={handleDrop}/>
            }
        </>
    )
}
export default MainWindow
