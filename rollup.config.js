import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import analyze from 'rollup-plugin-analyzer'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import external from 'rollup-plugin-peer-deps-external'

const config = {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/es/',
      format: 'es',
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
  ],
  preserveModules: true,
  plugins: [
    external(),
    copy({
      targets: [
        {
          src: 'src/_assets/*',
          dest: 'dist/es/_assets',
        },
      ],
    }),
    nodeResolve(),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      // plugins: ['babel-plugin-styled-components'],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    url(),
    analyze(),
  ],
}

export default config
