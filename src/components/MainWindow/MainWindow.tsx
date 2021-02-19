import * as React from 'react';
import './MainWindow.css'
import NewEditor from "../NewEditor/NewEditor";
import {SynchronizationPolicySchema} from "../../json/schemes/SynchronizationPolicy";


const MainWindow: React.FC = () => {
    return (
        <div>
            <NewEditor yupSchema={SynchronizationPolicySchema}/>
        </div>
    )
}
export default MainWindow
