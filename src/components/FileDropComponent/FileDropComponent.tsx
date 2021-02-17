import React from 'react';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import {FileDrop} from 'react-file-drop';
import './FileDropComponennt.css'

interface Props {
    handleDrop: (name: string, json: object) => void
}

const FileDropComponent: React.FC<Props> = ({handleDrop}) => {

    const handleOnDrop = (files) => {
        let file = files[0];

        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
            const json = JSON.parse(String(reader.result))
            const jsonName = Object.keys(json)[0]
            handleDrop(jsonName, json);
        };
    }

    return (
        <div>
            <div className='drop-container'>
                <FileDrop
                    onDrop={handleOnDrop}
                >
                        {/*<SystemUpdateAltIcon*/}
                        {/*style={{color: '#92b0b3', fontSize: 48, }}*/}
                        {/*/>*/}
                        Drop file here!
                </FileDrop>
            </div>
        </div>
    );
};

export default FileDropComponent
