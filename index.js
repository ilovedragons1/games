const body = document.body;
const game1 = document.getElementById('body1');

function turnongame1(){
    game1.style.opacity = "1";
    game1.style.pointerEvents = "all";
    console.log("Game 1-turn-on");
    body.style.overflowY = "hidden"
}
function turnoffgame1(){
    game1.style.opacity = "0";
    game1.style.pointerEvents = "none";
    body.style.overflowY = "visible"
    k=0;
    console.log(k);
    score.innerText = "0";
}

// Game 1 JS



var rand_number = 1;
var k = 0;
const end_screen = document.getElementById("end");
const answer = document.getElementById('answ');
const yourpick = document.getElementById('you_pick');
const comppick = document.getElementById('comp_pick');
const score = document.getElementById('scores');


function restart(){
    end_screen.style.pointerEvents = "none";
    end_screen.style.opacity = 0;
}

function rando_number(){
    rand_number = Math.floor(Math.random() * 3);
}

function up_score(){
    score.innerText = k;
}

function paper(){
    yourpick.innerHTML = "✋";
    rando_number();
    if(rand_number == 1){
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        answer.innerText = "draw";
        comppick.innerText = "✋";
    }else if(rand_number == 2){
        answer.innerText = "lost";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✌️";
        k = k -1;
    }else{
        answer.innerText = "won";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✊";
        k = k + 1;
    }
    up_score();
}

function scissors(){
    yourpick.innerText = "✌️"
    rando_number();
    if(rand_number == 1){
        answer.innerText = "won";
        k = k + 1;
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✋";
    }else if(rand_number == 2){
        answer.innerText = "draw";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✌️";
    }else{
        k = k -1;
        answer.innerText = "lost";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✊";
    }
    up_score();
}

function rock(){
    yourpick.innerText = "✊";
    rando_number();
    if(rand_number == 1){
        answer.innerText = "lost";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✋";
        k = k -1;
    }else if(rand_number == 2){
        answer.innerText = "won";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✌️";
        k = k + 1;
    }else{
        answer.innerText = "draw";
        end_screen.style.pointerEvents = "all";
        end_screen.style.opacity = 1;
        comppick.innerText = "✊";
    }
    up_score();
}

// JS FOR GAME 2


var score_game2 = document.getElementById('score_2');
var up_the_score = 1;
var overtime_get = 0;
var show_cost_1 = document.getElementById('show-cost-ability-1');
var ability_1_cost = 5;
var ability_2_cost = 10;
var ability_3_cost = 1000;
const banana = document.getElementById('banana-img');
const ability_cost2 = document.getElementById('usefull');
var game2 = document.getElementById("game2");
var image_banana = document.getElementById('banana-img');

function plusone(){
    score_game2.innerText = parseInt(score_game2.innerText) + up_the_score;
}

function open_game2(){
    game2.style.opacity = "1";
    game2.style.pointerEvents = "all";
    body.style.overflowY = "hidden";
}

function close_game2(){
    game2.style.opacity = "0";
    game2.style.pointerEvents = "none";
    k = 1;
    score_game2.innerText = "0";
    body.style.overflowY = "visible";
    ability_1_cost = 5;
    ability_2_cost = 10;
    ability_3_cost = 1000;
    overtime_get = 0;
}

function ability1(){
    if(score_game2.innerText >= ability_1_cost){
    score_game2.innerText = score_game2.innerText - ability_1_cost;
    ability_1_cost = ability_1_cost * 3;
    show_cost_1.innerText = "COST: " + ability_1_cost + " BANANAS"
    up_the_score = up_the_score * 2;
    }
}

function ability2(){
    if(score_game2.innerText >= ability_2_cost){     
        overtime_get = overtime_get + 1;
        score_game2.innerText = parseInt(score_game2.innerText) - ability_2_cost;
        ability_2_cost = ability_2_cost * 2;
        ability_cost2.innerText = "COST: " + ability_2_cost + " BANANAS";
    }
}

setInterval(ability2_support ,1000);

function ability2_support(){
    score_game2.innerText = parseInt(score_game2.innerText) + overtime_get;
}

const three = document.getElementById('usefull2');
const makeitblack = document.getElementById('up-three');

function ability3(){
    if(score_game2.innerText >= ability_3_cost){
        banana.src = "orange.png";
        score_game2.innerText = score_game2.innerText - 1000;
        three.innerText = "";
        makeitblack.style.backgroundColor = "black";
    }
}

