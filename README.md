# stylelint-style-of-imports
A custom stylelint rule to catch usage of `@import` statement files beginning with chosen characters or ends with filename extensions.

## Usage

Add `"stylelint-style-of-imports"` to your stylelint config `plugins` array, then add `plugin-stylelint-style-of-imports/stylelint-style-of-imports` to your rules, set to your preferred options.

As follows:

```js
{
    "plugins": [
        "stylelint-style-of-imports"
    ],
    "rules": {
        "plugin-stylelint-style-of-imports/stylelint-style-of-imports": true,
    }
};
```

Or:

```js
{
    "plugins": [
        "stylelint-style-of-imports"
    ],
    "rules": {
        "plugin-stylelint-style-of-imports/stylelint-style-of-imports": [true, {
            disallowExtension: true,
            disallowStartSymbols: '~'
        }]
    }
};
```
