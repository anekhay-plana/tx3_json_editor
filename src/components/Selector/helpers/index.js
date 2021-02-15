export const createOption = (array) => {
    const options = array.map((item, i) => {
        return {
            value: i,
            label: item.name
        }})
    return options
}
