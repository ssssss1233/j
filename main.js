song="";

leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;


function preload(){
    song=loadSound("insane.mp3");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftWristx= "+leftwristx+" leftWristy= "+leftwristy);
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightWristx= "+rightwristx+" rightWristy= "+rightwristy);
        
    }
}

function modelloaded(){
    console.log("Posenet Is initialized");

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}

function draw(){
    image(video,0,0,500,500);
}