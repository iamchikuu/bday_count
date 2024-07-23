function times() {
    const dateInput = document.getElementById("dates").value;
    const birthdayDate = new Date(dateInput);
    const now = new Date();
  
    const countdownTime = birthdayDate - now;
    const displayTime = document.getElementById("display");
  
    if (countdownTime < 0) {
      displayTime.innerHTML = "Happy Birtday!";
      return;
    }
  
    const seconds = Math.floor((countdownTime / 1000) % 60);
    const minutes = Math.floor((countdownTime / 1000 / 60) % 60);
    const hours = Math.floor((countdownTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);
  
    displayTime.innerHTML =
      "Countdown: " +
      years +
      "y, " +
      months +
      "m, " +
      weeks +
      "w, " +
      days +
      "d, " +
      hours +
      "h, " +
      minutes +
      "m, " +
      seconds +
      "s.";
  
    setTimeout(times, 1000);
  }
  