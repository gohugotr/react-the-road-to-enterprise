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
            postcss: postcssConfig, },
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
                require('precss'), require('postcss-preset-env'),
                // uncomment if you're using Tailwind
                require('tailwindcss')('tailwind.config.js'), require('postcss-nested'), require('autoprefixer')(), require('postcss-reporter'),
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
