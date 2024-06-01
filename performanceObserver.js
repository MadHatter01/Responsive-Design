document.addEventListener("DOMContentLoaded", ()=>{
    const contentBox = document.getElementById('content');

    function applyLayout(){
        const width = window.innerWidth;

        if(width > 768){
            contentBox.style.backgroundColor = 'lightblue';
        }
        else if (width > 480){
            contentBox.style.backgroundColor = 'lightgreen';
        }
        else{
            contentBox.style.backgroundColor = 'lightcoral';
        }
    }

    applyLayout();
    window.addEventListener('resize', applyLayout);
    if('PerformanceObserver' in window){
        const observer = new PerformanceObserver((list)=>{
            for (const entry of list.getEntries()){
                console.log(`Name: ${entry.name}, Type: ${entry.entryType}, Start: ${entry.startTime}, Duration: ${entry.duration}`);

            }
        });
        observer.observe({ entryTypes: ['paint', 'layout-shift'] });

    }
});