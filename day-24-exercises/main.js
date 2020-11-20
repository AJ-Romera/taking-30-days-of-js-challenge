// Exercise: Level 1

// 1. Develop a small application which calculate a weight of an object in a certain planet. The gif image is not complete check the video in the starter file.
// *** Pluto is not an official Solar System planet
// *** Can be improved but it´s a pratice, feel free to experiment with this

const space = {
    mercury: {
        gravity: 3.7,
        image: "mercury.png",
    },
    venus: {
        gravity: 8.87,
        image: "venus.png",
    },
    earth: {
        gravity: 9.807,
        image: "earth.png",
    },
    mars: {
        gravity: 3.711,
        image: "mars.png",
    },
    jupiter: {
        gravity: 24.79,
        image: "jupiter.png",
    },
    saturn: {
        gravity: 10.44,
        image: "saturn.png",
    },
    uranus: {
        gravity: 8.87,
        image: "uranus.png",
    },
    neptune: {
        gravity: 11.15,
        image: "neptune.png",
    },
    pluto: {
        gravity: 0.62,
        image: "pluto.png",
    },
}

const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button");
const container = document.querySelector(".container");

const containerUI = (img,text) => {
    let image = document.createElement("img");
    image.src = `images/${img}`;
    let p = document.createElement("p");
    p.textContent = text;
    p.className = "big";
    container.appendChild(image);
    container.appendChild(p);
}

button.addEventListener("click",function(){
    let imgSrc;
    container.innerHTML = "";
    imgSrc = space[select.value].image;
    weight = Number(input.value) * space[select.value].gravity;
    containerUI(imgSrc, `The weight is ${weight}`);
    console.log(weight);
})
