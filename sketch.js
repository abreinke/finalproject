let backgroundImage;
let mySound;
let thunderSound;
let hailSound;
let windSound;
let soundVolume;
function preload(){
backgroundImage = loadImage('final-project/collage.jpg');
soundFormats('mp3' , 'm4a');
mySound = loadSound('final-project/rain.m4a');
thunderSound = loadSound('final-project/thunder.mp3');
hailSound = loadSound('final-project/hail.mp3');
windSound = loadSound('final-project/wind.mp3');
}

function setup(){
soundVolume = 0.5;
mySound.setVolume(soundVolume);
thunderSound.setVolume(soundVolume);
hailSound.setVolume(soundVolume);
windSound.setVolume(soundVolume);
}

function keyTyped(){
if (key == 'r'){
mySound.play();
}
else if (key == 't') {
thunderSound.play();
}
else if (key == 'h') {
hailSound.play();
}
else if (key == 'w') {
windSound.play();
}
else if (key == 'a'){
soundVolume = soundVolume + 0.1;
mySound.setVolume(soundVolume);
}
else if (key == 'd') {
soundVolume = soundVolume - 0.1;
mySound.setVolume(soundVolume);
}
}
