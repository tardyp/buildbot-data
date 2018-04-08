const babel = require('rollup-plugin-babel')
const typescript = require('rollup-plugin-typescript')
const replace = require('rollup-plugin-replace')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

export default [{
  input: './src/index.ts',
  output: {
    file: './dest/buildbot-data.js',
    format: 'umd',
    name:"buildbot-data",
  },
  plugins: [
  typescript({
    exclude: 'node_modules/**',
  }),
  commonjs({
    namedExports: {},
  }),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
]}
]
