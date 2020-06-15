/*------------- Scrolling Handle -------------*/
let section = document.querySelectorAll("section"),
    currentSection = 0,
    isScrolling = false;
document.querySelector(".wrapper").onwheel = e => {
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
    doScroll(section[currentSection]);
    document.getElementById("ic-" + currentSection).classList.add("selected");
    return setTimeout(() => {
        isScrolling = false;
    }, 500)
}
function doScroll(e, t) {
    document.querySelectorAll('.list .selected').forEach(n => n.classList.remove('selected'))
    if (t) e.classList.add("selected"), e = document.querySelector('.' + t), currentSection = parseInt(t.split("").slice(-1)[0]) - 1;
    if (currentSection == 1) document.querySelectorAll('.p-progress').forEach((n, i) => {
        if (i == 0) n.style["width"] = "80%", n.style["transition-delay"] = "0.4s"
        if (i == 1) n.style["width"] = "60%", n.style["transition-delay"] = "0.5s"
        if (i == 2) n.style["width"] = "95%", n.style["transition-delay"] = "0.6s"
    });
    if (currentSection == 2) document.querySelector('.mouse').classList.add('ease')
    else document.querySelector('.mouse').classList.remove('ease')
    section.forEach(n => n.classList.remove('s-show'))
    e.classList.add('s-show')
    document.querySelector('.bar').style.margin = (currentSection * 3.5) + "rem 0 0 0";
}
/*------------- Gesture Handle -------------*/
let tsX = 0,
    tsY = 0,
    teX = 0,
    teY = 0;
const gZone = document.querySelector("html");

gZone.addEventListener('touchstart', e => {
    tsX = e.changedTouches[0].screenX;
    tsY = e.changedTouches[0].screenY;
}, false);

gZone.addEventListener('touchend', e => {
    teX = e.changedTouches[0].screenX;
    teY = e.changedTouches[0].screenY;
    handleGesture();
}, false);

function handleGesture() {
    if (teY <= tsY) scrollTo(0);
    if (teY >= tsY) scrollTo(1);
}

/*------------- Custom Scrollbar -------------*/
/*let scrollHeight = 20,
    scrollOffset = 0,
    scrollPercent = 0;
function loop(p) {
    document.querySelector('.bar').style.margin = (scrollPercent * 14) + "rem 0 0 0";
    requestAnimationFrame(loop);
}*/