import FieldRenderer from "../../FieldКRenderer";
import './Object.css'

const ObjectField = ({object}) => {
    const keys = Object.entries(object)
    return (
        <div>
            {keys.map(key =>
                <div className='container'>
                    <div>{key[0]}</div>
                    <FieldRenderer json={key[1]}/>
                </div>
            )}
        </div>
    )
}
export default ObjectField
