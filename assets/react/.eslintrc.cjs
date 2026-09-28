module.exports = {
  root: true, env: { browser: true, es2022: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  ignorePatterns: ['dist', 'node_modules'],
  extends: ['eslint:recommended'],
  rules: { 'no-unused-vars': 'off' },
  overrides: [{ files: ['**/*.ts', '**/*.tsx'], parser: '@typescript-eslint/parser', plugins: ['@typescript-eslint', 'react-hooks'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: { '@typescript-eslint/no-explicit-any': 'off', '@typescript-eslint/no-unused-vars': 'off', 'react-hooks/rules-of-hooks': 'error' } }],
};
