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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

- Frontend Mentor - [@Abu0998](https://www.frontendmentor.io/profile/Abu0998)
- Twitter - [@Abu0998](https://www.twitter.com/Abu0998)
