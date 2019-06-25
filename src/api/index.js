import { categories } from "./db/categories.json"
import { products } from "./db/products.json"

function getCategory(ids) {
    let i = 0
    let length = ids.length
    let obj = categories
    for (i; i < length; i++) {
        if (!obj)
            return false
        if (obj instanceof Array) {
            obj = obj.find(category => category.id == ids[i])
        } else {
            obj = obj.sublevels.find(category => category.id == ids[i])
        }
    }
    return obj
}

export { 
    categories,
    products,
    getCategory
}
