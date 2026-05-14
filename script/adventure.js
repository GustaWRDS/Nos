const pageSound =
new Audio("audio/page-flip.mp3");

function nextPage(){    

    if(currentPage < pages.length - 1){

        pageSound.currentTime = 0;

        pageSound.play();

        currentPage++;

        showPage(currentPage);
    }
}

function prevPage(){

    if(currentPage > 0){

        pageSound.currentTime = 0;

        pageSound.play();

        currentPage--;

        showPage(currentPage);
    }
}

function checkPassword(){

    const password =
    document.getElementById("password").value;

    if(password === "2917"){

        // esconde senha

        document
        .getElementById("lockScreen")
        .style.display = "none";

        // mostra capa

        document
        .getElementById("bookScene")
        .style.display = "flex";

    }else{
        document.getElementById("errorPopup").style.display = "flex";
    }
}

function closePopup(){

    document
    .getElementById("errorPopup")
    .style.display = "none";
}

/* CAPA */

const closedBook =
document.getElementById("closedBook");

closedBook.addEventListener("click", () => {

    // esconde capa

    document
    .getElementById("bookScene")
    .style.display = "none";

    // mostra páginas

    document
    .getElementById("openBook")
    .style.display = "flex";
});

const pages =
document.querySelectorAll(".book-page");

let currentPage = 0;

function showPage(index){

    pages.forEach(page => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");
}

