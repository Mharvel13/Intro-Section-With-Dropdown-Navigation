// alert('hello')

console.log("hello");

let features = document.getElementById("features");
let featuresHoverList = document.getElementById("hover-list-features");
let featuresIcon = document.getElementById("features-icon");


let company = document.getElementById("company");
let companyHoverList = document.getElementById("hover-list-company");
let companyIcon = document.getElementById("company-icon");

const displayFeaturesDropdown = () => {
    changeImg(featuresIcon);
    featuresHoverList.classList.toggle("none");
};

const displayCompanyDropdown = () => {
    changeImg(companyIcon);

    companyHoverList.classList.toggle("none");
};

function changeImg(linkImg) {
    if (linkImg.getAttribute("src") === "images/icon-arrow-down.svg") {
        linkImg.setAttribute("src", "images/icon-arrow-up.svg");
    } else {
        linkImg.setAttribute("src", "images/icon-arrow-down.svg");
    }
}

features.addEventListener("click", displayFeaturesDropdown);
company.addEventListener("click", displayCompanyDropdown);







let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let sideBar = document.getElementById("sidebar");
let mainPage = document.getElementById("main-page");


openBtn.addEventListener("click", openSideBar);
closeBtn.addEventListener("click", closeSideBar);

function openSideBar() {
    sideBar.classList.toggle("none");
    openBtn.style.display = "none";
}

function closeSideBar() {
    sideBar.classList.toggle("none");

    if (window.innerWidth <= 800) {
        openBtn.style.display = "block";
    } else {
        openBtn.style.display = "none";
    }
}
