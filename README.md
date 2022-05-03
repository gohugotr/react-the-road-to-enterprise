# Getting Started with Create React App

## Kurulum

`yarn create react-app react-the-road-to-enterprise --template typescript`

`npm init react-app react-the-road-to-enterprise -- --template typescript`

### npx

`npx create-react-app react-the-road-to-enterprise --template typescript`

- `yarn add @craco/craco`

- **package.json**

```js script
    "scripts": {
        "start": "craco start", "build": "craco build", "test:unit": "craco test"
    }
```

- `npm install -D stylelint@13.13.1 postcss-import@12.0.1 postcss-extend@1.0.5 postcss-nested@4.2.3 postcss-preset-env@6.7.0 postcss-reporter@6.0.1 precss@4.0.0`

- **craco.config.js**

```js script
const postcssConfig = require('./postcss.config')
module.exports = {
  style: {
    postcss: postcssConfig,
  },
}
```

- **postcss.config.js**
  ```js script
  module.exports = {
    plugins: [
      require('stylelint')({
        configFile: 'stylelint.config.js',
      }),
      require('postcss-extend'),
      require('precss'),
      require('postcss-preset-env'),
      // uncomment if you're using Tailwind
      require('tailwindcss')('tailwind.config.js'),
      require('postcss-nested'),
      require('autoprefixer')(),
      require('postcss-reporter'),
    ],
  }
  ```
- `npm install -D stylelint-config-css-modules stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard stylelint-scss`

- **stylelint.config.js**

```js script
module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['./coverage/**/*.css', './dist/**/*.css'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // --------
          // Tailwind
          // --------
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-no-duplicate-custom-properties': null,
    'named-grid-areas-no-invalid': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'string-no-newline': null,
    // Use camelCase for classes and ids only. Works better with CSS modules
    // 'selector-class-pattern': /^[a-z][a-zA-Z]*(-(enter|leave)(-(active|to))?)?$/,
    // 'selector-id-pattern': /^[a-z][a-zA-Z]*$/,
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1,
    // --------
    // SCSS rules
    // --------
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^[a-z-]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    // Allow SCSS and CSS module keywords beginning with `@`
    'scss/at-rule-no-unknown': null,
  },
}
```

- **vscode.settings** ayarlarına eklenenler

```js script
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "vetur.validation.style": false,
```

- `yarn add node-sass`
- `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
- `npm install -D @tailwindcss/forms`
- `npx tailwindcss init -p`
- **tailwind.config.js**

```js script
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
```
- **src/index.css**
```js script
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- **prettier.config.js**
```js script
module.exports = {
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}
```
import yapılırken artık aşağıdaki gibi yapabiliriz. Bunu yapmak için önce **craco** için ***craco-alias*** adlı bir eklenti kurmamız gerekiyor.
```js script
// ugly
import Component from '../../../components/common/MyComponent'
// nice
import Component from '@/components/common/Component'
```
- `yarn add craco-alias --dev`
```js script
const postcssConfig = require('./postcss.config')
const cracoAlias = require('craco-alias')
module.exports = {
  style: {
    postcss: postcssConfig,
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './',
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
are specified*/
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
```
`source` , `baseUrl` ve `tsConfigPath` özelliklerini belirtmemiz gerekiyor. Henüz `tsconfig.paths.json` dosyamız yok, onu oluşturalım.
- **tsconfig.paths.json**