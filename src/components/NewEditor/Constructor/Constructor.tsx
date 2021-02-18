import ObjectField from "./ObjectField/ObjectField";
import ArrayField from "./ArrayField/ArrayField";
import StringField from "./StringtField/StringtField";

interface Props {
    field: any
    json: any
    name? :string
    onChange: any
}

const Constructor: React.FC<Props> = (props) => {
    const type = props.field.type
    const renderField = () => {
        switch (type){
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
    return renderField()
}

export default Constructor
