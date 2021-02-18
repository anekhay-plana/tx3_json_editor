import Constructor from "../Constructor";
import './ObjectField.css'

interface Props {
    field: any
    json: any
}

const ObjectField: React.FC<Props> = ({field, json}) => {
    const fields = Object.keys(field.fields)
    return (
        <div className='object-container'>
                {fields.map((item, i) =>
                    <div key={i} className='object-child-container'>
                        <Constructor field={field.fields[item]} json={json[item]} name={item}/>
                    </div>
                )}
        </div>
    )
}

export default ObjectField
