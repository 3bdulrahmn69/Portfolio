/* Start Dark mode */
let checkbox = document.getElementById("toggle");
checkbox.checked = false
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
    applyStyling();
});
/* End Dark mode */

/* Start prog */
let shapes = document.querySelectorAll(".shape");
shapes.forEach(function (shape) {
    let progrev = shape.getAttribute("data-prog");
    let prog = shape.querySelector(".prog");

    // Add mouseover event listener
    shape.addEventListener("mouseover", function () {
        // Change width on mouseover
        prog.style.width = `${progrev}`;
    });

    // Add mouseout event listener
    // shape.addEventListener("mouseout", function () {
    //     // Reset width on mouseout
    //     prog.style.width = "0%";
    // });
});
/* End prog */

/* Start down FAQ */
const plusIcons = document.querySelectorAll('.plus');
plusIcons.forEach(function (plusIcon) {
    plusIcon.onclick = function () {
        const answer = plusIcon.closest('.qu').nextElementSibling;
        const ic = plusIcon.querySelector('.ic');
        // Loop through all elements with class 'qu'
        document.querySelectorAll('.qu').forEach(function (quElement) {
            const otherAnswer = quElement.nextElementSibling;
            // Set display to 'none' for all other answers
            if (otherAnswer !== answer) {
                otherAnswer.style.display = 'none';
                const otherIcon = quElement.querySelector('.ic');
                otherIcon.className = 'fa-solid fa-angle-down ic'; // Reset other icons
            }
        });
        // Toggle display for the clicked answer
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        ic.className = answer.style.display === 'block' ? 'fa-solid fa-angle-up ic' : 'fa-solid fa-angle-down ic';
    };
});
/* End down FAQ */