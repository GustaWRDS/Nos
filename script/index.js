function calcTimeTogether() {

  const startDate = new Date("2022-10-17T12:00:00");
  const now = new Date();
  let diff = now - startDate;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let years = Math.floor(days / 365);
  let months = Math.floor((days % 365) / 30);
  let remainingDays = days - (years * 365 + months * 30);
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds =Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = remainingDays;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

calcTimeTogether();
setInterval(calcTimeTogether, 1000);
