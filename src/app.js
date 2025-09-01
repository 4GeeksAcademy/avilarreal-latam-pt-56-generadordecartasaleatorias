import "bootstrap";
import "./style.css";

// Funcion icono y valor de carta random

const picasIcon = ["♦", "♥", "♠", "♣"]
const mainText = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

const generateRandom = (arr) => {
    let headIndex = Math.floor(Math.random() * arr.length)
    return arr[headIndex]
}

window.onload = function () {


    // Boton de reload page
    const reload = document.getElementById("reload");
    reload.addEventListener("click", (_) => {
        location.reload();
    });


    //  Asignando valores aleatorios y color rojo si el icono es igual a "♥"  en el icono superior
    let icoHead = generateRandom(picasIcon)

    if (icoHead == "♥") {
        document.querySelector("#iconHead").classList.add("text-danger")

    }
    document.querySelector("#iconHead").innerHTML = icoHead

    // Asignando valor aleatorio central de la carta
    document.querySelector("#mainValue").innerHTML = generateRandom(mainText)


    // Asignando valores aleatorios y color rojo si el icono es igual a "♥" en el icono inferior
    if (icoHead == "♥") {
        document.querySelector("#bottomValue").classList.add("text-danger")

    }
    document.querySelector("#bottomValue").innerHTML = icoHead


    // Contador regresivo
    let segundosRestantes = 20

    const idCuentaRegresiva = setInterval(() => {
        if (segundosRestantes > 0) {
            let valueCount = (` ${segundosRestantes}`)
            segundosRestantes--
            document.querySelector("#file").setAttribute("value", segundosRestantes)
        } else {
            location.reload();
            clearInterval(idCuentaRegresiva)
        }
    }, 1000);

    // modificando el width y el height
    const widthInput = document.getElementById('width')
    const heightInput = document.getElementById('height')
    const elementToChange = document.getElementById('setWidth')

    // Event listener para el ancho (width)
    widthInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const widthValue = widthInput.value
            elementToChange.style.width = `${widthValue}rem`;
            widthInput.value = ""
        }
    });

    // Event listener para la altura (height)
    heightInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const heightValue = heightInput.value
            elementToChange.style.height = `${heightValue}rem`
            heightInput.value = ""
        }
    });






    // const divContainer = document.querySelector("#app")
    // const cardBackground = document.createElement('div')
    // divContainer.appendChild(cardBackground)
    // cardBackground.classList.add("card", "p-2")

    // const divHead = document.createElement('div')
    // let iconHead = document.createElement('span')
    // divHead.classList.add("d-flex", "justify-content-start", "display-5")
    // divHead.append(iconHead)
    // iconHead.innerHTML = generateRandom(picasIcon)


    // const divMain = document.createElement('div')
    // divMain.classList.add("text-center", "p-5", "display-1")
    // const textMain = document.createElement('p')
    // divMain.append(textMain)
    // textMain.innerHTML = generateRandom(mainText)

    // const divBottom = document.createElement('div')
    // divBottom.classList.add("d-flex")
    // const iconBottom = document.createElement('p')
    // divBottom.classList.add("text-right", "display-5", "fw-bold")
    // divBottom.setAttribute("style", "transform: rotate(180deg);")
    // divBottom.append(iconBottom)
    // iconBottom.innerHTML = iconHead.innerHTML

    // cardBackground.append(divHead,divMain,divBottom)

};
