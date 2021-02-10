import ArrayField from "./fields/ArrayField/Array";
import ObjectField from "./fields/ObjectField/Object";
import StringField from "./fields/StringField/StringField";


const FieldRenderer = ({json}) => {
    const type = typeof json
    const renderContent = () => {
        switch (type) {
            case "string":
                return <StringField string={json}/>
            case "object":
                if (Array.isArray(json))
                    return <ArrayField array={json}/>
                else
                    return <ObjectField object={json}/>
            default:
                return null
        }

    }
    return renderContent()
}
export default FieldRenderer

