import { Conexao } from "../models/conexao.js";
export class Controller {
    constructor() {
        this.conexao = new Conexao();
    }
    adicionaPalavra(palavra) {
        try {
            this.conexao.postaPalavras(palavra);
        }
        catch (error) {
            console.log(error);
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
