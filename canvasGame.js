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
    console.log(score);
switch(event.key){
    case 'ArrowUp':
        if(character.y > 0) 
            character.y -= character.speed;
            score++;
        break;
    case 'ArrowDown':
        if(character.y + character.height < canvas.height)
            character.y += character.speed;
            score++;
        break;
    case 'ArrowLeft':
        if(character.x > 0)
            character.x -= character.speed;
            score++;
        break;
    case 'ArrowRight':
        if(character.x + character.width < canvas.width)
            character.x += character.speed;
            score++;
        break;

}
});


const obstacles = [];
const obstacleCount = 30;

const obstacleWidth = 20;
const obstacleHeight = 20;

let score = 0;

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


const reset = ()=>{
    character.x = canvas.width/2;
    character.y = canvas.height/2;
    score = 0;
    obstacles.forEach(obstacle =>{
        obstacle.x = Math.random() * (canvas.width - obstacleWidth);
        obstacle.y = Math.random() * (canvas.height - obstacleHeight);
    })
}

const checkCollision = () =>{
    obstacles.forEach(obstacle =>{
        if (character.x < obstacle.x + obstacle.width && character.x + character.width > obstacle.x && character.y < obstacle.y + obstacle.height && character.y + character.height > obstacle.y ){
            alert('Game over!');
            reset();
        }
    })
}

const drawScore = ()=>{
    context.fillStyle = 'black';
    context.font = "24px Roboto";
    context.fillText('Score: '+ score, 50,50);
}

const clearCanvas = ()=>{
    context.clearRect(0,0, canvas.width, canvas.height)
}

const animate = ()=>{
    clearCanvas();
    drawCharacter();
    drawObstacles();
    drawScore();
    checkCollision();
    requestAnimationFrame(animate);
}

animate();