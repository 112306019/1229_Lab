
let secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
  let userGuess = parseInt(document.getElementById("userGuess").value, 10);
  let resultElement = document.getElementById("result");

  if (userGuess === secretNumber) {
    resultElement.innerHTML = '<img src="picture2.jpeg" alt="Correct Image">';
    document.getElementById("correctAudio").src = "music2.mp3";
    document.getElementById("correctAudio").play();

    secretNumber = generateRandomNumber();

    document.getElementById("userGuess").value = "";
  } else {
    resultElement.innerHTML = '<img src="picture1.jpeg" alt="Correct Image">';
    document.getElementById("correctAudio").src = "music1.mp3";
    document.getElementById("correctAudio").play();
  }
}


function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}

