# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/Screenshot.png)


### Links

- Solution URL: [Source Code](https://github.com/Abuu998/product-list-with-cart)
- Live Site URL: [Products with Cart](https://products-with-cart.netlify.app/)

## My process

### Built with

- CSS Grid
- CSS subgrid
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - Tailwindcss


### What I learned

Learned how to make a layout without a container/wrapper which help avoid that extra div or any other element. This chalenge helped me to understand more how to use the reduce function in JavaScript by using it in my CartContext to calculate the total number of cart items and to calculate the total price of the cart. 

Below are some snippets i liked in my code:

```css
.contain {
  --padding-size: 1rem;
  --content-max-width: 120ch;
  
  display: grid;
  grid-template-columns: 
    [full-bleed-start] minmax(var(--padding-size), 1fr)
    [content-start] min(100% - var(--padding-size) * 2, var(--content-max-width)) [content-end]
    minmax(var(--padding-size), 1fr) [full-bleed-end];
}
```

### Continued development

I would like to continue using CSS Grid more in my projects.


## Author

- Frontend Mentor - [@Abu0998](https://www.frontendmentor.io/profile/Abuu998)
- Twitter - [@Abu0998](https://www.twitter.com/Abu0998)


### Feedback

If you have any feedback, on what i can improve on, or what i can do better, or any feedback at all is much appreciated. Thank you <3