import commonjs from '@rollup/plugin-commonjs'
// eslint-disable-next-line import/no-named-as-default
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import rollupPluginDts from 'rollup-plugin-dts'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [rollupPluginDts()],
  },
]
