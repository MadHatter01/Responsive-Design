document.addEventListener('DOMContentLoaded', ()=>{

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');

    const drawShape = (color)=>{
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.fillRect(50,50,200,150);
    }

    drawShape(colorPicker.value);

    colorPicker.addEventListener('input', (event)=>{
        console.log('change')
        drawShape(event.target.value);
    })
})