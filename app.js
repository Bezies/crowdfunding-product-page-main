// BLOCK AUTO-RESET REFRESH

const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault();
}

// MODAL CARD START

const header = document.querySelector("header")
const backThisProject = document.querySelector("#back-project");
const mainCard = document.querySelector(".main-card")
const modalCardStart = document.querySelector(".modal-start-card");
const aboutCard = document.querySelector(".about");
const closingProject = document.querySelector("#close");
const selectReward = document.querySelectorAll(".reward");
const backgroundModal = document.querySelector(".background-modal");


// OPEN MODAL CARD 

function OpenModalCardStart() {
    modalCardStart.classList.replace("modal-start-card", "modal-start-card--on");
    backgroundModal.style.display = "block"
}


backThisProject.addEventListener("click", OpenModalCardStart);

for (let i = 0; i < selectReward.length; i++) {
    selectReward[i].addEventListener("click", OpenModalCardStart);
}


// BOOKMARK 
const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
    bookmark.classList.replace("bookmark", "bookmarked");
    bookmark.innerHTML = "Bookmarked";
})


// MOBILE BOOKMARK 
const bkMobile = document.querySelector(".bookmark-mobile") 

bkMobile.addEventListener("click", () => {
    console.log("coucou");
    bkMobile.classList.replace("bookmark-mobile", "bookmarked-mobile");
})


// CLOSE MODAL CARD 
closingProject.addEventListener("click", () => {
    modalCardStart.classList.replace("modal-start-card--on", "modal-start-card");
    backgroundModal.style.display = "none"
})





// BACK THIS PROJECT 

// NO-REWARD PROJECT 

const noRewardProject = document.querySelector("#no-reward-input");
const noRewardButton = document.querySelector("#no-reward-continue-button");

noRewardButton.addEventListener("click", () => {
    if (noRewardProject.checked === true) {
        modalSuccess.classList.replace("modal-success", "modal-success--on");
        modalCardStart.classList.replace("modal-start-card--on", "modal-start-card");
    }
})


// SELECT PROJET 
const selectProject = document.querySelectorAll(".input-project");
const pledge = document.querySelectorAll(".pledge-start");
const project = document.querySelectorAll(".project");

// BORDER SELECTED

for (let i = 0; i < selectProject.length; i++) {
    selectProject[i].addEventListener("click", () => {
        selectProject[i].style.boxShadow = "0px 0px 1px hsl(0, 0%, 48%)";
        if (selectProject[i].checked === true) {
            pledge[i].classList.replace("pledge-start", "pledge-start--on");
            project[i].classList.add("project--on");
        } 
        // else {
        //     pledge[i].classList.replace("pledge-start--on", "pledge-start");
        //     project[i].classList.remove("project--on");
        // }
    })
}


// BAMBOO & BLACK EDITION

const pledgeTips = document.querySelectorAll(".price")
const buttonContinue = document.querySelectorAll(".continue");
const modalSuccess = document.querySelector(".modal-success");


for (let i = 0; i < pledgeTips.length; i++) {
    buttonContinue[i].addEventListener("click", () => {
        if (selectProject[i].checked === true && pledgeTips[i].value >= pledgeTips[i].min * 1) {
            modalSuccess.classList.replace("modal-success", "modal-success--on");
            modalCardStart.classList.replace("modal-start-card--on", "modal-start-card");
        }
    })
}



// CLOSE GOT IT 
const gotIT = document.querySelector("#got-it");

gotIT.addEventListener("click", () => {
    modalSuccess.classList.replace("modal-success--on", "modal-success");
    backgroundModal.style.display = "none"
})



// MOBILE MENU 

const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".links");


// OPEN 
hamburger.addEventListener("click", () => {
    menu.classList.add("links--on");
    hamburger.classList.replace("hamburger", "hamburger--off");
    cross.classList.add("cross--on");  
    backgroundModal.style.display = "block";

})

// CLOSE 

cross.addEventListener("click", () =>{
    menu.classList.remove("links--on");
    cross.classList.remove("cross--on");
    hamburger.classList.replace("hamburger--off", "hamburger");
    backgroundModal.style.display = "none";
})



