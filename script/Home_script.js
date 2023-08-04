let img = document.querySelector('#joust');
let img1 =document.querySelector('#img1');
let img2 =document.querySelector('#img2');
let img3 =document.querySelector('#img3');



function displayPhrase1()
{
    document.getElementById("demo").innerHTML = "Bumper Cars";
}

function displayPhrase2()
{
    document.getElementById("demo").innerHTML = "Rainbow Road";
}

function displayPhrase3()
{
    document.getElementById("demo").innerHTML = "Ferris Wheel";
}

img1.addEventListener('click', () => {
  img.src = 'images/BumperCars.jpg';
})

img2.addEventListener('click', () => {
  img.src = 'images/rainbowroad.jpg';
})

img3.addEventListener('click', () => {
  img.src = 'images/FerrisWheel.jpg';

})
