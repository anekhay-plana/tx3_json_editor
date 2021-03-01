import * as React from 'react';
import NewEditor from "../NewEditor/NewEditor";
import Schemes from "../../json/schemes";
import Selector from "../Selector/Selector";
import {createEmptyJsonObject} from "./helpers";
import {useEffect, useRef, useState} from "react";
import Button from "./Button/Button";
import './MainWindow.css'
import ViewJson from "../ViewJson/ViewJson";


const MainWindow: React.FC = () => {
    const publishRef: any = useRef();
    const [selectedSchema, setSelectedSchema] = React.useState<any>(Schemes[0])
    const [json, setJson] = React.useState<any>(createEmptyJsonObject(selectedSchema.value))
    const [mod, setMod] = useState(true)

    const handleChangeSelector = (e) => {
        setSelectedSchema(e)
    }

    const handleChange = (object) => {
        setJson(object)
    }

    useEffect(() => {
        const {current} = publishRef;
        if (!current) {
            return;
        }
        current.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json, null, 2)));
        current.setAttribute('download', `${selectedSchema.label}.json`);
    }, [json])

    useEffect(() => {
        handleClickCreateNewJson()
    }, selectedSchema)

    const handleClickCreateNewJson = () => {
        setJson(createEmptyJsonObject(selectedSchema.value))
    }

    const handleChangeFile = (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
            const selectedJson = JSON.parse(String(reader.result))
            const firstKey = Object.keys(selectedJson)[0]
            Schemes.forEach((item, i) => {
                    if (item.label === firstKey) {
                        setJson(selectedJson)
                        setSelectedSchema(Schemes[i])
                    }
                }
            )
        };
    }
    return (
        <>
            <div className='actions'>
                <Selector variants={Schemes} handleChange={handleChangeSelector} selected={selectedSchema}/>
                <Button text={'Create'} onClick={handleClickCreateNewJson}/>
                or
                <div className='add-input'>
                    <input type='file' onChange={handleChangeFile}/>
                </div>
                <div className='publish'>
                    <a ref={publishRef}>
                        <Button text={'Publish'} onClick={() => {
                        }}/>
                    </a>
                </div>
            </div>
            <div>
                <div className='mod-selector'>
                    <button onClick={()=>setMod(true)}>editor</button>
                    <button onClick={()=>setMod(false)}>json</button>
                </div>
            {mod
                ? <NewEditor yupSchema={selectedSchema.value} json={json} onChange={handleChange}/>
                : <ViewJson data={json} onChange={handleChange}/>
            }
            </div>
        </>
    )
}
export default MainWindow
