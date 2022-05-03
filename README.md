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

- craco.config.js
    ```js script
    const postcssConfig = require('./postcss.config')
        module.exports = { style: {
        postcss: postcssConfig, },
        }
```

- postcss.config.js

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


