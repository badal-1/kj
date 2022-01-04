function preload(){
}
function setup(){
canvas = createCanvas(500,500);
video = createCapture(VIDEO);
canvas.position(500,600);
video.size(500,500);
video.hide(); 

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
console.log("Nose x= " + results[0].pose.nose.x);
console.log("Nose y= " + results[0].pose.nose.y);
}
}
function draw(){
image(video, 160, 120, 300, 300);
}
function take_snapshot(){
save('myFilterImage.png');
}