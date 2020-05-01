let section = document.querySelectorAll("section"),
    currentSection = 0,
    isScrolling = false;
document.querySelector(".wrapper").onwheel = (e) => {
    e.preventDefault();
    if (!isScrolling) scrollTo(e.deltaY < 0 ? 1 : 0);
}
document.querySelector(".wrapper").addEventListener('swiped-down', function(e) {
    console.log(e.target);
});
function scrollTo(d) {
    isScrolling = true;
    if (!d && currentSection < section.length - 1) currentSection++
    else if (d && currentSection > 0) currentSection--;
    section[currentSection].scrollIntoView({ block: "start", behavior: "smooth" });
    return setTimeout(() => {
        isScrolling = false;
    }, 500)
}