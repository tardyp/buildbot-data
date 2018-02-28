const eslint = require('rollup-plugin-eslint')
const babel = require('rollup-plugin-babel')
const typescript = require('rollup-plugin-typescript')
const replace = require('rollup-plugin-replace')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

export default {
  entry: './src/index.js',
  dest: './dest/bundle.js',
  format: 'cjs',
  plugins: [
    eslint(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
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
  ]
}
