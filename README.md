# Oregan Test

## Project deployed here:
https://ge0vx.github.io/oregan-test

### Run locally and Answer to Question 1:

[Run it in local enviroment here](#run)
[See answer to question 1](#question)

## Video Result (if not deployed yet) :

https://github.com/user-attachments/assets/9a610c53-7430-4e0c-96fb-d44258c7983b

## Question 1: <a id='question'></a>
>Can you provide additional design considerations for the UI Input component based on the Login Page Design provided that are not mentioned/listed above?

### Response

Ensure USABILITY and CONSISTENCY with Responsive Design:

- I made the form responsive to small, medium and large viewports.
- If the Y-axis is too short, the user can navigate by scrolling vertically and see what if being typed inside the input-text.
- Focus indicators in all reactive elements, you can notice what element is active by seeing a highlighted border.
- I added a vertical scroll into input-text components in case the text entry is very large.
- I added a cursor indicator. Depending on which elements the user hovers, the cursor changes.

Accessibility:

- I added navigation in virtual-Keyboard with the physical-keyboard's arrow buttons.
- I added navigation with the physical-keyboard's TAB key so users can navigate without the mouse.
- I added Neutral colors indicating visual hierarchy in Elements. I also Added Legible and standard text-font, so users won't have a problem reading, ensuring the colours used make the text and elements clear and readable.

Input Validation:

- I added Real-time validation of the user input as the user types once after the user tried to submit. If the user types an invalid character then a red text appears below the input-text.

- I added detailed messages indicating what is missing. The current implementation can add more messages easily.

Password time indicator:

- I added a visual indicator of the remaining time the user has to see the password in plain text.

## Run in Local Environment <a id='run'></a>

### 0. Pre-Requisites

1. Install Node.js
2. Install NPM
3. Install Node v18.20.3 or superior (to ensure compatibility with the react-simple-keyboard library)

In the project directory, you can run:

### 1. `npm install`

Installs the app and dependent code in your local environment

### 2. `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.


### App created with React + Vite
This project was bootstrapped with:
```
npm create vite@latest my-app -- --template react
```
