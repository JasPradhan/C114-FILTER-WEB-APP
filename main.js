Xcoordinate_clown_nose=0;
Ycoordinate_clown_nose=0;

Xcoordinate_lip_stick=0;
Ycoordinate_lip_stick=0;

Xcoordinate_moustache=0;
Ycoordinate_moustache=0;

filter=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/GhP9qJC6/clown-nose-image.png');
    lip_stick=loadImage('https://i.postimg.cc/Qx78cszs/PNGPIX-COM-Lips-PNG-Transparent-Image-2.png');
    moustache=loadImage('https://i.postimg.cc/Gh85SScL/47-473992-moustache-png-transparent-moustache-png-images-pluspng-mustache.png');
}

function clownNose(){
    console.log("clownNose");
    filter=1;
    console.log("filter: " + filter);
}
function lipStick(){
    console.log("lipStick");
    filter=2;
    console.log("filter: " + filter);
}
function mousTache(){
    console.log("mousTache");
    filter=3;
    console.log("filter: " + filter);
}


function setup(){
    canvas=createCanvas(500,420)
    canvas.center()
    video=createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',got_poses);
}

function got_poses(results){
    if(results.length > 0 ){
        console.log(results);
        console.log("nose x position ="+results[0].pose.nose.x);
        console.log("nose y position ="+results[0].pose.nose.y);
        Xcoordinate_clown_nose=results[0].pose.nose.x-30;
        Ycoordinate_clown_nose=results[0].pose.nose.y-35;
    }
}



function modelLoaded(){
    console.log("PoseNet initialized");
}

function draw(){
    image(video ,0,0,500,420);
    if(filter==1){
        image(clown_nose ,Xcoordinate_clown_nose ,Ycoordinate_clown_nose-20 ,60 , 60);
    }
    else if(filter==2){
        image(lip_stick ,Xcoordinate_clown_nose-20 ,Ycoordinate_clown_nose+35 , 100 ,75);
    }
    else if(filter==3){
        image(moustache ,Xcoordinate_clown_nose-20 ,Ycoordinate_clown_nose-10 ,100 , 100);
    }
}

function takeSnapshot(){
    save('Filter.png');
}