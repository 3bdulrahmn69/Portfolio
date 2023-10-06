let checkbox = document.getElementById("toggle");
checkbox.checked = JSON.parse(window.localStorage.getItem('dark')) || false;
function applyStyling() {
    if (checkbox.checked) {
        document.querySelector(".landing").style.cssText = 
        "background: url(assets/svg/land-dark.svg); background-size: cover; background-repeat: no-repeat; background-position: center;";
        
        document.querySelector(".landing .id-card").style.cssText = 
        "background: url(assets/svg/card-dark.svg); background-size: cover; background-repeat: no-repeat; background-position: center;";
        
        document.querySelector(".landing .id-card .my-links").style.cssText = 
        "background-color: var(--dark-color);";
        
        document.querySelector(".skills ").style.cssText = 
        "background: url(assets/svg/skills-dark.svg); background-size: cover; background-repeat: no-repeat; background-position: center;";
        
        document.querySelector(".projects .head-title").style.cssText = 
        "background-color: var(--dark-color);";
        
        let ProjCards = document.querySelectorAll(".projects .content .p-card");
        ProjCards.forEach(function(ProjCards) {
            ProjCards.style.backgroundColor = "var(--dark-color)";
        });
        
        document.querySelector(".projects .content .more ").style.cssText = 
        "background-color: var(--dark-color);";
    }else {
        document.querySelector(".landing").style.cssText = 
        "background: url(assets/svg/land-light.svg); background-size: cover; background-repeat: no-repeat; background-position: center;";
        
        document.querySelector(".landing .id-card").style.cssText = 
        "background: url(assets/svg/card-light.svg); background-size: cover; background-repeat: no-repeat; background-position: center;";
        
        document.querySelector(".landing .id-card .my-links").style.cssText = 
        "background-color: var(--light-color);";
        
        document.querySelector(".skills ").style.cssText = 
        "background: url(assets/svg/skills-light.svg); background-size: cover; background-repeat: no-repeat; background-position: center;";
        
        document.querySelector(".projects .head-title").style.cssText = 
        "background-color: var(--light-color);";
        
        let ProjCards = document.querySelectorAll(".projects .content .p-card");
        ProjCards.forEach(function(ProjCards) {
            ProjCards.style.backgroundColor = "var(--light-color)";
        });
        
        document.querySelector(".projects .content .more ").style.cssText = 
        "background-color: var(--light-color);";
    }
};

applyStyling();

checkbox.addEventListener("change", function() {
<<<<<<< HEAD
    window.localStorage.setItem('dark', checkbox.checked);
=======
    dark = checkbox.checked;
    localStorage.setItem('dark', dark);
    localStorage.setItem('box', true);
>>>>>>> 174bc387714fbbcffadb8aaa59187ea7c7bc82c4
    applyStyling();
});