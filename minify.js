export function minifyJS(input) {
   // Remove multi-line comments (/* ... */)
   let output = input.replace(/\/\*[\s\S]*?\*\//g, '');
   
   // Remove single-line comments (// ...)
   output = output.replace(/\/\/.*/g, '');
   
   // Remove unnecessary whitespace
   output = output.replace(/\s{2,}/g, ' ');   // Replace multiple spaces with a single space
   output = output.replace(/\s*\n\s*/g, '');  // Remove new lines and surrounding spaces
   
   return output.trim();
}
