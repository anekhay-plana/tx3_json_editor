export function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        if(typeof v !== 'string'){
            obj[k] = strMapToObj(v)
        }
        else {
            obj[k] = v;
        }
    }
    return obj;
}
export function objToStrMap(obj1,obj2) {
    let strMap = new Map();
    const keys = Object.keys(obj1)
    for (let k of keys) {
        if(typeof obj1[k]!== 'string'){
            strMap.set(k, objToStrMap(obj1[k],obj2[k]));
        }else {
            strMap.set(k, obj2[k])
        }
    }
    return strMap ;
}
