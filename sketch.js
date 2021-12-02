var cha;
var cha1,cha2,cha3,cha4;
var cham1,cham2,cham3,cham4;
var left,right,up,down;
var grass;
var grassimg1,grassimg2,grassimg3,grassimg4,grassimg5;
var tree1;
var tree;
var treeG,fenceGV,grassG,decG,tileG;
var edgeBG,edgeTG,edgeLG,edgeRG;
var edgeBimg,edgeTimg,edgeLimg,edgeRimg;
var theme;
var c1,c2,c3,c4;
var c1i,c2i,c3i,c4i;
var decimg1,decimg2;
var house1,house1img;
var textbox,textboxImg,font,yes,no,yesi,noi;
var door1;
var textmode;
var state;
var inside;
var tilem,tiled,tileu,tilel,tiler,tilec1,tilec2,tilec3,tilec4;
var wallG;
var wallc1,wallc2,wallc3,wallc4,walld,wallu,walll,wallr,walldr,walldl;
var insideD;
var check1,check2;
var screenA;
var screent;
function preload(){
cha1 = loadAnimation("assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still12.png","assets/ch/still13.png","assets/ch/still12.png")
cha2 = loadAnimation("assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still22.png","assets/ch/still23.png","assets/ch/still22.png")
cha3 = loadAnimation("assets/ch/still31.png")
cha4 = loadAnimation("assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still42.png","assets/ch/still43.png","assets/ch/still42.png")
cham1 = loadAnimation("assets/ch/run11.png","assets/ch/run12.png","assets/ch/run13.png","assets/ch/run14.png","assets/ch/run15.png","assets/ch/run16.png","assets/ch/run17.png","assets/ch/run18.png","assets/ch/run19.png","assets/ch/run110.png",);
cham2 = loadAnimation("assets/ch/run21.png","assets/ch/run22.png","assets/ch/run23.png","assets/ch/run24.png","assets/ch/run25.png","assets/ch/run26.png","assets/ch/run27.png","assets/ch/run28.png","assets/ch/run29.png","assets/ch/run210.png",);
cham3 = loadAnimation("assets/ch/run31.png","assets/ch/run32.png","assets/ch/run33.png","assets/ch/run34.png","assets/ch/run35.png","assets/ch/run36.png","assets/ch/run37.png","assets/ch/run38.png","assets/ch/run39.png","assets/ch/run310.png",);
cham4 = loadAnimation("assets/ch/run41.png","assets/ch/run42.png","assets/ch/run43.png","assets/ch/run44.png","assets/ch/run45.png","assets/ch/run46.png","assets/ch/run47.png","assets/ch/run48.png","assets/ch/run49.png","assets/ch/run410.png",);
grassimg1 = loadImage("assets/tile set/ground/grass11.png");
grassimg2 = loadImage("assets/tile set/ground/grass12.png");
grassimg3 = loadImage("assets/tile set/ground/grass13.png");
grassimg4 = loadImage("assets/tile set/ground/grass14.png");
grassimg5 = loadImage("assets/tile set/ground/grass15.png");
tree1 = loadImage("assets/tree/2.png");
fenceVimg = loadImage("assets/fence/4.png");
edgeBimg = loadImage("assets/tile set/water cliff/tile (12).png");
edgeTimg = loadImage("assets/tile set/water cliff/tile (2).png");
edgeLimg = loadImage("assets/tile set/water cliff/tile (6).png");
edgeRimg = loadImage("assets/tile set/water cliff/tile (8).png");
theme = loadSound("assets/theme.mp3");
c1i = loadImage("assets/tile set/water cliff/tile (1).png");
c2i = loadImage("assets/tile set/water cliff/tile (3).png");
c3i = loadImage("assets/tile set/water cliff/tile (11).png");
c4i = loadImage("assets/tile set/water cliff/tile (13).png");
decimg1 = loadImage("assets/w/1.png");
decimg2 = loadImage("assets/w/2.png");
house1img = loadImage("assets/house/1.png");
textboxImg = loadImage("assets/ui/textbox.png");
yesi = loadImage("assets/ui/yes.png");
noi = loadImage("assets/ui/no.png");
font = loadFont("assets/font.ttf");
inside = loadSound("inside.mp3");
tilem = loadImage("assets/tile set/inside/floor/tile.png");
tiled = loadImage("assets/tile set/inside/floor/6.png");
tileu = loadImage("assets/tile set/inside/floor/2.png");
tilel = loadImage("assets/tile set/inside/floor/8.png");
tiler = loadImage("assets/tile set/inside/floor/4.png");
tilec1 = loadImage("assets/tile set/inside/floor/1.png");
tilec2 = loadImage("assets/tile set/inside/floor/3.png");
tilec3 = loadImage("assets/tile set/inside/floor/5.png");
tilec4 = loadImage("assets/tile set/inside/floor/7.png");
wallc1 = loadImage("assets/tile set/inside/wall/1.png");
wallc2 = loadImage("assets/tile set/inside/wall/3.png");
wallc3 = loadImage("assets/tile set/inside/wall/6.png");
wallc4 = loadImage("assets/tile set/inside/wall/10.png");
walld = loadImage("assets/tile set/inside/wall/9.png");
wallu = loadImage("assets/tile set/inside/wall/2.png");
walll = loadImage("assets/tile set/inside/wall/4.png");
wallr = loadImage("assets/tile set/inside/wall/5.png");
walldr = loadImage("assets/tile set/inside/wall/8.png");
walldl = loadImage("assets/tile set/inside/wall/7.png");
screenA = loadAnimation("screen/0.png","screen/0.png","screen/0.png","screen/1.png","screen/2.png","screen/3.png","screen/4.png","screen/5.png","screen/6.png",
"screen/7.png","screen/8.png","screen/9.png","screen/10.png","screen/11.png","screen/12.png","screen/13.png","screen/14.png","screen/15.png",
"screen/16.png","screen/17.png","screen/18.png","screen/19.png","screen/20.png","screen/21.png","screen/22.png","screen/23.png","screen/24.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  treeG = new Group();
  fenceGV = new Group();
  edgeBG = new Group();
  edgeTG = new Group();
  edgeLG = new Group();
  edgeRG = new Group();
  decG = new Group();
  grassG = new Group();
  tileG = new Group();
  wallG = new Group();
  makeWdec(20,-400,-48,-400,height+400);
  makeWdec(20,width+400,width+60,-400,height+400);
  makeWdec(20,0,width+10,height+130,height+400);
  makeWdec(20,0,width+10,height-700,height-1100);
  edgeT(29,20,20-48);
  nonespr(29,20,20);
  nonespr(29,20,68);
  nonespr(29,20,68+48);
  nonespr(29,20,68+48+48);
  nonespr(29,20,68+48+48+48);
  nonespr(29,20,68+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48);
  edgeB(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48+48);14
  wall(1,250-48-48,height/2-48-48-48-48,wallc1);
  wall(1,250+48+48+48+48+48+48,height/2-48-48-48-48,wallc2);
  wall(1,250-48-48,height/2,wallc3);
  wall(1,250+48+48+48+48+48+48,height/2,wallc4);
  wall(7,250-48,height/2-48-48-48-48,wallu);
  wall(3,250+48+48+48,height/2,walld);
  wall(1,250+48+48,height/2,walldr);
  wall(1,250,height/2,walldl);
  wall(1,250-48,height/2,walld);
  wall(1,250-48-48,height/2-48,walll);
  wall(1,250-48-48,height/2-48-48,walll);
  wall(1,250-48-48,height/2-48-48-48,walll);
  wall(1,250+48+48+48+48+48+48,height/2-48,wallr);
  wall(1,250+48+48+48+48+48+48,height/2-48-48,wallr);
  wall(1,250+48+48+48+48+48+48,height/2-48-48-48,wallr);
  tile(7,250-48,height/2-48,tiled);
  tile(7,250-48,height/2-48-48,tilem);
  tile(7,250-48,height/2-48-48-48,tileu);
  tile(1,250-48,height/2-48-48,tilel)
  tile(1,250+48+48+48+48+48,height/2-48-48,tiler)
  tile(1,250-48,height/2-48-48-48,tilec1);
  tile(1,250+48+48+48+48+48,height/2-48-48-48,tilec2);
  tile(1,250-48,height/2-48,tilec4);
  tile(1,250+48+48+48+48+48,height/2-48,tilec3);
  edgeL(14,20-48,20);
  edgeR(14,48*29+20,20);
  //indideD = createSprite(250+48,height/2+10,48,48);
  c1 = createSprite(20-48,20-48);
  c1.addImage(c1i);
  //c1.debug = true;
  c1.setCollider("circle",8,8,15);
  c2 = createSprite(48*29+20,20-48);
  c2.addImage(c2i);
  //c2.debug = true;
  c2.setCollider("circle",-6,8,15);
  c3 = createSprite(20-48,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  c3.addImage(c3i);
  //c3.debug = true;
  c3.setCollider("circle",8,-4,15);
  c4 = createSprite(48*29+20,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  c4.addImage(c4i);
  //c4.debug = true;
  c4.setCollider("circle",-6,-6,15);
  house1 = createSprite(300,200);
  house1.addImage(house1img);
  //house1.debug = true;
  house1.setCollider("rectangle",0,30,190,80);
  door1 = createSprite(house1.position.x-24,house1.position.y+55,40,40);
  door1.visible = false;
  textbox = createSprite(width/2,height - 100);
  textbox.addImage(textboxImg);
  textbox.visible = false;
  yes = createSprite(width/2,height - 100);
  yes.addImage(yesi);
  yes.visible = false;
  no = createSprite(width/2,height - 100);
  no.addImage(noi);
  no.visible = false;
  //check1 = createSprite(100,100,10,10);
  //check2 = createSprite(100,200,10,10);
  cha = createSprite(width/2, height/2, 50, 50);
  cha.addAnimation("move1",cham1);
  cha.addAnimation("still1",cha1);
  cha.addAnimation("move2",cham2);
  cha.addAnimation("still2",cha2);
  cha.addAnimation("move3",cham3);
  cha.addAnimation("still3",cha3);
  cha.addAnimation("move4",cham4);
  cha.addAnimation("still4",cha4);
  cha.changeAnimation("still1");
  cha.scale = 0.4;
  left = 0;
  right = 0;
  up = 0;
  down = 0;
  cha.setCollider("rectangle",0,50,60,40)
  theme.loop();
  //cha.debug = true;
  textmode = 0;
  state = "outside";
  //screent = createSprite(cha.position.x,cha.position.y);
  //screent.addAnimation("screent",screenA);
}

function draw() {
  //screent.position.x = cha.position.x;
  //screent.position.y = cha.position.y;
  if(state === "outside"){
  background("#71deef");  
  tileG.setVisibleEach(false);
  wallG.setVisibleEach(false);
  camera.position.y = cha.position.y;
  camera.position.x = cha.position.x;
  }
textbox.position.x= cha.position.x;
textbox.position.y = cha.position.y+200;
  if(cha.position.y > house1.position.y){
    cha.depth = house1.depth+1;
  }
  if(cha.position.y < house1.position.y){
    cha.depth = house1.depth-1;
  }
  if(keyIsDown(DOWN_ARROW) && textmode === 0){
    cha.changeAnimation("move1");
    cha.position.y += 5;
    down = 1;
    left = 0;
    right = 0;
    up = 0;
  }
  if(keyIsDown(LEFT_ARROW) && textmode === 0){
    cha.changeAnimation("move2");
    cha.position.x -= 5;
    left = 1;
    right = 0;
    up = 0;
    down = 0;
  }
  if(keyIsDown(UP_ARROW) && textmode === 0){
    cha.changeAnimation("move3");
    cha.position.y -= 5;
    left = 0;
    right = 0;
    up = 1;
    down = 0;
  }
  if(keyIsDown(RIGHT_ARROW) && textmode === 0){
    cha.changeAnimation("move4");
    cha.position.x += 5;
    left = 0;
    right = 1;
    up = 0;
    down = 0;
  }
  if(!keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){
    if(down == 1){
      cha.changeAnimation("still1");
    }
    if(left == 1){
      cha.changeAnimation("still2");
    }
    if(up == 1){
      cha.changeAnimation("still3");
    }
    if(right == 1){
      cha.changeAnimation("still4");
    }
  } 
  if(state === "outside"){
  cha.collide(treeG);
  cha.collide(fenceGV);
  cha.collide(edgeBG);
  cha.collide(edgeTG);
  cha.collide(edgeLG);
  cha.collide(edgeRG);
  cha.collide(c1);
  cha.collide(c2);
  cha.collide(c3);
  cha.collide(c4);
  cha.collide(house1);
  }
  if(state == "inside"){
    background("#0c1414");
    tileG.setVisibleEach(true);
  wallG.setVisibleEach(true);
    treeG.setVisibleEach(false);
    fenceGV.setVisibleEach(false);
    edgeBG.setVisibleEach(false);
    edgeTG.setVisibleEach(false);
    edgeLG.setVisibleEach(false);
    edgeRG.setVisibleEach(false);
    decG.setVisibleEach(false);
    grassG.setVisibleEach(false);
    c1.visible = false;
    c2.visible = false;
    c3.visible = false;
    c4.visible = false;
    house1.visible = false;
    cha.collide(wallG);
  }
  drawSprites();
  if(cha.isTouching(door1) && state === "outside"){
    textmode=1;
    textbox.visible = true;
    yes.position.x = cha.position.x-400;
    yes.position.y = height-150;
    no.position.x = cha.position.x-300;
    no.position.y = height-150;
    yes.visible = true;
    no.visible = true;
    textFont(font);
    fill("black");
    textSize(30);
    text("do  you  want  to  enter?",cha.position.x-450,height-200);
    if(mousePressedOver(no)){
      cha.position.y += 10;
      down = 1;
      left = 0;
      up = 0;
      right = 0;
    }
    if(mousePressedOver(yes)){
      state = "inside";
      theme.stop();
      inside.loop();
      tileG.setVisibleEach(true);
    }
    }else{
        textmode=0;
        textbox.visible = false;
        yes.visible = false;
        no.visible = false;
      }
}

function nonespr(n,x,y) {
  for(var c=0; c<n; c++)
  {
    var grass = createSprite(x+48*c,y,50, 25);
    var rand = Math.round(random(1,5));
    switch (rand){
      case 1: grass.addImage(grassimg1);
      break;
      case 2: grass.addImage(grassimg2);
      break;
      case 3: grass.addImage(grassimg3);
      break;
      case 4: grass.addImage(grassimg4);
      break;
      case 5: grass.addImage(grassimg5);
      break;
  }
  grassG.add(grass);
  }
}
function tile(n,x,y,img) {
  for(var c=0; c<n; c++)
  {
    var tile = createSprite(x+48*c,y,50, 25);
    tile.addImage(img);
    tileG.add(tile);
  }
}
function trees(n,x,y,img){
  for(var c=0; c<n; c++){
    var tree;
   tree = createSprite(x+48*c,y,50, 25);
    tree.addImage(img);
    tree.setCollider("rectangle",7,49,40,25);
    treeG.add(tree);
  }
  //tree.debug = true;
}
function fencesV(n,x,y){
  for(var c=0; c<n; c++){
    var fenceV;
    fenceV = createSprite(x,y+48*c,50, 25);
    fenceV.addImage(fenceVimg);
    fenceV.setCollider("rectangle",0,0,20,50);
    fenceGV.add(fenceV);
  }
  //fenceV.debug = true;
}

function edgeB(n,x,y){
  for(var c=0; c<n; c++)
  {
    var edgeB = createSprite(x+48*c,y,50, 25);
    edgeB.addImage(edgeBimg);
    //edgeB.debug = true;
    edgeB.setCollider("rectangle",0,15,50,60);
    edgeBG.add(edgeB);
  }
}
function edgeT(n,x,y){
  for(var c=0; c<n; c++)
  {
    var edgeT = createSprite(x+48*c,y,50, 25);
    edgeT.addImage(edgeTimg);
    //edgeT.debug = true;
    edgeT.setCollider("rectangle",0,-15,50,40);
    edgeTG.add(edgeT);
  }
}
function edgeL(n,x,y){
  for(var c=0; c<n; c++){
    var edgeL;
    edgeL = createSprite(x,y+48*c,50, 25);
    edgeL.addImage(edgeLimg);
    //edgeL.debug = true;
    edgeL.setCollider("rectangle",-15,0,50,50);
    edgeLG.add(edgeL);
  }
}
function edgeR(n,x,y){
  for(var c=0; c<n; c++){
    var edgeR;
    edgeR = createSprite(x,y+48*c,50, 25);
    edgeR.addImage(edgeRimg);
    //edgeR.debug = true;
    edgeR.setCollider("rectangle",15,0,50,50);
    edgeRG.add(edgeR);
  }
}
function makeWdec(n,w1,w2,h1,h2){
  for(var i=0; i<=n; i++)
  {
    var dec = createSprite(random(w1,w2),random(h1,h2));
    var rand = Math.round(random(1,2));
    switch (rand){
      case 1: dec.addImage(decimg1);
      break;
      case 2: dec.addImage(decimg2);
      break;
  }
  decG.add(dec);
  }
}
function wall(n,x,y,img) {
  for(var c=0; c<n; c++)
  {
    var wall = createSprite(x+48*c,y,50, 25);
    wall.addImage(img);
    wallG.add(wall);
  }
}