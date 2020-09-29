document.addEventListener('keypress', logKey);

function logKey(e) {
    const metaData = document.getElementsByClassName('keyData');
    metaData[0].textContent = e.key;
}
