const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const angular = require('@angular-eslint/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');

module.exports = [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: 'tsconfig.json',
                sourceType: 'module',
            },
            globals: {
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                console: 'readonly',
                // Node.js globals
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
                global: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            '@angular-eslint': angular,
            'import': importPlugin,
            'jsdoc': jsdocPlugin,
        },
        rules: {
            // Angular rules
            '@angular-eslint/component-class-suffix': 'error',
            '@angular-eslint/directive-class-suffix': 'error',
            '@angular-eslint/no-input-rename': 'error',
            '@angular-eslint/no-output-on-prefix': 'error',
            '@angular-eslint/no-output-rename': 'error',
            '@angular-eslint/use-pipe-transform-interface': 'error',
            
            // TypeScript rules - verified for v8.x compatibility
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-inferrable-types': [
                'error',
                {
                    ignoreParameters: true,
                },
            ],
            
            // Standard ESLint 9.x rules
            'indent': ['error', 2],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'eol-last': 'error',
            'no-trailing-spaces': 'error',
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'space-before-blocks': 'error',
            'keyword-spacing': 'error',
            'space-infix-ops': 'error',
            'comma-spacing': 'error',
            'brace-style': ['error', '1tbs'],
            'curly': 'error',
            'eqeqeq': ['error', 'smart'],
            'no-empty': 'off',
            'no-unused-labels': 'error',
            'no-throw-literal': 'error',
            'no-new-wrappers': 'error',
            'no-eval': 'error',
            'no-fallthrough': 'error',
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-undef-init': 'error',
            'guard-for-in': 'error',
            'radix': 'error',
            'max-len': [
                'error',
                {
                    code: 140,
                },
            ],
            'spaced-comment': [
                'error',
                'always',
                {
                    markers: ['/'],
                },
            ],
            
            // Import rules
            'import/no-deprecated': 'warn',
            
            // JSDoc rules
            'jsdoc/no-types': 'error',
        },
    },
];
