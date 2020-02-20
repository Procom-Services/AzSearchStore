import * as objectAssign from "object-assign";
export function updateObject(oldObject, newValues) {
    return objectAssign({}, oldObject, newValues);
}
export function updateObjectAtKey(oldObject, entry, key) {
    var newObject = {};
    newObject[key] = entry;
    return updateObject(oldObject, newObject);
}
// todo(evboyle): create reducer util
//# sourceMappingURL=reducerUtils.js.map