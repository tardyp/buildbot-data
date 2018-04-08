import { isArray, isString } from './utils'


export type Order = Array<string> | string | undefined;
export type FilterValue = number | string | boolean | Array<number | string | boolean>;
export type Filter =  { [key: string]: FilterValue} | undefined;
export type Limit =  number | undefined;
export interface IQuery {
    order?: Order
    limit?: Limit;
    [key: string]: FilterValue|Order |Limit;
}

export class DataQuery {
    query: IQuery;
    filters: Filter;

    constructor(query: IQuery) {
        if (query == null) {
            query = {}
        }
        this.query = query
        this.filters = {}
        for (let fieldAndOperator in query) {
            if (['field', 'limit', 'offset', 'order', 'property'].indexOf(fieldAndOperator) < 0) {
                let value = query[fieldAndOperator] as FilterValue;
                if (['on', 'true', 'yes'].indexOf(value as string) > -1) {
                    value = true
                } else if (['off', 'false', 'no'].indexOf(value as string) > -1) {
                    value = false
                }
                this.filters[fieldAndOperator] = value
            }
        }
    }

    computeQuery(array: Array<object>) {
        // 1. filtering
        this.filter(array)

        // 2. sorting
        const order = this.query != null ? this.query.order : undefined
        this.sort(array, order)

        // 3. limit
        const limit = this.query != null ? this.query.limit : undefined
        return this.limit(array, limit)
    }
    isFiltered(v: {[key:string]: FilterValue}) {
        const cmpByOp = {}
        for (let fieldAndOperator in this.filters) {
            const value = this.filters[fieldAndOperator]
            let [field, operator] = fieldAndOperator.split('__')
            let cmp = false
            switch (operator) {
                case 'ne':
                    cmp = v[field] !== value
                    break
                case 'lt':
                    cmp = v[field] < value
                    break
                case 'le':
                    cmp = v[field] <= value
                    break
                case 'gt':
                    cmp = v[field] > value
                    break
                case 'ge':
                    cmp = v[field] >= value
                    break
                default:
                    if (v.hasOwnProperty(`_${field}`))
                        // private fields added by the data service
                        field = `_${field}`;

                    let toCmp = Array.from(v[field] as any);
                    let valueArray = Array.from(value as any);
            }
            cmpByOp[fieldAndOperator] = cmpByOp[fieldAndOperator] || cmp
        }
        for (let op of Object.keys(cmpByOp || {})) {
            v = cmpByOp[op]
            if (!v) {
                return false
            }
        }
        return true
    }

    filter(array) {
        let i = 0
        return (() => {
            const result = []
            while (i < array.length) {
                const v = array[i]
                if (this.isFiltered(v)) {
                    result.push((i += 1))
                } else {
                    result.push(array.splice(i, 1))
                }
            }
            return result
        })()
    }

    sort(array, order) {
        const compare = function(property) {
            let reverse = false
            if (property[0] === '-') {
                property = property.slice(1)
                reverse = true
            }

            return function(a, b) {
                if (reverse) {
                    ;[a, b] = Array.from([b, a])
                }

                if (a[property] < b[property]) {
                    return -1
                } else if (a[property] > b[property]) {
                    return 1
                } else {
                    return 0
                }
            }
        }
        if (isString(order)) {
            return array.sort(compare(order))
        } else if (isArray(order)) {
            return array.sort(function(a, b) {
                for (let o of Array.from(order)) {
                    const f = compare(o)(a, b)
                    if (f) {
                        return f
                    }
                }
                return 0
            })
        }
    }

    limit(array, limit) {
        return (() => {
            const result = []
            while (array.length > limit) {
                result.push(array.pop())
            }
            return result
        })()
    }
}
