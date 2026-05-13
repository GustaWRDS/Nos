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
  document.getElementById("anos").innerText = years;
  document.getElementById("meses").innerText = months;
  document.getElementById("dias").innerText = remainingDays;
  document.getElementById("horas").innerText = hours;
  document.getElementById("minutos").innerText = minutes;
  document.getElementById("segundos").innerText = seconds;
}

calcTimeTogether();
setInterval(calcTimeTogether, 1000);
