const fs = require('fs');
const path = require('path');

export function minifyJS(inputFile) {
    const outputFile = path.basename(inputFile, path.extname(inputFile)) + '.min.js';

    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${inputFile}:`, err);
            return;
        }
        // Remove single-line comments
        let minified = data.replace(/\/\/.*$/gm, '');

        // Remove multi-line comments
        minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');

        // Remove leading and trailing whitespace
        minified = minified.trim();

        // Remove multiple spaces
        minified = minified.replace(/\s+/g, ' ');

        // Remove space around certain characters
        minified = minified.replace(/\s*([=+\-*/:;{}(),])\s*/g, '$1');


        fs.writeFile(outputFile, minified, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file ${outputFile}:`, err);
                return;
            }
            console.log(`Minified JavaScript written to ${outputFile}`);
        });
    });
}
