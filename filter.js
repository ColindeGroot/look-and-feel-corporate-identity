document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".cat-button");
    const articles = document.querySelectorAll(".webinar-article");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
         
            const category = button.textContent.toLowerCase();

          
            buttons.forEach(btn => btn.setAttribute("aria-pressed", false));
            button.setAttribute("aria-pressed", true); //aria controle

       
            articles.forEach((article) => { //veberg de artikelen 
                const articleCategory = article.getAttribute("data-category");
                if (category === "all" || articleCategory === category) {
                    article.style.display = "block"; //laten zien als je op alles klikt of als de catergory overeenkomt
                } else {
                    article.style.display = "none"; //anders weg laten
                }
            });
        });
    });
});
