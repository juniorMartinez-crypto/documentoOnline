Exemplo de uso:

import { Cxmsg } from "./cxmsg.js"
const afirmativo = () => {
    alert("sucesso");
}
const array = ["primeira string", "segunda string", "terceira string"];
const negativo = () => {
    const config = {
        cor: "blue",
        tipo: "ok",
        textos: array,
        comandoSN() {
            console.log("ocorreu um erro");
        }
    }
    Cxmsg.mostrar(config, "Erro", "Login nao efetuado. Usuario ou senhas incorretos.");
}
