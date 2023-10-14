img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Dectecting Image";
}
function preload(){
    img=loadImage("Tv.jpg");
}
function draw(){
    image(img, 0 , 0 ,640, 420);
    fill("#FF0000");
    text("Tv",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,600,270);

    fill("#FF0000");
    text("Speaker",50,370);
    noFill();
    stroke("#FF0000");
    rect(30,350,600,50);
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