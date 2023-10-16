module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'prettierrc.js',
    'next.config.js',
    'build/',
    'bin/',
    'obj/',
    'out/',
    '.next/',
    'jest.config.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 関数コンポーネントにアロー関数を使用する
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    // 関数の返り値に型定義を必要とする
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // デフォルトエクスポートを使用しない
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      //importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
