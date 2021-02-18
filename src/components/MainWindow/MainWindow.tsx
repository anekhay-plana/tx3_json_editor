import * as React from 'react';
import './MainWindow.css'
import NewEditor from "../NewEditor/NewEditor";
import {SynchronizationPolicy} from "../../json/schemes/SynchronizationPolicy";


const MainWindow: React.FC = () => {
    return (
        <div>
            <NewEditor yupSchema={SynchronizationPolicy}/>
        </div>
    )
}
export default MainWindow
