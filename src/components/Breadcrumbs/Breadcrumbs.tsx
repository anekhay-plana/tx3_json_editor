import './Breadcrumbs.css'

interface Props {
    onClickSearchWay?: any
    way?: any
}

const Breadcrumbs: React.FC<Props> = (props) => {
    const wayMap = props.way.split('>')

    const handleClick = (i) => {
        let targetWay = ''
        for(let word=0; word<=i;word++){
            targetWay=targetWay+wayMap[word]+'>'
        }
        props.onClickSearchWay(targetWay.slice(0,-1))
    }

    return (
        <div className='boba'>
            {wayMap.map((item,i)=>
                <div
                    className='breadcrumbs-word'
                    onClick={()=>handleClick(i)}
                >
                    {item+(i === wayMap.length-1?'':'>')}
                </div>

            )}
        </div>
    )
}

export default Breadcrumbs
