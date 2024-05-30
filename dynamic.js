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
    updateImages()
}

window.addEventListener('resize', onResize);
onResize();