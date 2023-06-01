function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "https://i.pinimg.com/originals/0e/18/20/0e1820c0f379ce07fffb5b787846fa2a.jpg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "https://i.pinimg.com/originals/0e/18/20/0e1820c0f379ce07fffb5b787846fa2a.jpg";
    }
}



