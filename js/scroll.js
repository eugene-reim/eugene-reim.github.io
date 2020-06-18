/*------------- Scrolling Handle -------------*/
let $ = (elem) => { return document.querySelectorAll(elem) },
    section = document.querySelectorAll("section"),
    html = $('html')[0],
    currentSection = 0,
    isScrolling = false;
$(".wrapper")[0].onwheel = e => {
    e.preventDefault();
    if (!isScrolling) scrollTo(e.deltaY < 0 ? 1 : 0);
}
document.addEventListener('keydown', e => {
    e.preventDefault()
    if (isScrolling) return;
    if (e.code == 'ArrowUp' || e.code == 'ArrowLeft') scrollTo(1);
    if (e.code == 'ArrowDown' || e.code == 'ArrowRight') scrollTo(0);
});
function scrollTo(d) {
    isScrolling = true;
    if (!d && currentSection < section.length - 1) currentSection++
    else if (d && currentSection > 0) currentSection--;
    return doScroll(section[currentSection]), $("#ic-" + currentSection)[0].classList.add("selected"),
        setTimeout(() => {
            isScrolling = false;
        }, 500)
}

function doScroll(e, t) {
    $('.list .selected').forEach(n => n.classList.remove('selected'))
    if (t) e.classList.add("selected"), e = $('.' + t)[0], currentSection = parseInt(t.split("").slice(-1)[0]) - 1;
    if (currentSection == 1) $('.p-progress').forEach((n, i) => {
        if (i == 0) n.style["width"] = "80%", n.style["transition-delay"] = "0.4s"
        if (i == 1) n.style["width"] = "60%", n.style["transition-delay"] = "0.5s"
        if (i == 2) n.style["width"] = "95%", n.style["transition-delay"] = "0.6s"
    });
    if (currentSection == 2) $('.mouse')[0].classList.add('ease')
    else $('.mouse')[0].classList.remove('ease')
    section.forEach(n => n.classList.remove('s-show'))
    e.classList.add('s-show')
    $('.bar')[0].style.margin = (currentSection * 3.5) + "rem 0 0 0";
}
/*------------- Gesture Handle -------------*/
let tsY = 0,
    teY = 0;

html.addEventListener('touchstart', e => {
    tsY = e.changedTouches[0].screenY;
}, false);

html.addEventListener('touchend', e => {
    teY = e.changedTouches[0].screenY;
    if (teY <= tsY) scrollTo(0)
    else scrollTo(1);
}, false);