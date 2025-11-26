// https://leetcode.com/problems/check-if-object-instance-of-class/description/

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
function checkIfInstanceOf(obj, classFunction) {
    while (obj != null) {
        if (obj.constructor === classFunction) return true
        obj = Object.getPrototypeOf(obj)
    }
    return false
};


/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
