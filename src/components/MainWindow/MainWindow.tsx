import * as React from 'react';
import NewEditor from "../NewEditor/NewEditor";
import {RecordsManagementPolicySchema} from "../../json/schemes/RecordsManagementPolicy";
import {RecordsManagementPolicy} from "../../json/RecordsManagementPolicy";
import './MainWindow.css'

const MainWindow: React.FC = () => {
    const [selectedJson, setSelectedJson] = React.useState<any>(null)
    const handleDrop = (name: string, newJson: object) => {
        const json = selectedJson.filter(item => item.name === name)
        setSelectedJson({...json[0], json: newJson})
    }

    const handleChangeFile = (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
            const json = JSON.parse(String(reader.result))
            console.log('LOOG bob', json)
        };
        //Make a request to server and send formData
    }

    return (
        <>
            <div>
                <input type='file' onChange={handleChangeFile}/>
            </div>
            <div>
                <NewEditor yupSchema={RecordsManagementPolicySchema} json={RecordsManagementPolicy}/>
            </div>
        </>
    )
}
export default MainWindow
