import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import image from '@rollup/plugin-image'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { module } from './package.json'
import url from 'postcss-url'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: module,
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      image(),
      postcss({
        plugins: [url({ url: 'inline' })],
        extract: 'index.esm.css',
        minimize: true,
        sourceMap: false,
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'dayjs', 'palmpay-utils'],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.s?css$/, /\.svg$/, /\.png$/, /\.jpg$/, /\.jpeg$/, /\.gif$/],
  },
]
