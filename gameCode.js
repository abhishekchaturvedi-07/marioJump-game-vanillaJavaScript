var mario = document.getElementById("mario");
var barrier = document.getElementById("barrier");
var counter = 0;
function jump() {
  if (mario.classList == "animate") {
    return;
  }
  mario.classList.add("animate");
  setTimeout(function () {
    mario.classList.remove("animate");
  }, 300);
}
var checkDead = setInterval(function () {
  let marioTop = parseInt(
    window.getComputedStyle(mario).getPropertyValue("top")
  );
  let barrierLeft = parseInt(
    window.getComputedStyle(barrier).getPropertyValue("left")
  );
  if (barrierLeft < 20 && barrierLeft > -20 && marioTop >= 130) {
    barrier.style.animation = "none";
    alert("Ofo, Game Over! Your score: " + Math.floor(counter / 100));
    counter = 0;
    barrier.style.animation = "block 1s infinite linear";
  } else {
    counter++;
    document.getElementById("totalScore").innerHTML = Math.floor(counter / 100);
  }
}, 10);
