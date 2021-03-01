export const createEmptyJsonObject = (schema) => {
    const newObj = new Object(null)
    for (const key in schema.fields){
        switch (schema.fields[key].type){
            case 'string':
                newObj[key] = ''
                break
            case 'array':
                newObj[key] = []
                break
            case 'object':
                newObj[key] = createEmptyJsonObject(schema.fields[key])
                break
            default:
                return null
        }
    }
    return newObj
}
