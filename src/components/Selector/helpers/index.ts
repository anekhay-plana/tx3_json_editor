export const createOption = (array) => {
    const options = array.map((item, i) => {
        return {
            label: item.label,
            value: item.schema
        }})
    return options
}
