describe 'Data service', ->
    beforeEach module 'bbData'

    dataService = null

    injected = ($injector) ->
        dataService = $injector.get('dataService')

    beforeEach(inject(injected))

    it 'should be defined', ->
        expect(dataService).toBeDefined()

    # TODO ...
    