//game 3 JS

const goback3 = document.getElementById('leave-game3');
const game3 = document.getElementById('game3');

const btn1 = document.getElementById('redbtn1');
const btn2 = document.getElementById('redbtn2');
const btn3 = document.getElementById('redbtn3');
const btn4 = document.getElementById('redbtn4');
const btn5 = document.getElementById('redbtn5');


function leavegame3(){
    game3.style.opacity = 0;
    game3.style.pointerEvents = "none";
    body.style.overflowY = "visible";
    score4.innerText = 0;
}

function opengame3(){
    game3.style.opacity = 1;
    game3.style.pointerEvents = "all";
    body.style.overflowY = "hidden";
    btn1.style.animation = "smool-bik 1s forwards"
    btn2.style.animation = "smool-bik 1s forwards"
    btn3.style.animation = "smool-bik 1s forwards"
    btn4.style.animation = "smool-bik 1s forwards"
    btn5.style.animation = "smool-bik 1s forwards"
}

var random1 = 0;
while(random1 == 0){
random1 = Math.floor(Math.random() * 10);}
random1 =  random1 * 100;
setInterval(make1red ,1000)

    function make1red(){
    
     random1 =  random1 - 100;
     if(random1 == 0 || random1 < 0){
     btn1.style.backgroundColor = 'rgb(245, 0, 0)'
     random1 = Math.floor(Math.random() * 10);
        random1 =  random1 * 100;

        setTimeout(make1white , 700);
    }
    }

function make1white(){
    btn1.style.backgroundColor = 'rgb(255, 255, 255)'
}

const score4 = document.getElementById('score4');

function get_point_one(){
    if(btn1.style.backgroundColor == 'rgb(245, 0, 0)'){
        btn1.style.backgroundColor = "lime";
        score4.innerText = parseInt(score4.innerText) + 1 
    }
}





var random2 = 0;
while(random2 == 0){
random2 = Math.floor(Math.random() * 10);}
random2 =  random2 * 100;
setInterval(make2red ,1000)

    function make2red(){
    
     random2 =  random2 - 100;
     if(random2 == 0 || random2 < 0){
     btn2.style.backgroundColor = 'rgb(245, 0, 0)'
     random2 = Math.floor(Math.random() * 10);
        random2 =  random2 * 100;

        setTimeout(make2white , 800);
    }
    }

function make2white(){
    btn2.style.backgroundColor = 'rgb(255, 255, 255)'
}

function get_point_two(){
    if(btn2.style.backgroundColor == 'rgb(245, 0, 0)'){
        
        btn2.style.backgroundColor = "lime";
        score4.innerText = parseInt(score4.innerText) + 1 
    }
}






var random3 = 0;
while(random3 == 0){
random3 = Math.floor(Math.random() * 10);}
random3 =  random3 * 100;
setInterval(make3red ,1000)

    function make3red(){
    
     random3 =  random3 - 100;
     if(random3 == 0 || random3 < 0){
     btn3.style.backgroundColor = 'rgb(245, 0, 0)'
     random3 = Math.floor(Math.random() * 10);
        random3 =  random3 * 100;

        setTimeout(make3white , 800);
    }
    }

function make3white(){
    btn3.style.backgroundColor = 'rgb(255, 255, 255)'
}

function get_point_three(){
    if(btn3.style.backgroundColor == 'rgb(245, 0, 0)'){
        console.log("ITS RED2")
        btn3.style.backgroundColor = "lime";
        score4.innerText = parseInt(score4.innerText) + 1 
    }
}





var random4 = 0;
while(random4 == 0){
random4 = Math.floor(Math.random() * 10);}
random4 =  random4 * 100;
setInterval(make4red ,1000)

    function make4red(){
    
     random4 =  random4 - 100;
     if(random4 == 0 || random4 < 0){
     btn4.style.backgroundColor = 'rgb(245, 0, 0)'
     random4 = Math.floor(Math.random() * 10);
        random4 =  random4 * 100;

        setTimeout(make4white , 800);
    }
    }

function make4white(){
    btn4.style.backgroundColor = 'rgb(255, 255, 255)'
}

