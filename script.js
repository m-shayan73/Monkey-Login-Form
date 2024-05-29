const normalFace = document.getElementById("normal");
const earFace = document.getElementById("ears");
const mouthFace = document.getElementById("mouth");
const closeFace = document.getElementById("close");
const eyes = document.querySelectorAll(".eyes");
const eyeballs = document.querySelectorAll(".eyeball");
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password")
const loginBtn = document.querySelector(".login-btn");

window.addEventListener("load", activeNormal)
emailInput.addEventListener("focus", activeNormal)
passInput.addEventListener("focus", activeClose)
loginBtn.addEventListener("click", activeMouth);


function activeNormal() {
    earFace.classList.remove("active")
    mouthFace.classList.remove("active")
    closeFace.classList.remove("active")
    normalFace.classList.add("active")
    eyes.forEach((eye) => {
        eye.classList.add("visible")
    })
    eyeballs.forEach((eyeball) => {
        eyeball.classList.add("visible")
        eyeball.transform
    })
}

function activeEar() {
    normalFace.classList.remove("active")
    mouthFace.classList.remove("active")
    closeFace.classList.remove("active")
    eyes.forEach((eye) => {
        eye.classList.remove("visible")
    })
    eyeballs.forEach((eyeball) => {
        eyeball.classList.remove("visible")
    })
    earFace.classList.add("active")
}

function activeMouth() {
    earFace.classList.remove("active")
    normalFace.classList.remove("active")
    closeFace.classList.remove("active")
    eyes.forEach((eye) => {
        eye.classList.remove("visible")
    })
    eyeballs.forEach((eyeball) => {
        eyeball.classList.remove("visible")
    })
    mouthFace.classList.add("active")
}

function activeClose() {
    earFace.classList.remove("active")
    mouthFace.classList.remove("active")
    normalFace.classList.remove("active")
    eyes.forEach((eye) => {
        eye.classList.remove("visible")
    })
    eyeballs.forEach((eyeball) => {
        eyeball.classList.remove("visible");
    })
    closeFace.classList.add("active")
}


let constrain = 10;
let mouseOverContainer = document.querySelector(".form-container");

function transformElement(x, y, elToRotate) {
    let el_position = elToRotate.getBoundingClientRect();
    let calcX = -(y - el_position.y - (el_position.height / 2)) / constrain;
    let calcY = (x - el_position.x - (el_position.width / 2)) / constrain;

    elToRotate.style.transform = `perspective(500px) rotateX(${calcX}deg) rotateY(${calcY}deg)`
};

emailInput.addEventListener("click", () => {
    email_box_pos = emailInput.getBoundingClientRect();
    let x = email_box_pos.x;
    let y = email_box_pos.y;

    eyeballs.forEach((eyeball) => {
        window.requestAnimationFrame(function () {
            transformElement(x, y, eyeball);
        });
    })


})

emailInput.addEventListener("input", () => {
    email_box_pos = emailInput.getBoundingClientRect();

    textLength = emailInput.value.length;

    let x = email_box_pos.x + (textLength * 15 + 5);
    let y = email_box_pos.y;

    eyeballs.forEach((eyeball) => {
        window.requestAnimationFrame(function () {
            transformElement(x, y, eyeball);
        });
    })
})

emailInput.addEventListener("focusout", () => {
    eyeballs.forEach((eyeball) => {
        window.requestAnimationFrame(() => {
            eyeball.style.top = `unset`;
            eyeball.style.right = `unset`;
        })

    })

})

mouseOverContainer.onmousemove = function (e) {
    eyeballs.forEach((eyeball) => {
        let x = e.clientX;
        let y = e.clientY;
        window.requestAnimationFrame(function () {
            transformElement(x, y, eyeball);
        });
    })
};