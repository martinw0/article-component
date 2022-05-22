document.querySelector('.author .bg-share').onclick = function() {
    if (window.matchMedia("(min-width: 600px)").matches) {
        if (document.querySelector('.author .bg-share').classList.contains('active')) {
            document.querySelector('.author .bg-share').classList.remove('active');
            document.querySelector('.share-banner').style.display = 'none';
        }
        else  {
            document.querySelector('.author .bg-share').classList.add('active');
            document.querySelector('.share-banner').style.display = 'flex';
        }
      } else {
        document.querySelector('.author').style.display = 'none';
        document.querySelector('.share-banner').style.display = 'flex';
      }

};
document.querySelector('.share-banner .bg-share2').onclick = function() {
    document.querySelector('.share-banner').style.display = 'none';
    document.querySelector('.author').style.display = 'flex';
};