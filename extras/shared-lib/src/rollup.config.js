import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular';

import path from 'path';

const inputPath = path.join(__dirname, 'ts');
const outputPath = path.join(__dirname, '..', 'dist');

export default {
  // starting point for transpiling
  entry: path.join(inputPath, 'index.ts'),
  // output from transpiling process
  dest: path.join(outputPath, 'index.js'),
  // output as commonjs
  format: 'cjs',
  plugins: [
    // process Angular style and template urls in components
    angular(),
    // process with local typescript, not global typescript
    typescript({
      typescript: require("typescript"),
    }),
    // resolve node modules for ES2015 import
    nodeResolve({ jsnext: true, main: true, module: true }),
    // add support for commonjs for node modules
    commonjs(),
  ],
  exports: 'named',
  // generate source maps
  sourceMap: true,
  // assume these will exist in the target environment, do not try to import them
  external: [
    '@angular/core',
    '@angular/common'
  ]
};
