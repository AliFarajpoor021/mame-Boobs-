"use strict"
let $ = document
let modalMainBox = $.querySelector(".modal-main-box")
let modalCloseBtn = $.querySelector(".fa-circle-xmark")
let acceptModalBtn = $.querySelector(".accept-modal-btn")
let doNotAcceptModalBtn = $.querySelector(".donotaccept-modal-btn")
let mainBox = $.querySelector(".main-box")
let onLoadModal = () => {
    modalMainBox.style.top = "230px"
    if (modalMainBox.style.top === "230px") {
        mainBox.style.display = "none"
    }
}
let closeModal = () => {
    window.close()
}
let disableModal = () => {
    modalMainBox.style.top = "-1000px"
    mainBox.style.display = "flex"
}
window.onload = onLoadModal()
modalCloseBtn.addEventListener("click", closeModal)
doNotAcceptModalBtn.addEventListener("click", closeModal)
acceptModalBtn.addEventListener("click", disableModal)

// boobs codes
let boobsElem = $.querySelectorAll(".boobs")
let nipples = $.querySelectorAll(".nipple")
let aroundBoobs = $.querySelectorAll(".around-boobs")
let nippleColorSelect = $.querySelector("#nipple-color-select")
let aroundColorSelect = $.querySelector("#around-color-select")
let boobsColorSelect = $.querySelector("#boobs-color-select")
let boobsSizeSelect = $.querySelector("#boobs-size-select")
let nippleColorChangeFunc = () => {
    nipples.forEach(function (nipple) {
        nipple.style.backgroundColor = nippleColorSelect.value
    })
}
let aroundBoobsColorChangeFunc = () => {
    aroundBoobs.forEach(function (aroundBoob) {
        aroundBoob.style.backgroundColor = aroundColorSelect.value
    })
}
let boobsColorChangeFunc = () => {
    boobsElem.forEach(function (boob) {
        boob.style.backgroundColor = boobsColorSelect.value
    })
}
let boobsSizeChangeFunc = () => {
    boobsElem.forEach(function (boob) {
        boob.style.width = boobsSizeSelect.value
        boob.style.height = boobsSizeSelect.value
    })
}
nippleColorSelect.addEventListener("change", nippleColorChangeFunc)
aroundColorSelect.addEventListener("change", aroundBoobsColorChangeFunc)
boobsColorSelect.addEventListener("change", boobsColorChangeFunc)
boobsSizeSelect.addEventListener("change", boobsSizeChangeFunc)
