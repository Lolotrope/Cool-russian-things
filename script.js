document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu') && !event.target.closest('.menu-button')) {
        document.querySelector('.menu').style.display = 'none';
    }
});