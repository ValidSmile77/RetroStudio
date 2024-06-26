document.getElementById('confirm-button').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password === 'RETROSTUDIOSOVERLORD') {
        window.location.href = 'video.html';
    } else {
        alert('Incorrect password');
    }
});
