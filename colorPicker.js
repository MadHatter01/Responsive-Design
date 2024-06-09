document.addEventListener('DOMContentLoaded', ()=>{

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');

    let rect = {
        x:50,
        y:50,
        width:200,
        height:150,
        color:colorPicker.value,
        isDragging:false
    };


    const drawShape = (color)=>{
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
    }

    drawShape(colorPicker.value);

    colorPicker.addEventListener('input', (event)=>{
        rect.color = event.target.value;
        drawShape(rect.color);
    });

    canvas.addEventListener('mousedown', (event)=>{
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        if(mouseX > rect.x && mouseX < rect.x + rect.width && mouseY > rect.y && mouseY < rect.y + rect.height){
            rect.isDragging = true;
        }
    });

    canvas.addEventListener('mousemove',(event)=>{
        if(rect.isDragging){
            rect.x = event.offsetX - rect.width/2;
            rect.y = event.offsetY -rect.height/2;
            drawShape(rect.color);
        }
    } );

   
    canvas.addEventListener('mouseup', (event)=>{
        rect.isDragging = false;
    })

    canvas.addEventListener('mouseout', (event)=>{
        rect.isDragging = false;
    })
})