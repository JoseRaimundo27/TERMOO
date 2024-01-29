import { Controller } from "./controllers/controller.js";
import { domController } from "./controllers/dom-controller.js";
const controller = new Controller();
const dom = new domController();
console.log(controller.getPalavraAleatoria());
dom.domStart();
// controller.adicionaPalavra("ponte")
// controller.listaPalavras()
