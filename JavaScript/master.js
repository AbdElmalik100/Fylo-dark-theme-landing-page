let validMessage = document.querySelector(".error")
let input = document.querySelector(".regestration input")
let submitButton = document.querySelector(".reg-btn")

let regExp = /[\w.-]+@[\w-]+\.[\w-]{2,4}/ig

submitButton.addEventListener("click" , (e) => {
    if (!input.value.match(regExp)) {
        e.preventDefault()
        validMessage.classList.add("active")
    } else {
        validMessage.classList.remove("active")
    }
})

