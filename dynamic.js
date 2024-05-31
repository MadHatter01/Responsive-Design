document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.menu-button');
    const nav = document.querySelector('nav ul')

    menuBtn.addEventListener('click', function(){
        nav.classList.toggle('open')
    })
})


function loadContent(){
    const content = document.querySelector('.text-content');
    const width = window.innerWidth;

    if(width < 768){
        content.innerHTML = '<p>Content for mobile view</p>'

    }
    else{
        content.innerHTML = '<p>Content for desktop view</p>'
    }
}


function updateImages(){
    const images = document.querySelectorAll('img[data-src-mobile]');

    const width = window.innerWidth;

    images.forEach(img =>{
        const mobileSrc = img.getAttribute('data-src-mobile');
        const desktopSrc = img.getAttribute('data-src-desktop');

        if (width < 768){
            img.src = mobileSrc;
        }
        else{
            img.src = desktopSrc;
        }
    })
}


function onResize(){
    loadContent()
    updateImages()
}

window.addEventListener('resize', onResize);
onResize();