function get_point_four(){
    if(btn4.style.backgroundColor == 'rgb(245, 0, 0)'){
        btn4.style.backgroundColor = "lime";
        score4.innerText = parseInt(score4.innerText) + 1 
    }
}




var random5 = 0;
while(random5 == 0){
random5 = Math.floor(Math.random() * 10);}
random5 =  random5 * 100;
setInterval(make5red ,1000)

    function make5red(){
    
     random5 =  random5 - 100;
     if(random5 == 0 || random5 < 0){
     btn5.style.backgroundColor = 'rgb(245, 0, 0)'
     random5 = Math.floor(Math.random() * 10);
        random5 =  random5 * 100;

        setTimeout(make5white , 800);
    }
    }

function make5white(){
    btn5.style.backgroundColor = 'rgb(255, 255, 255)'
}

function get_point_five(){
    if(btn5.style.backgroundColor == 'rgb(245, 0, 0)'){
        btn5.style.backgroundColor = "lime";
        score4.innerText = parseInt(score4.innerText) + 1 
    }
}





// GAME 4 JS


const goback_4 = document.getElementById('goback-game-4');
const game4 = document.getElementById('game4');

function open_game4(){
    game4.style.opacity = 1;
    game4.style.pointerEvents = "all";
    console.log("no");
}


const questions = ["WHEN DID THE EASTERN ROMAN EMPIRE FALL",
"WHEN DID THE FIRST MAN LAND ON THE MOON",
"HOW MANY ELEMENTS HAVE BEEN DISCOVERED",
"HOW MANY PLNETS EXIST ON OUR SOLAR SYSTEM",
"APROXIMATLY HOW BIG IS THE OBSERVABLE UNIVERSE",
"WHAT YEAR DID ROBLOX REALESE",
]

const answs1= ["1453",
"1123",
"118",
"27.231",
"131M km","1821"]

const answs1_C = ["C","F","C","F","F",'F']

const answs2= ["2013",
"1969",
"15",
"13",
"12.000 L.Y.",
"2011"]

const answs2_C = ["F","C","F","F","F","F"]

const answs3= ["1013",
"1923",
"115",
"9",
"94 B.L.Y.",
"2006"]

const answs3_C = ["F","F","F","F","C","C"]

const answs4= ["1227",
"1972",
"15",
"8",
"131 L.Y.",
"2009"]

const answs4_C = ["F","F","F","C","F","F"]

var k = 0;
var z = 0;
const quest = document.getElementById('thequestion');
const game4_ans_1 = document.getElementById('an1');
const game4_ans_2 = document.getElementById('an2');
const game4_ans_3 = document.getElementById('an3');
const game4_ans_4 = document.getElementById('an4');

shownewquestion();

function shownewquestion(){
    quest.innerText = z+1 + ". " + questions[z]
    game4_ans_1.innerText = answs1[z]
    game4_ans_2.innerText = answs2[z]
    game4_ans_3.innerText = answs3[z]
    game4_ans_4.innerText = answs4[z]
    z = z + 1
}

const right = document.getElementById('correct');
const wrong = document.getElementById("false");
var a = 0;
var b = 0;
var c = 0;
var d = 0;

function a_ans_1(){
    if(answs1_C[a] == "C"){
        right.innerText = parseInt(right.innerText) + 1

    }else if(answs1_C[a] == "F"){
        wrong.innerText = parseInt(wrong.innerText) + 1
    }
    a = a + 1;
    b = b + 1;
    c = c + 1;
    d = d + 1;
}

function a_ans_2(){
    if(answs2_C[b] == "C"){
        
        right.innerText = parseInt(right.innerText) + 1
    }else if(answs2_C[b] == "F"){
        
        wrong.innerText = parseInt(wrong.innerText) + 1
    }
    a = a + 1;
    b = b + 1;
    c = c + 1;
    d = d + 1;
}

function a_ans_3(){
    if(answs3_C[c] == "C"){
        
        right.innerText = parseInt(right.innerText) + 1
    }else if(answs3_C[c] == "F"){
        
        wrong.innerText = parseInt(wrong.innerText) + 1
    }
    a = a + 1;
    b = b + 1;
    c = c + 1;
    d = d + 1;
}


function a_ans_4(){
    if(answs4_C[d] == "C"){
        
        right.innerText = parseInt(right.innerText) + 1
    }else if(answs4_C[d] == "F"){
        
        wrong.innerText = parseInt(wrong.innerText) + 1
    }
    a = a + 1;
    b = b + 1;
    c = c + 1;
    d = d + 1;
}

