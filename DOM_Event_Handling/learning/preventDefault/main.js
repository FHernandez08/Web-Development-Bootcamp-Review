const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link click prevented!');
});