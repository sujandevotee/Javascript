let countdown;
    let startButton = document.getElementById("Start");
    let secondsInput = document.getElementById("second");
    let countdownDisplay = document.getElementById("num");

    startButton.addEventListener("click", function() {
      let seconds = parseInt(secondsInput.value);

      if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
      }

      startCountdown(seconds);
    });

    function startCountdown(seconds) {
      let currentTime = seconds;

      countdown = setInterval(function() {
        currentTime--;

        if (currentTime >= 0) {
          countdownDisplay.textContent = currentTime.toString().padStart(2, '0');
        } else {
          clearInterval(countdown);
          countdownDisplay.textContent = '00';
          alert('Countdown Done!');
        }
      }, 1000);
    }