import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';


export default {
    input: 'src/index.ts',
    output: {
      dir: 'output',
      format: 'umd',
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescript(), buble()]
  };