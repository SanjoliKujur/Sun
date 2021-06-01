const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) {
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    
    //change the data in JSON format
    var responseJSON = await response.json();
    console.log(responseJSON.currentDateTime);

    // write code slice the datetime
     var dateTime = responseJSON.currentDateTime;
     var hour = dateTime.slice(11,13);
     console.log(hour);


    // add conditions to change the background images from sunrise to sunset
      if(hour>=4 && hour<=6) {
          bg = "sunrise1.png";
          console.log("4 o clock");
      
    }else if(hour>=6 && hour<=8) {
        bg = "sunrise4.png";
        console.log("6 o clock");

    }else if(hour>=8 && hour<=10) {
        bg = "sunrise5.png";
        console.log("8 o clock");

    }else if(hour>=10 && hour<=12) {
        bg = "sunrise6.png";
        console.log("10 o clock");

    }else if(hour>=12 && hour<=14) {
        bg = "sunset7.png";
        console.log("12 o clock");

    }else if(hour>=14 && hour<=16) {
        bg = "sunset8.png";
        console.log("14 o clock");

    }else if(hour>=16 && hour<=18) {
        bg = "sunset9.png";
        console.log("16 o clock");

    }else if(hour>=18 && hour<=20) {
        bg = "sunset10.png";
        console.log("18 o clock");

    }else if(hour>=20 && hour<=22) {
        bg = "sunset11.png";
        console.log("20 o clock");

    }else {
        bg = "sunset12.png";
        consolue.log("24 o clock")
    }

    //load the image in backgroundImg variable here
      backgroundImg = loadImage(bg);
      console.log(backgroundImg);
}
