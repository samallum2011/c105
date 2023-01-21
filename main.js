
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
    }) ;
    cam=document.getElementById("camera");
    Webcam.attach(cam);
    
    function picture(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });    
    }
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3YU3A2UuG/model.json",modelloaded);
    
    function modelloaded(){
    console.log("model is loaded");
    }
    
function identify(){
    img=document.getElementById("selfie");
    classifier.classify(img,gotresult);
    
    }
    function gotresult(error,results){
    if (error){
     console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("family").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    }