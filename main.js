noseX = 0
noseY = 0
leftWristX = 0
rightWristX = 0
difference = 0
function setup() {
    canvas=createCanvas(900,700)
video = createCapture(VIDEO)
classifier=ml5.poseNet(video,modelloaded)
classifier.on("pose",gotposes)
}
function modelloaded() {
    console.log("model is loaded")
}


function gotposes(results) {
    if (results.length>0) {
        console.log (results)
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
        leftWristX= results[0].pose.leftWrist.x
        rightWristX= results[0].pose.rightWrist.x
    difference = floor(leftWristX-rightWristX)
       console.log(noseX,noseY,difference) 
    }
}
function draw() {
   background("grey")
   fill("pink")
   rect(noseX,noseY,difference,difference)

    }