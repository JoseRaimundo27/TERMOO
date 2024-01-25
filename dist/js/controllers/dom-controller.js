export class domController {
    constructor() {
        this.stateAtual = "bloco1";
        this.inputButton = document.querySelector(".button__submit");
        this.inputsDivs = document.querySelectorAll(".bloco");
        this.inputBloco1 = document.querySelectorAll(".bloco1");
    }
    domStart() {
        this.toUpper();
        this.inputButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.isBlocoFull()) {
                console.log("Ta Full");
            }
            else {
                console.log("Mensagem de Completar O Bloco");
            }
        });
    }
    toUpper() {
        this.inputsDivs.forEach(element => {
            element.addEventListener("keyup", () => {
                element.value = element.value.toUpperCase();
            });
        });
    }
    isBlocoFull() {
        for (const elemento of this.inputBloco1) {
            if (elemento.value === "") {
                return false;
            }
        }
        return true;
    }
}
