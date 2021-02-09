import './CustomObjectField.css'

const CustomObjectField = (props) => {
    return (
    <div className='container-field'>
        {props.title&&
            <div className='title'>{props.title}</div>
        }
            {props.properties.map(element => <div className="children-container">{element.content}</div>)}
    </div>
    )
}
export default CustomObjectField
