import { conectaApi } from "./models/conectaAPI.js";

const conexaoAPI = new conectaApi()

conexaoAPI.listaPalavras().then( result => {
    console.log(result)
})
