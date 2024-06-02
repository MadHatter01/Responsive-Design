const cards = document.querySelectorAll('.card')
const container = document.querySelector('.container')
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting){
        //     observer.unobserve(entry.target)
        // }
    })
    
}, {
    threshold:1,
    // rootMargin:"-10px"
}

)


const lazyLoadingObserver = new IntersectionObserver(entries =>{
    const lastItem = entries[0]
    if(lastItem.isIntersecting) return
    loadNewContent();
    lazyLoadingObserver.unobserve(lastItem.target)
    lazyLoadingObserver.observe(document.querySelector(".card:last-child"))
}, {
    rootMargin:"50px"
})


lazyLoadingObserver.observe(document.querySelector(".card:last-child"))

cards.forEach(card=>{
    observer.observe(card)
})


const loadNewContent = ()=>{
    for(let i=0;i<5;i++){
        const card = document.createElement("div");
        card.textContent = "Freshly baked items"
        card.classList.add("card");
        observer.observe(card)
        container.append(card)
    }
}
