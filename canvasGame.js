const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const character = {
    x: canvas.width/2,
    y: canvas.height/2,
    width:50,
    height:50,
    color:'blue',
    speed:5
}

const drawCharacter = ()=>{
    context.fillStyle = character.color;
    context.fillRect(character.x, character.y, character.width, character.height);
}

const animate = ()=>{
    drawCharacter();
}

animate();