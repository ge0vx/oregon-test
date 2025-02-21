# Oregan Test

## Question 1:
>Can you provide additional design considerations for the UI Input component based on the Login Page Design provided that are not mentioned/listed above?

### Response

Ensure USABILITY and CONSISTENCY with Responsive Desing:

- I made the form reponsive to small, medium and large viewports.
- If the Y-axis is too short user can navite by scrolling vertically and see what if being typed inside the input-text.
- Focus indicators in all reactive elements, you can notice what element is active by seeing a highlighted border.
- I added vertical scroll into input-text components in case the text entry is very large.
- I added cursor indicator. Depending in which elements the user hovers, the cursor changes.

Accessibility:

- I added navigation in virtual-Keyboard with fisical-keyboard's arrow buttons.
- I added navigation with fisical-keyboard's TAB key so users van navigate without the mouse.
- I added Neutral colors indicating visual hierarchy in Elements. I also Added Legible and standar text-font, so user won't have a problem to read, ensuring the colours used make the text and elements clear and readable.

Input Validation:

- I added Real-time validation of the user input as the user types once after the user tried to submit. If the user types an invalid character then the a red text appears below the input-text.

- I added detailed messages indicating what is missing. The current implementation can add more messages easily.

Passvord time indicator:

- I added a visial indicator of the remaing time the user has to see the password in plain text.





 



## Run in Local Enviornment

### 0. Pre-Requisites

1. Install Node.js
2. Install NPM
3. Install Node v18.20.3 or superior (to ensure compatibility with the react-simple-keyboard library)

In the project directory, you can run:

### 1. `npm install`

Installs the app and dependent code in your local enviornment

### 2. `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.


### App created with React + Vite
This project was bootstrapped with:
```
npm create vite@latest my-app -- --template react
```