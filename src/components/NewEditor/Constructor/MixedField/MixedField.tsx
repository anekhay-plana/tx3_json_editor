import * as React from "react";
import Constructor from "../Constructor";

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

const MixedField: React.FC<Props> = (props) => {
    const variants: any = Array.from(props.field['_whitelist'].list)
    const changedSchema = variants.findIndex(item => item.type === typeof props.json)
    return <Constructor {...props} field={variants[changedSchema]}/>
}

export default MixedField
