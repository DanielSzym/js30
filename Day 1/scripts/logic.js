/*try {
    window.onload = keyPressed();
}
catch{
    console.log("error");
}*/

function keyPressed(e) {
    var keyNumber;

    if (window.event) {
        keyNumber = e.keyCode;
    }
    checkKeys(keyNumber)
}

function checkKeys(keyNumber) {
    switch(keyNumber) {
        case 97: 
            //a
            playAudio(0, keyNumber, 'a');
            break;
        case 115:
            //s
            playAudio(1, keyNumber, 's');
            break;
        case 100: 
            //d
            playAudio(2, keyNumber, 'd');
            break;
        case 102: 
            //f
            playAudio(3, keyNumber, 'f');
            break;
        case 103: 
            //g
            playAudio(4, keyNumber, 'g');
            break;
        case 104: 
            //h
            playAudio(5, keyNumber, 'h');
            break;
        case 106: 
            //j
            playAudio(6, keyNumber, 'j');
            break;
        case 107: 
            //k
            playAudio(7, keyNumber, 'k');
            break;
        case 108: 
            //l
            playAudio(8, keyNumber, 'l');
            break;
        default:
            console.log("No valid key pressed (" + keyNumber + ")");
            break;
    }
}

function playAudio(i, keyNumber, keyChar){
    var sounds = ['clap.wav', 'hihat.wav', 'kick.wav', 'openhat.wav', 'boom.wav', 'ride.wav', 'snare.wav', 'tom.wav', 'tink.wav']
    console.log(keyNumber + ' is ' + keyChar)
    var audio = new Audio('audio/'+ sounds[i]);
    audio.play();
}