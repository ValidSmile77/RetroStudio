document.getElementById('confirm-button').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const correctHash = '43cef886a52cfdb1744cdd28beeb0207228b2b9a69e150680e6300d5fc9e60db';

    if (hashedPassword === correctHash) {
        window.location.href = 'video.html';
    } else {
        alert('Incorrect password');
    }
});
