function attachEventsListeners() {
  let allButtons = Array.from(
    document.querySelectorAll('[type="button"]')
  ).forEach((b) => b.addEventListener("click", convertTime));

  let buttons = {
    daysBtn: (i) => Number(i),
    hoursBtn: (i) => Number(i) / 24,
    minutesBtn: (i) => Number(i) / 24 / 60,
    secondsBtn: (i) => Number(i) / 24 / 60 / 60,
  };

  function convertTime(e) {
    let input = e.target.previousElementSibling.value;
    let days = buttons[e.target.id](input);

    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
  }
}
