
let player = {
  name:"Flamix",
  hp:100,
  moves:[
    {name:"Chama", dmg:15},
    {name:"Explosão", dmg:25},
    {name:"Faísca", dmg:10},
    {name:"Fogo Max", dmg:30}
  ]
};

let enemy = { name:"Aquor", hp:100 };

function enemyAI(){
  const arr=[5,10,12,15];
  return arr[Math.floor(Math.random()*arr.length)];
}

function startGame(){
  document.getElementById("menu").style.display="none";
  document.getElementById("battle").style.display="block";
  updateStatus("Um inimigo apareceu!");
  loadMoves();
}

function loadMoves(){
  const box=document.getElementById("moves");
  box.innerHTML="";
  player.moves.forEach(m=>{
    let b=document.createElement("button");
    b.innerText=m.name+" ("+m.dmg+")";
    b.onclick=()=>playerAtk(m.dmg);
    box.appendChild(b);
  });
}

function updateStatus(t){
  document.getElementById("status").innerHTML =
    t+"<br>Seu HP: "+player.hp+" | Inimigo HP: "+enemy.hp;
}

function playerAtk(dmg){
  enemy.hp-=dmg;
  if(enemy.hp<=0){ updateStatus("Você venceu!"); return; }
  enemyTurn();
}

function enemyTurn(){
  const dmg=enemyAI();
  player.hp-=dmg;
  if(player.hp<=0){ updateStatus("Você perdeu!"); return; }
  updateStatus("O inimigo atacou! Dano: "+dmg);
}

function goMenu(){ location.reload(); }
