//Code for webcam
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

//Code to take snapshot
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src='+data_url+'"/>';
    });
}
//js code to check ml5 version
console.log('ml5 version:',ml5.version);

//js cade importing model
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8Pl71RLJ_/model.jason',modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error)
    } else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].lable;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}