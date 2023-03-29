leftWristX =0;
rightWristX = 0;
Difference = 20;


function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(200,100);

    canvas = createCanvas(400,400);
    canvas.position(750,120);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#828282');
    textSize(Difference);
    fill('black');
    text('Font manipulator',50,200);
    document.getElementById("font").innerHTML = "Font size = "+ Difference;
} 

function modelLoaded(){
    console.log("posenet initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        Difference = floor(leftWristX - rightWristX);
        
        console.log("LeftWristX = "+leftWristX+" RightWristX = "+rightWristX + " Difference = "+ Difference);
        
    }
}