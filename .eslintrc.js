module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier':0,
    "react-native/no-inline-styles": "off",
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        "react-native/no-inline-styles": "off",
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
