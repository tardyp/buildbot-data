import { DataService } from '../data'
declare const it: any
declare const expect: any

it('open should return an accessor', () => {
    var accessor = DataService.open()
    expect(accessor).toBeDefined()
})
