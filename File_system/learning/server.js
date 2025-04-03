const fs = require('fs');
const EventEmitter = require('events');

// Custom EventEmitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Event Listener for file operations
myEmitter.on('fileProcessed', (filename) => {
    console.log(`File processing completed: ${filename}`);
});

// Writing to the sample.txt file
fs.writeFile('sample.txt', 'Hello, this is a new content written to the file!', (err) => {
    if (err) {
        console.log('Error writing file:', err);
    }
    else {
        console.log('File written successfully');
        myEmitter.emit('fileProcessed', 'sample.txt'); // Corrected

        // Streaming file data using createReadStream
        const readStream = fs.createReadStream('sample.txt', { encoding: 'utf-8' });

        readStream.on('data', (chunk) => {
            console.log('Reading chunk:', chunk);
        });

        readStream.on('end', () => {
            console.log('Finished reading file.');
        });

        readStream.on('error', (err) => {
            console.error('Error reading file:', err);
        });
    }
});
