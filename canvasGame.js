const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const character = {
    x: canvas.width/2,
    y: canvas.height/2,
    width:50,
    height:50,
    color:'steelblue',
    speed:5
}

const drawCharacter = ()=>{
    context.fillStyle = character.color;
    context.fillRect(character.x, character.y, character.width, character.height);
}

document.addEventListener('keydown', (event)=>{
switch(event.key){
    case 'ArrowUp':
        if(character.y > 0) 
            character.y -= character.speed;
        break;
    case 'ArrowDown':
        if(character.y + character.height < canvas.height)
            character.y += character.speed;
        break;
    case 'ArrowLeft':
        if(character.x > 0)
            character.x -= character.speed;
        break;
    case 'ArrowRight':
        if(character.x + character.width < canvas.width)
            character.x += character.speed;
        break;

}
});


const obstacles = [];
const obstacleCount = 3;

const obstacleWidth = 20;
const obstacleHeight = 20;

for (let i = 0; i < obstacleCount; i++){
    obstacles.push({
        x: Math.random() * (canvas.width - obstacleWidth),
        y: Math.random() * (canvas.height - obstacleHeight),
        width: obstacleWidth,
        height:obstacleHeight,
        color:'red'
    });
}

const drawObstacles = ()=>{
    obstacles.forEach(obstacle =>{
        context.fillStyle = obstacle.color;
        context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    })
}


const clearCanvas = ()=>{
    context.clearRect(0,0, canvas.width, canvas.height)
}

const animate = ()=>{
    clearCanvas();
    drawCharacter();
    drawObstacles();
    requestAnimationFrame(animate);
}

animate();