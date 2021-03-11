import ObjectField from "./ObjectField/ObjectField";
import ArrayField from "./ArrayField/ArrayField";
import MixedField from "./MixedField/MixedField";
import StringField from "./StringField/StringField";

const Constructor = (props) => {
    const type = props.field.type
    const renderField = () => {
        switch (type) {
            case "object":
                return <ObjectField {...props} />
            case "array":
                return <ArrayField {...props}/>
            case "mixed":
                return <MixedField {...props}/>
            case "string":
                return <StringField {...props}/>
            default:
                return null
        }
    }
    return renderField()
}

export default Constructor
