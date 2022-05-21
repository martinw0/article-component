document.querySelector('.author .share').onclick = function() {
    document.querySelector('.author').style.display = 'none';
    document.querySelector('.share-banner').style.display = 'flex';
};
document.querySelector('.share-banner .bg-share').onclick = function() {
    document.querySelector('.share-banner').style.display = 'none';
    document.querySelector('.author').style.display = 'flex';
};