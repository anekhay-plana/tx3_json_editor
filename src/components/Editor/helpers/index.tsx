export function orderInTObj(target:any, source:any) {
    const newObj: any = new Object(null)
    const targetKeys = Object.keys(target)
    const sourceKeys = Object.keys(source)
    if (targetKeys.length !== sourceKeys.length){
        return source
    }
    for (let key of targetKeys) {
        if (typeof target[key] === 'string') {
            newObj[key] = source[key]
        } else {
            if (Array.isArray(target[key])) {
                if (target[key].length !== source[key].length) {
                    target[key].push(source[key][source[key].length - 1])
                }
                newObj[key] = target[key].map((item:any, i:number) => {
                    if (typeof item === 'string' || item === undefined) {
                        return source[key][i]
                    } else {
                        return orderInTObj(item, source[key][i])
                    }
                })
            } else {
                newObj[key] = orderInTObj(target[key], source[key])
            }
        }
    }
    return newObj;
}
