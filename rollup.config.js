// import babel from 'rollup-plugin-babel'
// import commonjs from 'rollup-plugin-commonjs'
// import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss'
// import resolve from 'rollup-plugin-node-resolve'
// import url from 'rollup-plugin-url'
// import svgr from '@svgr/rollup'

import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Tree'
    },
    {
      file: pkg.main,
      name: 'TreeReact',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es', // es
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize()
  ]
  // plugins: [
  //   external(),
  //   postcss({
  //     modules: true
  //   }),
  //   url(),
  //   svgr(),
  //   babel({
  //     exclude: 'node_modules/**',
  //     plugins: [ 'external-helpers' ]
  //   }),
  //   resolve(),
  //   commonjs()
  // ]
}
