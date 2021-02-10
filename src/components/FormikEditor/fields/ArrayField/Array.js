import FieldRenderer from "../../FieldКRenderer";

const ArrayField = ({array}) => {
    return (
        <div>
            <div>
                {array.map(item => <FieldRenderer json={item}/>)}
            </div>
        </div>
    )
}
export default ArrayField
