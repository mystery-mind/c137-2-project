img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Dectecting Image";
}
function preload(){
    img=loadImage("Bottles.jpg");
}
function draw(){
    image(img, 0 , 0 ,640, 420);
    fill("#FF0000");
    text("Plastic Bottle",65,75);
    noFill();
    stroke("#FF0000");
    rect(60,60,170,320);

    fill("#FF0000");
    text("Bottle",420,75);
    noFill();
    stroke("#FF0000");
    rect(255,60,140,320);

    fill("#FF0000");
    text("Bottle",260,75);
    noFill();
    stroke("#FF0000");
    rect(405,60,140,320);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}