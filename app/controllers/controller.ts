import { Conexao } from "../models/conexao.js";

export class Controller {

    private conexao = new Conexao()

    public adicionaPalavra(palavra: string): void {
        try{
            this.conexao.postaPalavras(palavra)
        }catch(error){
            console.log(error)
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