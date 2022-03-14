# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Links

- Solution URL: [Add solution URL here](https://github.com/gerichilli/frontendmentor.io/tree/main/01%20Stats%20preview%20card%20component)
- Live Site URL: [Add live site URL here](https://optimistic-engelbart-4585ab.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- I learned that I should avoid setting font size 62.5% in root
- I learned that there are the accesibility problem with list-style: none on Safari

### Useful resources

- [Accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns) - In a notable exception, Safari will not recognize an unordered list as a list in the accessibility tree if has a list-style value of none. The most straightforward way to address this is to add an explicit role="list" to the <ul> element in the markup. This will restore the list semantics without affecting the design.