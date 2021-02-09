export const sorterJson = (object, order) => {
    const firstKey = Object.keys(object)[0]
    let sortObject = order.reduce((acc, cur) => ({ ...acc, [cur]: object[firstKey][cur] }), {})
    const json = {[firstKey]: sortObject}
    return  json
}
