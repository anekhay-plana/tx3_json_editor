import * as React from 'react';
import './MainWindow.css'
import NewEditor from "../NewEditor/NewEditor";
import {yupSchema} from "../../json/schemes/checkSchema";


const MainWindow: React.FC = () => {
    return(
        <NewEditor yupSchema={yupSchema}/>
    )
}
export default MainWindow
