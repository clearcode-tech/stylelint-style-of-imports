const pluginName = 'stylelint-style-of-imports';
const ruleName = `plugin-${ pluginName }/${ pluginName }`;
const startSymbolWarning = `Forbidden start symbols in import statements (${ruleName})`;
const fileExtensionWarning = `Avoid file extensions in import statements (${ruleName})`;

module.exports = {
    [ruleName]: [
        {
            source: '@import \'src/styles/mixins\'',
            warnings: 0
        },
        {
            source: '@import \'~src/styles/mixins\'',
            warnings: [startSymbolWarning]
        },
        {
            source: '@import \'src/styles/mixins/flex.css\'',
            warnings: [fileExtensionWarning]
        },
        {
            source: '@import \'-src/styles/mixins/grid.css\'',
            args: [
                true,
                {
                    disallowStartSymbols: '-',
                    disallowExtension: true,
                }
            ],
            warnings: [startSymbolWarning, fileExtensionWarning]
        },
    ]
}
