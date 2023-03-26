let startButton; // Declare a variable to store the start button
var gif_createImg;
var logo;

var input;
var namesubmit;

function preload(){
  logo = loadImage('assets/images/mysticclash.png')
  gif_createImg = loadImage("assets/images/stars.gif");
}

function setup() {
  createCanvas(960,680);
  textAlign(CENTER, CENTER);
  textSize(30);
  textStyle(BOLD);
  
  // Create the start button and position it in the center of the canvas
  
  startButton = createButton("START");
  startButton.position(750, 880);
  startButton.mousePressed(startGame);

  image(gif_createImg, 0, 0, 960, 680);
  
  // Display the title on the screen
  image(logo, 300, 230, 563*0.65, 424 *0.65);
}

function draw() {


}

function startGame() {
  // Remove the start button from the screen
  startButton.remove();
  fill(255);
  rect(0, 0, width, height);
  
  
  // Clear the canvas
  clear();
  
  // Create a new screen and add some text to it
  image(gif_createImg, 0, 0, 960, 680);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  fill(255,255,255);
  text("BLUE ENTER NAME", width/2, 200);

  fill(255,255,255);
  input = createInput();
  input.position(700, 580);
  namesubmit = createButton("submit");
  namesubmit.position(790, 580);
  nameSubmit.mousePressed(game);

}

function game(){
  namesubmit.remove();
 
  
  
  // Clear the canvas
  clear();
  
  // Create a new screen and add some text to it
  image(gif_createImg, 0, 0, 960, 680);
  textAlign(CENTER, CENTER);
  textSize(30);
  textStyle(BOLD);
  fill(255,255,255);
  
}