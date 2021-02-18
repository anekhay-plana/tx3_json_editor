import Constructor from "../Constructor";
import './ObjectField.css'

interface Props {
    field: any
    json: any
    onChange:any
    name?: string|number
}

const ObjectField: React.FC<Props> = ({field, json,  onChange,name}) => {
    const onChangeInObject = (key, value)=>{
        if(name || name === 0) {
            onChange(name,{...json, [key]: value})
        }else{
            onChange({...json, [key]: value})
        }
    }
    const fields = Object.keys(field.fields)
    return (
        <div className='object-container'>
                {fields.map((item, i) =>
                    <div key={i} className='object-child-container'>
                        <Constructor
                            field={field.fields[item]}
                            json={json[item]}
                            name={item}
                            onChange={onChangeInObject}/>
                    </div>
                )}
        </div>
    )
}

export default ObjectField
