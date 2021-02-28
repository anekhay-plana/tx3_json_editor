import * as React from "react";
import {useState} from "react";
import {RecordsManagementPolicy} from "../../json/RecordsManagementPolicy";
import Constructor from "./Constructor/Constructor";
import './NewEditor.css'
import EditWindow from "./EditWindow/EditWindow";

interface Props {
    yupSchema: any
}

const NewEditor: React.FC<Props> = ({yupSchema}) => {
    const [formData, setFormData] = useState(RecordsManagementPolicy)
    const [selectedItem, setSelectedItem] = useState<object >()

    const handleClickElement = (field, json, onChange, name, onClick,way) => {
        const selected = {name, field, json, onChange, onClick,way}
        setSelectedItem(selected)
    }

    const handleChange = (object) => {
        setFormData(object)
    }

    return (
        <div className='container'>
            <div className='json-tree-window'>
                <div>
                    <Constructor
                        field={yupSchema}
                        json={formData}
                        onChange={handleChange}
                        onClick={handleClickElement}
                        selected={selectedItem}
                    />
                </div>
            </div>

            <div className='json-editor-window'>
                {selectedItem &&
                <EditWindow {...selectedItem}/>
                }
            </div>
        </div>
    )
}

export default NewEditor
