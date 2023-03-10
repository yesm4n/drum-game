// This is listening for mouse clicks

const drumsLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumsLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let mouseClicks = this.innerHTML;
    soundFunction(mouseClicks);
    buttonAnimation(mouseClicks);
  });
}

// This is listening for keyboard strokes

document.addEventListener("keydown", function (event) {
  let keyboardClicks = event.key;
  soundFunction(keyboardClicks);
  buttonAnimation(keyboardClicks);
});

// Sounds // Keys // Selected

function soundFunction(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    default:
      console.log(key);
      break;
  }
}

// Drum image animation

function buttonAnimation(drumPressed) {
  let animation = document.querySelector("." + drumPressed);
  animation.classList.add("pressed");

  setTimeout(() => {
    animation.classList.remove("pressed");
  }, 100);
}
