import { Conexao } from "../models/conexao.js";

export class Controller {

    private conexao = new Conexao()

    public adicionaPalavra(palavra: string): void {
        if (this.conexao.postaPalavras(palavra)) {
            console.log("FOI")
        } else {
            console.log("ERRO")
        }
    }

    public listaPalavras(): void {
        this.conexao.listaPalavras()
            .then(resp => {
                console.log(resp)
            }).catch(error => {
                console.log(error)
            })
    }
}