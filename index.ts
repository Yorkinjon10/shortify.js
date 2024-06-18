import { dirname, fromFileUrl, join } from "https://deno.land/std/path/mod.ts";

function minifyJS(input) {
    // Remove multi-line comments (/* ... */)
    let output = input.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove single-line comments (// ...)
    output = output.replace(/\/\/.*/g, '');
    
    // Remove unnecessary whitespace
    output = output.replace(/\s{2,}/g, ' ');   // Replace multiple spaces with a single space
    output = output.replace(/\s*\n\s*/g, '');  // Remove new lines and surrounding spaces
    
    return output.trim();
}

export async function readAndMinifyJS(inputFile: string) {
    try {
        // Read the input JavaScript file
        const inputJS = await Deno.readTextFile(inputFile);
        
        // Minify the JavaScript content
        const minifiedJS = minifyJS(inputJS);
        
        // Write the minified content to the output file
        const __dirname = dirname(fromFileUrl(import.meta.url));

        const outputFile  = join(__dirname, inputFile.split(".")[0] + ".min.js");;
        await Deno.writeTextFile(outputFile, minifiedJS);
        
        console.log(`Minification complete. Output written to ${outputFile}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage
// const inputFile = 'input.js';
// readAndMinifyJS(inputFile);
