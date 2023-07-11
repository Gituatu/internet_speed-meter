let startTime, endTime;
let imageSize= "";
let image= new Image();
let bitoutput= document.getElementById("bits");
let kboutput= document.getElementById("kbs");
let mboutput= document.getElementById("mbs");

let imageLink= "https://source.unsplash.com/random?topics=nature";

image.onload= async function () {
    endTime= new Date().getTime();

    await fetch(imageLink).then((response) => {
        imageSize= response.headers.get("content-length");
        calculateSpeed();
    }); 
};

function calculateSpeed(){
    let timeDuration= (endTime-startTime)/1000;

    let loadBits= imageSize * 8;
    let speedInBits= (loadBits / timeDuration).toFixed(2);
    let speedInKbs= (speedInBits / 1024).toFixed(2);
    let speedInMbs= (speedInKbs / 1024).toFixed(2);

    bitoutput.innerHTML += `${speedInBits}`;
    kboutput.innerHTML += `${speedInKbs}`;
    mboutput.innerHTML += `${speedInMbs}`;
}

const init = async () => {
    startTime= new Date().getTime();
    image.src= imageLink;
}

window.onload = () => init();