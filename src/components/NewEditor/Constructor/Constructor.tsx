import ObjectField from "./ObjectField/ObjectField";
import ArrayField from "./ArrayField/ArrayField";

interface Props {
    field?: any
    json?: any
    name?: string
    onChange?: any
    onClick?: any
    childName?:string
    searchWay: string
    openPatent?: any
    way?:string
}

const Constructor: React.FC<Props> = (props) => {
    const type = props.field.type
    const renderField = () => {
        switch (type) {
            case "object":
                return <ObjectField {...props} />
            case "array":
                return <ArrayField {...props}/>
            default:
                return null
        }
    }
    return renderField()
}

export default Constructor
