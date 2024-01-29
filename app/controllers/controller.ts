import { Conexao } from "../models/conexao.js";
import { Palavra } from "../models/palavraTipo.js";

export class Controller {
    private palavrasLista: Palavra[];
    private palavraAleatoria : Palavra;
    private numeroAleatorio: number ;
    private conexao = new Conexao();

    public adicionaPalavra(palavra: string): void {
        try{
            this.conexao.postaPalavras(palavra)
        }catch(error){
            console.log(error)
        }
    }

    public async getPalavraAleatoria () : Promise<string>  { 
       const numero = await this.getNumeroAleatorio()
       this.palavrasLista = await this.conexao.listaPalavras()
        this.palavraAleatoria = this.palavrasLista[numero]
        console.log(this.palavraAleatoria.palavra)
        return this.palavraAleatoria.palavra
    }

    private getNumeroAleatorio () : Promise<number> {
        return this.conexao.getQuantidadePalavras()
        .then( quantidadePalavra=> {
            return this.numeroAleatorio = Math.floor(Math.random() * (quantidadePalavra-1 ) +1);
        })
        
    }
}