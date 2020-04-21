import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';


export default {
    input: 'src/index.ts',
    output: {
      file: 'dist/main.js',
      format: 'cjs'
    },
    external: [
        'react',
        'react-native'
    ],
    plugins: [
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: ["**/__tests__"]
        }),
        babel({
            exclude: ['node_modules/**'],
            extensions: [
                ...DEFAULT_EXTENSIONS,
                'jsx',
                '.ts',
                '.tsx'
            ]
        }),
    ]
};