function close_game4(){
    console.log("epic");
    game4.style.opacity = 0;
    game4.style.pointerEvents = "none";
    z = 0;
    quest.innerText = "0. Click any box to start"
    game4_ans_1.innerText = "START"
    game4_ans_2.innerText = "START"
    game4_ans_3.innerText = "START"
    game4_ans_4.innerText = "START"
    a = -1;
    b = -1;
    c = -1;
    d = -1;
    right.innerText = "0";
    wrong.innerText = "0";
}




// GAME 5 JS

const game5 = document.getElementById('game5');

const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');
const block3 = document.getElementById('block-3');
const block4 = document.getElementById('block-4');
const block5 = document.getElementById('block-5');
const block6 = document.getElementById('block-6');
const block7 = document.getElementById('block-7');
const block8 = document.getElementById('block-8');
const block9 = document.getElementById('block-9');

function turnoffgame5(){
game5.style.opacity = '0';
game5.style.pointerEvents = 'none';
body.style.overflowY = "visible";
block1.innerText = "";
block2.innerText = "";
block3.innerText = "";
block4.innerText = "";
block5.innerText = "";
block6.innerText = "";
block7.innerText = "";
block8.innerText = "";
block9.innerText = "";
z = 0;
}

function turnongame5(){
game5.style.opacity = '1';
game5.style.pointerEvents = 'all';
body.style.overflowY = "hidden";
}

const ab = 3;
const ba = 3;

let x_y = [];

for(i = 0; i < a; i++){
    for(j=0; j < b; j++){
        x_y[i][j] = "0";
    }
}

function X(){
if(event.target.innerText == ""){
    event.target.innerText = "X";
    setTimeout(randomO,450);
}
}

function O(){
    if(checkifonemoveaway()){
        
    }else{
        randomO();
    }
}

var z = 0;

function randomO(){
    z = z + 1;
    setTimeout(checkForWin,250);
    if(z < 5){
        console.log("runed once")
    var randi = -1;
    const blocks = [block1,block2,block3,block4,block5,block6,block7,block8,block9];
    randi = Math.floor(Math.random() * 9);
    
    while(blocks[randi].innerText == "X" || blocks[randi].innerText == "O"){
        randi = Math.floor(Math.random() * 9);
        console.log("YES")
    }
    
    blocks[randi].innerText = "O";
    setTimeout(checkForWin,250);
}}


function reset(){

block1.innerText = "";
block2.innerText = "";
block3.innerText = "";
block4.innerText = "";
block5.innerText = "";
block6.innerText = "";
block7.innerText = "";
block8.innerText = "";
block9.innerText = "";
z = 0;
}

function checkForWin(){
    if(block1.innerText == "X" && block2.innerText == "X" && block3.innerText == "X"){
        alert("YOU WON");
    }
    else if(block1.innerText == "O" && block2.innerText == "O" && block3.innerText == "O"){
        alert("YOU LOST");
    }

    if(block4.innerText == "X" && block5.innerText == "X" && block6.innerText == "X"){
        alert("YOU WON");
    }
    else if(block4.innerText == "O" && block5.innerText == "O" && block6.innerText == "O"){
        alert("YOU LOST");
    }

    if(block7.innerText == "X" && block8.innerText == "X" && block9.innerText == "X"){
        alert("YOU WON");
    }
    else if(block7.innerText == "O" && block8.innerText == "O" && block9.innerText == "O"){
        alert("YOU LOST");
    }

    if(block1.innerText == "X" && block4.innerText == "X" && block7.innerText == "X"){
        alert("YOU WON");
    }
    else if(block1.innerText == "O" && block4.innerText == "O" && block7.innerText == "O"){
        alert("YOU LOST");
    }

    if(block2.innerText == "X" && block5.innerText == "X" && block8.innerText == "X"){
        alert("YOU WON");
    }
    else if(block2.innerText == "O" && block5.innerText == "O" && block8.innerText == "O"){
        alert("YOU LOST");
    }

    if(block3.innerText == "X" && block6.innerText == "X" && block9.innerText == "X"){
        alert("YOU WON");
    }
    else if(block3.innerText == "O" && block6.innerText == "O" && block9.innerText == "O"){
        alert("YOU LOST");
    }

    if(block1.innerText == "X" && block5.innerText == "X" && block9.innerText == "X"){
        alert("YOU WON");
    }
    else if(block1.innerText == "O" && block5.innerText == "O" && block9.innerText == "O"){
        alert("YOU LOST");
    }

    if(block3.innerText == "X" && block5.innerText == "X" && block7.innerText == "X"){
        alert("YOU WON");
    }
    else if(block3.innerText == "O" && block5.innerText == "O" && block7.innerText == "O"){
        alert("YOU LOST");
}
}
    
