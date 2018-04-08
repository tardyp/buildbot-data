# buildbot-data
> data accessors for buildbot websocket and REST APIs

## design principles

The goal of this module is to rewrite the buildbot data module as an es6 module:

- Typescript is used in order to add IDE type hints to the API.
- All methods should be properly typed using typescripts.
- API should be kept the same as the buildbot-data-module as it is proven, easy to use, and this will allow easy porting of the main app to this module.
- Internal implementation can be changed in order to be simplified with typescript features.

- The module is intended to be imported using e.g. webpack external dependency:

```javascript
// https://webpack.js.org/configuration/externals/
externals: {
  buildbot-data: {'root': 'buildbot-data'}  // this means that buildbot-data is available in window['buildbot-data']
}
```
## Setup

```js
# install deps
yarn install

# build app
yarn run build

# build & watch app
yarn run watch

# build & launch app
yarn run start

# run unit test
yarn run test
```

## License

&copy; [tardyp](mailto:tardyp@gmail.com)
