// alert('hello')
console.log("hello");

// Features HoverList (Desktop) 
let features = document.getElementById("features");
let featuresHoverList = document.getElementById("hover-list-features");
let featuresIcon = document.getElementById("features-icon");

//  Features DropdownList (Mobile)
let featuresMobile = document.getElementById("features-mobile");
let featuresIconMobile = document.getElementById("features-icon-mobile");
let featuresMobileDropdownList = document.getElementById(
    "dropdown-list-features"
);

// let featuresIconMobile = document.getElementById("features-icon");

// Company HoverList (Desktop) 
let company = document.getElementById("company");
let companyHoverList = document.getElementById("hover-list-company");
let companyIcon = document.getElementById("company-icon");

//  Company DropdownList (Mobile)
let companyMobile = document.getElementById("company-mobile");
let companyIconMobile = document.getElementById("company-icon-mobile");
let companyMobileDropdownList = document.getElementById(
    "dropdown-list-company"
);




const displayFeaturesDropdown = () => {
    changeImg(featuresIcon);
    featuresHoverList.classList.toggle("none");
};

const displayFeaturesDropdownMobile = () => {
    changeImg(featuresIconMobile);
    featuresMobileDropdownList.classList.toggle("none");
};

const displayCompanyDropdown = () => {
    changeImg(companyIcon);

    companyHoverList.classList.toggle("none");
};

const displayCompanyDropdownMobile = () => {
    changeImg(companyIconMobile);

    companyMobileDropdownList.classList.toggle("none");
};

function changeImg(linkImg) {
    if (linkImg.getAttribute("src") === "images/icon-arrow-down.svg") {
        linkImg.setAttribute("src", "images/icon-arrow-up.svg");
    } else {
        linkImg.setAttribute("src", "images/icon-arrow-down.svg");
    }
}

features.addEventListener("click", displayFeaturesDropdown);
featuresMobile.addEventListener("click", displayFeaturesDropdownMobile);

company.addEventListener("click", displayCompanyDropdown);
companyMobile.addEventListener("click", displayCompanyDropdownMobile);

let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let sideBar = document.getElementById("sidebar");

openBtn.addEventListener("click", openSideBar);

closeBtn.addEventListener("click", closeSideBar);

function openSideBar() {
    sideBar.classList.toggle("none");
}

// let screenWidth = window.screen.width;
// console.log(screenWidth);

function closeSideBar() {
    sideBar.classList.toggle("none");
}
