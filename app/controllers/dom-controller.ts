
export class domController {
    private stateAtual;
    private inputButton;
    private inputsDivs;
    private inputBloco1;

    constructor() {
        this.stateAtual = "bloco1"
        this.inputButton = document.querySelector(".button__submit") as HTMLButtonElement
        this.inputsDivs = document.querySelectorAll(".bloco") as NodeListOf<HTMLInputElement>
        this.inputBloco1 = document.querySelectorAll(".bloco1") as NodeListOf<HTMLInputElement>

    }

    public domStart(): void {
        this.toUpper()

        this.inputButton.addEventListener("click", (event) => {
            event.preventDefault()
            if(this.isBlocoFull()){
                console.log("Ta Full")
            }else {
                console.log("Mensagem de Completar O Bloco")
            }
        })
    }


    private toUpper(): void {
        this.inputsDivs.forEach(element => {
            element.addEventListener("keyup", () => {
                element.value = element.value.toUpperCase()
            })
        })
    }

    private isBlocoFull(): boolean {
        for (const elemento of this.inputBloco1) {
          if (elemento.value === "") {
            return false;
          }
        }
        return true;
      }
}