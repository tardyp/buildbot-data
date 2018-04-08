class DataAccessor {
    constructor() {}
    get() {}
}
export class _DataService {
    handlers: DataAccessor[] = []
    constructor() {}
    open() {
        let h = new DataAccessor()
        this.handlers.push(h)
        return h
    }
}
export const DataService = new _DataService()
