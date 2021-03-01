import ObjectField from "./ObjectField/ObjectField";
import ArrayField from "./ArrayField/ArrayField";
import StringField from "./StringtField/StringtField";

const EditWindowConstructor = (props) => {
    const type = props.field.type
    const renderField = () => {
        switch (type) {
            case "object":
                return <ObjectField {...props} />
            case "array":
                return <ArrayField {...props}/>
            case "string":
                return <StringField {...props}/>
            default:
                return null
        }
    }
    return (
        <div style={{marginTop: '10px', marginBottom: '10px' }}>
            {renderField()}
        </div>
    )
 }

 export default EditWindowConstructor
