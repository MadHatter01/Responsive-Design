const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let shapes = [];



const drawShape = ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(const shape of shapes){
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, 2*Math.PI);
        ctx.fillStyle = shape.color;
        ctx.fill();
        ctx.stroke();
    }
}

const createShape = (x, y)=>{
    const size = Math.random() * 20 +10;
    const dx = (Math.random() - 0.5) * 2;
    const dy = (Math.random() - 0.5) * 2;
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    shapes.push({x, y, size, dx, dy, color});
}


const updateShapes=()=>{
    for (const shape of shapes){

        shape.x += shape.dx;
                shape.y += shape.dy;
                if (shape.x + shape.size > canvas.width || shape.x - shape.size < 0) {
                    shape.dx = -shape.dx;
                }
                if (shape.y + shape.size > canvas.height || shape.y - shape.size < 0) {
                    shape.dy = -shape.dy;
                }
            }
        }



canvas.addEventListener('click', (event)=>{
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    createShape(x,y);
    drawShape();
})



function animate(){
updateShapes();
drawShape();
requestAnimationFrame(animate);
}

animate();