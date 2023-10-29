noseX=0;
noseY=0;

function preload()
{
img = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
img2 = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded)
    
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function modelloaded()
{
    console.log("PoseNet is initialized")
}

function draw()
{
 image(video ,0,0,300,300);
 //image(img , noseX-15 , noseY+5 , 30 , 30)
 image(img2 , noseX-15 , noseY-5 , 40 , 30)
}

function take_snapshot()
{
    save('myFilterImage.png')
}

