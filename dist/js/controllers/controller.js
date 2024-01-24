import { Conexao } from "../models/conexao.js";
export class Controller {
    constructor() {
        this.conexao = new Conexao();
    }
    adicionaPalavra(palavra) {
        if (this.conexao.postaPalavras(palavra)) {
            console.log("FOI");
        }
        else {
            console.log("ERRO");
        }
    }
    listaPalavras() {
        this.conexao.listaPalavras()
            .then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }
}
