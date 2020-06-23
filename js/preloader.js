window.onload = ()=> {
    document.querySelectorAll('section')[0].classList.add('s-show')
    let preloader = document.querySelector('.preloader');
    preloader.classList.add('fade');
    setTimeout(()=>{
        preloader.style.display = 'none';
    }, 1000);
};