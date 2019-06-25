/**
 * returns a path for a certain position of ids iteration
 * @param {Array} ids 
 * @param {Number} actualIndex 
 */
function buildCategoriesPath(ids, actualIndex) {
    let path = '/categories/'
    const final = actualIndex + 1
    for (let i = 0; i < final; i++) {
        path += ids[i] + '/'
    }

    path = path.substr(0, path.length-1);
    
    return path
}

export {
    buildCategoriesPath
}
