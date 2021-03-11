import * as React from 'react';
import NewEditor from "../NewEditor/NewEditor";
import Schemes from "../../json/schemes";
import Selector from "../Selector/Selector";
import {createEmptyJsonObject} from "./helpers";
import {useEffect, useRef, useState} from "react";
import Button from "./Button/Button";
import ViewJson from "../ViewJson/ViewJson";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import './MainWindow.css'


const MainWindow: React.FC = () => {
    const publishRef: any = useRef();
    const [selectedSchema, setSelectedSchema] = React.useState<any>(Schemes[1])
    const [json, setJson] = React.useState<any>(createEmptyJsonObject(Schemes[1].value))
    const [mod, setMod] = useState('editor')
    const [searchWay, setSearchWay] = useState('')


    const handleChangeSelector = (e) => {
        setSelectedSchema(e)
    }

    const onClickSearchWay = (way) => {
        setSearchWay(way)
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
    }, [selectedSchema])

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
            console.log('selectedJson', selectedJson)
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
        <div className='main-container'>
            <div className='actions'>
                <Selector variants={Schemes} handleChange={handleChangeSelector} selected={selectedSchema}/>
                <Button text={'Create'} onClick={handleClickCreateNewJson}/>
                or
                <div className='add-input'>
                    <label htmlFor="upload-photo">Browse for a file...
                        <input type="file" name="photo" id="upload-photo" onChange={handleChangeFile}/>
                    </label>
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
                    <div
                        className={mod === 'editor' ? 'mod-selector-button selected-mod' : 'mod-selector-button'}
                        onClick={() => setMod('editor')}
                    >
                        editor
                    </div>
                    <div
                        className={mod === 'json' ? 'mod-selector-button selected-mod' : 'mod-selector-button'}
                        onClick={() => setMod('json')}
                    >
                        json
                    </div>
                    <Breadcrumbs way={searchWay} onClickSearchWay={onClickSearchWay}/>
                </div>
                {mod === 'editor'
                    ? <NewEditor yupSchema={selectedSchema.value}
                                 json={json}
                                 onChange={handleChange}
                                 searchWay={searchWay}
                                 onClickSearchWay={onClickSearchWay}
                    />
                    : <ViewJson data={json} onChange={handleChange}/>
                }
            </div>
        </div>
    )
}
export default MainWindow
