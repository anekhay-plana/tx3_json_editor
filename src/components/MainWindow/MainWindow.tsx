import * as React from 'react';
import './MainWindow.css'
import NewEditor from "../NewEditor/NewEditor";
import {SynchronizationPolicySchema} from "../../json/schemes/SynchronizationPolicy";
import {ApprovalPolicySchema} from "../../json/schemes/ApprovalPolicy";
import {RecordsManagementPolicySchema} from "../../json/schemes/RecordsManagementPolicy";



const MainWindow: React.FC = () => {
    return (
        <div>
            <NewEditor yupSchema={RecordsManagementPolicySchema}/>
        </div>
    )
}
export default MainWindow
