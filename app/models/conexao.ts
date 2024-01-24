import { Palavra } from "./palavraTipo";

export class Conexao {

    public listaJson: Palavra[]

    public async listaPalavras(): Promise<Palavra[]> {
        const conexao = await fetch("http://localhost:3000/words")
        this.listaJson = await conexao.json()
        return this.listaJson;
    }

    public async postaPalavras(palavra: string): Promise<void> {
        const conexao = await fetch("http://localhost:3000/words", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                palavra: palavra
            })
        })
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
    }
}