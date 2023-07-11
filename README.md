# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- [Solution URL](https://github.com/Ozzy-codes/interactive-rating-component-frontEndMentor)
- [Live Site URL](https://ozzy-codes.github.io/interactive-rating-component-frontEndMentor/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- EveryLayout & CUBE CSS styled Methodologies
- Vanilla JS

### What I learned

I felt especially proud of my JS in this project. Up to this point, I haven't developed a reactive project without the use of tooling like React, Blaze, Svelte. Take a look at the file!

One of the major takeaways from this project, which helped to develop the refactored JS code, was first developing a model of the code explicitly showing each operation necessary to make the app run.

After seeing the solution is its long form, I did a little bit of reading on MDN to find a property that would allow me to have access to a container's children elements. This allowed me create an event handler to check for the presence of an 'active' class in a loop.

After that, I put my selected elements in a array to iterate over each and hook up event listeners and classList operations.

Took a little bit of time, but well worth it!

### Useful resources

- [MDN Instance Methods](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add) - This helped me identify DOM element methods to help test the presence of classes, add and remove them.
- [MDN Instance Properties](https://developer.mozilla.org/en-US/docs/Web/API/Element/children) - Helped me to get access to child elements and their classes.

## Author

- Frontend Mentor - [@Ozzy-codes](https://www.frontendmentor.io/profile/Ozzy-codes)
- [See the rest of my repos](https://github.com/Ozzy-codes?tab=repositories)
