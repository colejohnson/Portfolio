/**
 * Created by colejohnson on 4/9/15.
 */
var imgs = [
        'Media/bw-2.jpg',
        'Media/bw-4.jpg',
        'Media/bw-5.jpg',
        'Media/bw-6.jpg',
        'Media/bw-8.jpg',
        'Media/bw-9.jpg'],
    i = 0;
    fade = 1500;
    duration = 4500;
    load = true;

function slideShow() {
    nextSlide();
    setInterval(function() {
        nextSlide();
    }, duration);
}

function nextSlide() {
    var s = $('#slider');

    var newImg = $('<img class =\'slider-img\' src=\'' + imgs[i] + '\' width="100%" />');

    newImg.css('position', 'absolute').css('left', 0).css('right', 0).css('display', 'inline');

    s.children('.slider-img').css('z-index', '1');

    if(!load) {
        s.children('.slider-img').fadeOut(fade);
    }
    load = false;

    s.append(newImg);
    setTimeout(function() {
        s.html(newImg);
    }, fade);

    i++;
    if(i > imgs.length - 1) {
        i = 0;
    }
}

$(function() {
    slideShow();
});

