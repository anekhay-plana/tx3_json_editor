import * as React from 'react';
import './MainWindow.css'
import NewEditor from "../NewEditor/NewEditor";
import {SynchronizationPolicySchema} from "../../json/schemes/SynchronizationPolicy";
import {ApprovalPolicySchema} from "../../json/schemes/ApprovalPolicy";


const MainWindow: React.FC = () => {
    return (
        <div>
            <NewEditor yupSchema={ApprovalPolicySchema}/>
        </div>
    )
}
export default MainWindow
