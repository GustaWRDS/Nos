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


const carrossel =
document.querySelector(".carrossel");

let autoScroll;

function startCarousel(){

    if(window.innerWidth > 580){

        autoScroll = setInterval(() => {

            carrossel.scrollBy({
                left: 740,
                behavior: "smooth"
            });

            // reinicia quando chegar no fim

            if(
                carrossel.scrollLeft +
                carrossel.clientWidth >=
                carrossel.scrollWidth - 10
            ){

                carrossel.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            }

        }, 5500);
    }
}

startCarousel();

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        // remove dos outros

        cards.forEach(c => {

            if(c !== card){
                c.classList.remove("active");
            }
        });

        // alterna no clicado

        card.classList.toggle("active");
    });
});

const musicSection =
document.getElementById("musicas");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            musicSection.classList.add("show");
        }
    });

}, {
    threshold: 0.35
});

observer.observe(musicSection);
