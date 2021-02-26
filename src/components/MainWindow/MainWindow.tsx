import * as React from 'react';
import NewEditor from "../NewEditor/NewEditor";
import {RecordsManagementPolicySchema} from "../../json/schemes/RecordsManagementPolicy";
import './MainWindow.css'



const MainWindow: React.FC = () => {
    return (
        <div>
            <NewEditor yupSchema={RecordsManagementPolicySchema}/>
        </div>
    )
}
export default MainWindow