// GAME 6 JS

const scorez = document.getElementById("scorez");
const a3 = document.getElementById("a");
const b3 = document.getElementById("b");
const c3 = document.getElementById("c");
const d3 = document.getElementById("d");
const e3 = document.getElementById("e");
const f3 = document.getElementById("f");
const g3 = document.getElementById("g");
const h3 = document.getElementById("h");
const i3 = document.getElementById("i");
const j3 = document.getElementById("j");
const k3 = document.getElementById("k");
const l3 = document.getElementById("l");
const m3 = document.getElementById("m");
const n3 = document.getElementById("n");
const o3 = document.getElementById("o");
const p3 = document.getElementById("p");
const q3 = document.getElementById("q");
const r3 = document.getElementById("r");
const s3 = document.getElementById("s");
const t3 = document.getElementById("t");
const u3 = document.getElementById("u");
const v3 = document.getElementById("v");
const w3 = document.getElementById("w");
const x3 = document.getElementById("x");
const y3 = document.getElementById("y");
const z3 = document.getElementById("z");

const goback6 = document.getElementById("goback-6");
const game6 = document.getElementById("game6");

function open6(){
 game6.style.opacity = 1;
 game6.style.pointerEvents = "all";
 body.style.overflowY = "hidden"
}

function close6(){
    scorez.style.backgroundColor = "rgb(255,255,255)"
    game6.style.opacity = 0;
    game6.style.pointerEvents = "none";
    body.style.overflowY = "visible"
    lep = 0;
    scorezi.innerText = 0 + "/7";
a3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
b3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
c3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
d3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
e3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
f3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
g3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
h3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
i3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
j3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
k3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
l3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
m3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
n3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
o3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
p3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
q3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
r3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
s3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
t3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
u3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
v3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
w3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
x3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
y3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
z3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
}

var myArray = [ 
  ["C","A","R","S"],
  ["E","P","I","C"],
  ["H","A","V","E"],
  ["H","A","I","R"],
  ["I","R","O","N"],
  ["L","I","F","E"],
  ["B","O","M","B"],
  ["C","A","F","E"],
  ["R","O","C","K"],
  ["E","P","I","C"],
  ["C","A","V","E"],
  ["R","A","V","E"],
  ["L","O","S","T"],
  ["F","I","J","I"],
  ["L","I","M","P"],
  ["K","I","C","K"],
  ["G","A","M","E"],
  ["M","O","V","E"],
  ["N","O","S","E"],
  ["P","U","S","H"],
  ["S","A","L","E"],
];


const let1 = document.getElementById("letter1-1");
const let2 = document.getElementById("letter2-1");
const let3 = document.getElementById("letter3-1");
const let4 = document.getElementById("letter4-1");
const scorezi = document.getElementById('scorezi');


var word = 1;

changeword();

function changeword(){
    word = parseInt(Math.floor(Math.random() * 21));
    scorez.style.backgroundColor = "rgb(255,255,255)"
    let1.innerText = myArray[word][0];
    let2.innerText = myArray[word][1];
    let3.innerText = myArray[word][2];
    let4.innerText = myArray[word][3];
    let1.style.opacity = "0";
    let2.style.opacity = "0";
    let3.style.opacity = "0";
    let4.style.opacity = "0";
    lep = 0;
    scorezi.innerText = 0 + "/7";
a3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
b3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
c3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
d3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
e3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
f3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
g3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
h3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
i3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
j3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
k3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
l3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
m3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
n3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
o3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
p3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
q3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
r3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
s3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
t3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
u3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
v3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
w3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
x3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
y3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
z3.style.background = "linear-gradient(110deg,	rgb(9, 66, 66),darkcyan,darkcyan,	lightseagreen)"
}


