var btnTranslate = document.querySelector("#btn-translate");

var txtArea = document.querySelector("#txt-area");

var outputBox = document.querySelector("#output")

btnTranslate.addEventListener("click", () => {
        outputBox.innerHTML = txtArea.value;
    });


