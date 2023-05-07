const back = document.querySelector('.img-back');

window.addEventListener('scroll', () => {
    changIm();
})

function  changIm() {
    size = window.pageYOffset;
    console.log(size);
    console.log(1 - size / 900);
    back.style.opacity = 1 - size / 1000;

    back.style.backgroundSize = 160 - size / 14 + '%';

}