import * as React from "react";
import { useState} from "react";
import Constructor from "./Constructor/Constructor";
import EditWindow from "./EditWindow/EditWindow";
import './NewEditor.css'

interface Props {
    yupSchema: any
    json: object
    onChange: (object:object)=> void
    searchWay:string
    onClickSearchWay:(string)=> void
}

const NewEditor: React.FC<Props> = ({yupSchema,json,onChange,searchWay,onClickSearchWay}) => {
    console.log('LOOG', json)
    const [selectedItem, setSelectedItem] = useState<object >()

    const handleClickElement = (field, json, onChange, name, onClick,way) => {
        onClickSearchWay(way)
        const selected = {name, field, json, onChange, onClick}
        setSelectedItem(selected)
    }

    return (
        <div className='container'>
            <div className='json-tree-window'>
                <div>
                    <Constructor
                        field={yupSchema}
                        json={json}
                        onChange={onChange}
                        onClick={handleClickElement}
                        searchWay={searchWay}
                    />
                </div>
            </div>

            <div className='json-editor-window'>
                {selectedItem &&
                <EditWindow {...selectedItem} way={searchWay} onClickSearchWay={onClickSearchWay}/>
                }
            </div>
        </div>
    )
}

export default NewEditor
