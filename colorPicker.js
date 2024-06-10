document.addEventListener('DOMContentLoaded', ()=>{

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const shapeSelect = document.getElementById('shapeSelect');

    let shape = {
        type:'circle',
        x:100,
        y:100,
        width:200,
        height:150,
        radius:75,
        color:colorPicker.value,
        isDragging:false
    };

    let selectedShape = null;


    const drawShape = (color)=>{
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = color;
        if(shape.type==='rectangle'){
            ctx.fillRect(shape.x,shape.y,shape.width,shape.height);
        } else if(shape.type === 'circle'){
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.radius, 0, 2*Math.PI);
            ctx.fill();
        }
        
    }

    drawShape(colorPicker.value);

    colorPicker.addEventListener('input', (event)=>{
        shape.color = event.target.value;
        drawShape(shape.color);
    });

    canvas.addEventListener('mousedown', (event)=>{
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;
        if(shape.type === 'rectangle' && mouseX > shape.x && mouseX < shape.x + shape.width && mouseY > shape.y && mouseY < shape.y + shape.height){
            shape.isDragging = true;
        }
        else if(shape.type === 'circle'){
            const dx = mouseX - shape.x;
            const dy = mouseY - shape.y;
            if (Math.sqrt(dx * dx + dy * dy) < shape.radius){
                shape.isDragging = true;
            }
        }
    });

    canvas.addEventListener('mousemove',(event)=>{
        if(shape.isDragging){
            if(shape.type === 'rectangle'){
                shape.x = event.offsetX - shape.width/2;
                shape.y = event.offsetY -shape.height/2;
            }
           else if (shape.type === 'circle'){
            shape.x = event.offsetX;
            shape.y = event.offsetY;
           }
            drawShape(shape.color);
        }
    } );

   
    canvas.addEventListener('mouseup', (event)=>{
        shape.isDragging = false;
    })

    canvas.addEventListener('mouseout', (event)=>{
        shape.isDragging = false;
    })
})