img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Dectecting Image";
}
function preload(){
    img=loadImage("almonds.jpg");
}
function draw(){
    image(img, 0 , 0 ,640, 420);
    fill("#FF0000");
    text("Walnuts",75,75);
    noFill();
    stroke("#FF0000");
    rect(70,60,270,320);

    fill("#FF0000");
    text("ALmonds",380,75);
    noFill();
    stroke("#FF0000");
    rect(370,60,200,320);
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