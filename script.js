// Eigen input + button
let naam;

document.getElementById("OK").onclick = function() {
  naam = document.getElementById("tekst").value;
  document.getElementById("H1").textContent = `De kikker heet nu ${naam}!`;
}

// afbeeldingen selecteren
const kikkerImg = document.getElementById("kikkerimg");
const vliegje = document.querySelector(".vliegje");
const water = document.querySelector(".water");

// sleepbaar maken
vliegje.setAttribute("draggable", "true");
water.setAttribute("draggable", "true");

// dragstart 
vliegje.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("voedselType", "vliegje");
});

water.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("voedselType", "water");
});

// voeg dragover en drop toe aan de kikker
kikkerImg.addEventListener("dragover", (event) => {
  event.preventDefault();
});

kikkerImg.addEventListener("drop", (event) => {
  event.preventDefault();

  // haal het type voedsel op
  const voedselType = event.dataTransfer.getData("voedselType");

  // controle afbeelding + speel geluid
  if (voedselType === "vliegje") {
    kikkerImg.src = "./images/kikker2.png";
    playSound("./geluiden/hapje.mp3");
  } else {
    kikkerImg.src = "./images/kikker2.png";
    playSound("./geluiden/hapje.mp3");
  }

  // maak hartje zichtbaar
  const hartje = document.querySelector(".hartje");
  hartje.style.display = "block";

  // verstop hartje na 3 seconden
  setTimeout(() => {
    hartje.style.display = "none";
  }, 3000);

  // terug naar default na 3,5 seconden
  setTimeout(() => {
    kikkerImg.src = "./images/kikker.png";
  }, 3500);
});

function playSound(src) {
  const audio = new Audio(src);
  audio.play();
}

