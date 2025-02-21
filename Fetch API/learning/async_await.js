// using async/await with fetch() makes the code easier to manage and read

async function loadImage() {
    const response = await fetch('file/api');
    const data = await response.json();
    renderImage(data); // function used to do something with the data from json
}