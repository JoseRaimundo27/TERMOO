var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Conexao {
    listaPalavras() {
        return __awaiter(this, void 0, void 0, function* () {
            const conexao = yield fetch("http://localhost:3000/words");
            this.listaJson = yield conexao.json();
            return this.listaJson;
        });
    }
    postaPalavras(palavra) {
        return __awaiter(this, void 0, void 0, function* () {
            const conexao = yield fetch("http://localhost:3000/words", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    palavra: palavra
                })
            });
            const conexaoConvertida = yield conexao.json();
            return conexaoConvertida;
        });
    }
    getQuantidadePalavras() {
        return __awaiter(this, void 0, void 0, function* () {
            const conexao = yield fetch("http://localhost:3000/words");
            this.listaJson = yield conexao.json();
            return this.listaJson.length;
        });
    }
}
