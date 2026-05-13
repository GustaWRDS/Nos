function checkPassword(){

    const password =
    document.getElementById("password").value;

    if(password === "1710"){

        // esconde senha

        document
        .getElementById("lockScreen")
        .style.display = "none";

        // mostra capa

        document
        .getElementById("bookScene")
        .style.display = "flex";

    }else{

        alert("Senha incorreta 😭");
    }
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

function nextPage(){

    if(currentPage < pages.length - 1){

        currentPage++;

        showPage(currentPage);
    }
}

function prevPage(){

    if(currentPage > 0){

        currentPage--;

        showPage(currentPage);
    }
}