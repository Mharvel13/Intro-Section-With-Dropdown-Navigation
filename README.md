# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
-   View the optimal layout for the content depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

-   Desktop Screenshot

    ![Desktop Screenshot](./images/Screenshot-Desktop.png)


### Links

-   Frontend Mentor Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-using-scss-wDj1g0RgaG)
-   Live Site URL: [Live Hosted Website](https://mharvel13.github.io/Intro-Section-With-Dropdown-Navigation/)
-   Github Solution URL: [Github Hosted Codes](https://github.com/Mharvel13/Intro-Section-With-Dropdown-Navigation)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow

### What I learned

-   I learnt how to make a mobile hamburger navigation bar and also how to create hover navigation links

```html
<div class="hover-list-features none" id="hover-list-features">
    <p>
        <a href="#">
            <img src="images/icon-todo.svg" alt="To-do" />
            To-do List
        </a>
    </p>

    <p>
        <a href="#">
            <img src="images/icon-calendar.svg" alt="Calender" />
            Calender
        </a>
    </p>

    <p>
        <a href="#">
            <img src="images/icon-reminders.svg" alt="Reminder" />
            Reminder
        </a>
    </p>

    <p>
        <a href="#">
            <img src="images/icon-planning.svg" alt="Planning" />
            Planning
        </a>
    </p>
</div>
```

```js
let featuresHoverList = document.getElementById("hover-list-features");

const displayFeaturesDropdown = () => {
    changeImg(featuresIcon);
    featuresHoverList.classList.toggle("none");
};

features.addEventListener("click", displayFeaturesDropdown);
```

## Author

-   GitHub Profile - [Mharvel13](https://github.com/Mharvel13)
-   Frontend Mentor - [Marvel Victor](https://www.frontendmentor.io/profile/Mharvel13)
-   Twitter - [Marvel](https://twitter.com/Mharvel_O)
