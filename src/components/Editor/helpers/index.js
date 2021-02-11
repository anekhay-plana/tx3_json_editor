export function orderInTObj(target, bla) {
    const newObj = new Object(null)
    const targetKeys = Object.keys(target)
    const blaKeys = Object.keys(bla)
    if (targetKeys.length !== blaKeys.length){
        return bla
    }
    for (let key of targetKeys) {
        if (typeof target[key] === 'string') {
            newObj[key] = bla[key]
        } else {
            if (Array.isArray(target[key])) {
                if (target[key].length !== bla[key].length) {
                    target[key].push(bla[key][bla[key].length - 1])
                }
                newObj[key] = target[key].map((item, i) => {
                    if (typeof item === 'string' || item === undefined) {
                        return bla[key][i]
                    } else {
                        return orderInTObj(item, bla[key][i])
                    }
                })
            } else {
                newObj[key] = orderInTObj(target[key], bla[key])
            }
        }
    }
    return newObj;
}