function opacity100(){
    if(lep < 7 ){
        lep = lep + 1;
        scorezi.innerText = lep + "/7";
    
    event.target.style.background = "linear-gradient(110deg,rgb(145, 42, 42),#D22B2B,#D22B2B,#D2042D)"
    opacity100_1();
    opacity100_2();
    opacity100_3();
    opacity100_4();
    }
    if(lep == 7){
        let1.style.animation = "fadeIN 2s";
        let2.style.animation = "fadeIN 2s";
        let3.style.animation = "fadeIN 2s";
        let4.style.animation = "fadeIN 2s";
        scorez.style.background = "rgb(225,0,0)"
    }
}

var lep = 0;

function opacity100_1(){
    if(event.target.innerText == let1.innerText){
    let1.style.opacity = "1";
    event.target.style.background = "linear-gradient(110deg,#cfb102,#dabf28,#d4bb29,#fad400)"
    lep = lep - 1;
    scorezi.innerText = lep + "/7";
}
}

function opacity100_2(){
    if(event.target.innerText == let2.innerText){
    let2.style.opacity = "1";
    event.target.style.background = "linear-gradient(110deg,#cfb102,#dabf28,#d4bb29,#fad400)"
    lep = lep - 1;
    scorezi.innerText = lep + "/7";
}
}

function opacity100_3(){
    if(event.target.innerText == let3.innerText){
    let3.style.opacity = "1";
    event.target.style.background = "linear-gradient(110deg,#cfb102,#dabf28,#d4bb29,#fad400)"
    lep = lep - 1;
    scorezi.innerText = lep + "/7";
}
}

function opacity100_4(){
    if(event.target.innerText == let4.innerText){
    let4.style.opacity = "1"; 
    event.target.style.background = "linear-gradient(110deg,#cfb102,#dabf28,#d4bb29,#fad400)"
    lep = lep - 1;
    scorezi.innerText = lep + "/7";}
}

// GAME 7 JS

const slot_ineers = [[3,1,8,3],[2,1,8,4],[6,4,2,5],[6,7,7,5]];

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");
const item10 = document.getElementById("item10");
const item11 = document.getElementById("item11");
const item12 = document.getElementById("item12");
const item13 = document.getElementById("item13");
const item14 = document.getElementById("item14");
const item15 = document.getElementById("item15");
const item16 = document.getElementById("item16");

item1.innerText = slot_ineers[0][0];
item2.innerText = slot_ineers[0][1];
item3.innerText = slot_ineers[0][2];
item4.innerText = slot_ineers[0][3];
item5.innerText = slot_ineers[1][0];
item6.innerText = slot_ineers[1][1];
item7.innerText = slot_ineers[1][2];
item8.innerText = slot_ineers[1][3];
item9.innerText = slot_ineers[2][0];
item10.innerText = slot_ineers[2][1];
item11.innerText = slot_ineers[2][2];
item12.innerText = slot_ineers[2][3];
item13.innerText = slot_ineers[3][0];
item14.innerText = slot_ineers[3][1];
item15.innerText = slot_ineers[3][2];
item16.innerText = slot_ineers[3][3];


const all_items = [item1,item2,item3,item4,item5,item6,item7,
    item8,item9,item10,item11,item12,item13,item14,item15,item16]

const game7 = document.getElementById("game7");

var lumber = 0;

function make_black(){
    lumber = lumber + 1;
    event.target.style.opacity = 0.99;
    if(lumber == 2){
    checkifequal();
        lumber = 0;
    }
    resetanations()
    setInterval(checkif2(),350)
}

var checkez = 0;

function checkif2(){
    
    checkez = checkez + 1;
    for(i = 0; i < 16; i++){
        
        if(all_items[i].style.opacity == 0.99 && checkez == 2){
            for(j = 0; j < 16; j++){
                if(all_items[j].style.opacity == 0.99){
                
                all_items[j].style.animation = "go_out 1s";
                all_items[j].style.opacity = 0.2;
                console.log("two")
                checkez = 0;

            }
            }
        }
    }
}

function resetanations(){
for(j = 0; j < 16; j++){
all_items[j].style.animation = "none";

}
}

console.log(typeof(all_items[2].style.opacity))

function checkifequal(){
    
    for(j = 0; j < 16; j++){
        
        for (let i = 0; i < 16; i++) {
            
            
                if(all_items[i].style.opacity == all_items[j].style.opacity){
                all_items[i].style.color = "red";
                all_items[j].style.opacity = 1;
                console.log("one");
            }
        }
        
    }
}


