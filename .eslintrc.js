module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: {
        react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', // Vite + React 17 이상에선 필요 없음
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
};
