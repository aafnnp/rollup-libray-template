import {nodeResolve} from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
const isDev = process.env.NODE_ENV === 'development';

const input = ['src/index.js'];

export default [
  {
    // UMD
    input,
    plugins: [nodeResolve(), babel({babelHelpers: 'bundled'}), terser()],
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      name: 'utils',
      esModule: false,
      exports: 'named',
      sourcemap: true
    }
  },

  // ESM & CJS
  {
    input,
    plugins: [nodeResolve()],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      }
    ]
  }
];