function opengame7(){
    game7.style.opacity = "1";
    game7.style.pointerEvents = "all";
}

function closegame7(){
    game7.style.opacity = "0";
    game7.style.pointerEvents = "none";
}












// GAME 8 JS

const game8 = document.getElementById("game8");

function turnoff8(){
    game8.style.opacity = "0";
    game8.style.pointerEvents = "none";
    colorz1.style.backgroundColor = "";
    colorz2.style.backgroundColor = "";
    body.style.overflowY = "visible";
}

function turnon8(){
    game8.style.opacity = "1";
    game8.style.pointerEvents = "all";
    body.style.overflowY = "hidden";
    colorz1.style.backgroundColor = "";
    colorz2.style.backgroundColor = "";
}
let randColor;
function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math. random() * maxVal;
    randomNumber = Math. floor(randomNumber);
    randomNumber = randomNumber. toString(16);
    randColor = randomNumber. padStart(6, 0);
    return `#${randColor. toUpperCase()}`
    }

const colorz1 = document.getElementById('colorz1');
const colorz2 = document.getElementById('colorz2');
const colorz = [colorz1,colorz2];
var lop = 1;

function colorchangez(){
    if(lop == 0){
        change_colorz1();
        lop = 1;
    }else if(lop == 1){
        change_colorz2();
        lop = 0;
    }
}

function change_colorz1(){
    colorz1.style.zIndex = 1;
    colorz2.style.zIndex = 0;
    colorz1.style.backgroundColor = generateRandomColor()
    colorz1.style.animation = 'smoll-bikker 0.17s linear'
    colorz2.style.animation = "none"
    colorz1.style.top = event. clientY - 172 + "px";
    colorz1.style.left = event. clientX - 172 + "px";
}

function change_colorz2(){
    colorz2.style.zIndex = 1;
    colorz1.style.zIndex = 0;
    colorz2.style.backgroundColor = generateRandomColor();
    colorz2.style.animation = 'smoll-bikker 0.17s linear'
    colorz1.style.animation = "none"
    colorz2.style.top = event. clientY - 172 + "px";
    colorz2.style.left = event. clientX - 172 + "px";
}




// GAM9 JS


const game9 = document.getElementById("game9");

function turnoff9(){
    game9.style.opacity = "0";
    game9.style.pointerEvents = "none";
    body.style.overflowY = "visible";
    score9.innerText = 0; 
}

function turnon9(){
    game9.style.opacity = "1";
    game9.style.pointerEvents = "all";
    body.style.overflowY = "hidden";
}

const timerz = document.getElementById('timer-inner');

const questionzer = [["32 + 12 = ?"],
["34 + 21 = ?"],
["30 + 80 = ?"],
["91 + 8 = ?"],
["17 + 31 = ?"],
["12 + 56 = ?"],
["51 + 35 = ?"],
["97 + 38 = ?"],
["11 + 11 = ?"],
["23 + 34 = ?"],
["93 + 14 = ?"],
["33 + 34 = ?"],
["63 + 38 = ?"],
["101 + 13 = ?"],
["6 + 37 = ?"],
["13 + 11 = ?"]];

const answerz = [["44"],
["55"],
["110"],
["99"],
["58"],
["68"],
["86"],
["135"],
["22"],
["57"],
["107"],
["67"],
["101"],
["114"],
["43"],
["24"]];


const questz = document.getElementById('akapela');
var lepen = 0;

timer();

function timer(){
    timerz.style.animation = "timerout 4s infinite";
    setInterval(changequestion , 3999);
}

const score9 = document.getElementById('score-game9');
score9.innerText = 0;

function changequestion(){
    lepen = Math.floor(Math.random() * 15);
    questz.innerText = questionzer[lepen];
    console.log("op")
    input.style.border = "none";
    input.value = ""
}

const input = document.getElementById('ans-num');

console.log(answerz[lepen]);
function makeGreen(){
    console.log(input.value);
    if(input.value == answerz[lepen]){
        console.log(answerz[lepen]);
        console.log("ey,am wakin hia");
        input.style.border = "6px solid #228B22";
        score9.innerText = parseInt(score9.innerText) + 1;
    }
}