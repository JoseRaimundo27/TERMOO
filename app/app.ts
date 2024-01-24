import { Controller } from "./controllers/controller.js";
import { Conexao } from "./models/conexao.js";

const controller = new Controller()


controller.adicionaPalavra("ponte")
controller.listaPalavras()

