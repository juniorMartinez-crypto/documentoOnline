class Cxmsg {
    //titulo = null;
    //texto = null
    static cor = "#888";
    static destino = null;
    static divMsg = null;
    static tipo = null;
    static comandoSN = null;
    static textos = [];

    static mostrar = (config, titulo, texto) => {
        this.cor = config.cor;
        this.tipo = config.tipo;
        this.textos = config.textos;
        this.comandoSN = () => {
            config.comandoSN();
        }
        this.destino = document.body; //permite acessar e manipular o conteudo dessa tag no DOM
        this.titulo = titulo;
        this.texto = texto;
;
        this.divMsg = document.createElement("div");
        const estiloDivMsg =
        "display: flex;" + //organiza os child de forma automatica
        "justify-content: center;" + //na horizontal, organiza os child mais ao centro
        "align-items: center;" + //na vertical, organiza os chils sempre no centro/meio
        "position: absolute;" + //sobreposiciona qualquer elem do mesmo conteiner
        "top: 0px;" + //espacamento ao topo
        "left: 0px;" + //espacamento a esquerda
        "width: 100%;" + //largura total da pagina disponivel
        "height: 100vh;" +//altuta = toda altura do ecran desse dispositivo
        "background-color: rgba(0,0,0,0.7);" + //cor de fundo
        "z-index: 9999;"
        this.divMsg.setAttribute("id", "divMsg");
        this.divMsg.setAttribute("style", estiloDivMsg);
        this.destino.prepend(this.divMsg);

        const estiloAreaCaxmsg = //desenha conteiner pai invisivel da caixa
        "display: flex;" +
        "justify-content: flex-start;" +
        "align-items: center;" +
        "flex-direction: column;" +
        "background-color: gray;" +
        "width: 300px;";
        /*"height: 250px;" //apenas para fins de visualizacao*/
        /*console.log("mo sacanegem, velho!");//testando string*/
        const areaCxmsg = document.createElement("div");
        areaCxmsg.setAttribute("style", estiloAreaCaxmsg);
        //areaCxmsg.innerHTML = "corninho"; //para fins didaticos
        this.divMsg.appendChild(areaCxmsg);


        const estiloTituloCxMensag = //desenha a div de titulo da caixa
        "display: flex;" +
        "justify-content: flex-start;" +
        "align-items: center;" +
        "width: 100%;"+
        "background-color:" + this.cor + ";" +
        "color: #fff;" +
        "padding: 5px;" +
        "border-radius: 5px 5px 0px 0px;";
        const tituloCxMensagem = document.createElement("div");
        tituloCxMensagem.setAttribute("style", estiloTituloCxMensag);
        tituloCxMensagem.innerHTML = this.titulo;//vem do arquivo aula134
        areaCxmsg.appendChild(tituloCxMensagem);


        const estiloCorpoCxMensag = //desenha a div central da caixa
        "display: flex;" +
        "justify-content: flex-start;" +
        "align-items: center;" +
        "width: 100%;" +
        "background-color: #eee;" +
        "color: #000;" +
        "padding: 30px 5px;" +
        "font-size: 18px;";
        const corpoCxMensagem = document.createElement("div");
        corpoCxMensagem.setAttribute("style", estiloCorpoCxMensag);
        corpoCxMensagem.innerHTML = this.texto;//vem do arquivo aula134
        areaCxmsg.appendChild(corpoCxMensagem);



        const estiloRodapeCxMensag =
        "display: flex;" +
        "justify-content: space-around;" +
        "align-items: center;" +
        "width: 100%;" +
        "background-color: #ccc;" +
        "color: #000;" +
        "padding: 5px;" +
        "border-radius: 0px 0px 5px 5px;";
        const rodapeCxMensagem = document.createElement("div");
        rodapeCxMensagem.setAttribute("style", estiloRodapeCxMensag);
        //rodapeCxMensagem.innerHTML = this.texto;//vem do arquivo aula134
        areaCxmsg.appendChild(rodapeCxMensagem);

        const estiloBotaoCxMensag =
        "background-color:" + this.cor + ";" +
        "color: #fff;" +
        "padding: 10px 50px;" +
        "border-radius: 5px;" +
        "cursor: pointer;" +
        "text-transform: uppercase;";
        if (this.tipo == "ok") {
            const botaoOk = document.createElement("button");
            botaoOk.setAttribute("style", estiloBotaoCxMensag);
            botaoOk.innerHTML = "OK";

            botaoOk.addEventListener("click", (evento) => {
                console.log("0º = " + this.textos[0] + ", 2º = " + this.textos[1] + "e 3º = " + this.textos[2]);
                console.log("Clicou no ok");
                this.ocultar2(); //chamada antes de ser definida, possivel por ser da mesma classe
                this.comandoSN();

            });
            rodapeCxMensagem.appendChild(botaoOk);
            
        }
        else if (this.tipo == "sn") {
            const botaoSim = document.createElement("button");
            botaoSim.setAttribute("style", estiloBotaoCxMensag);
            //botaoSim.innerHTML = "SIM";
            botaoSim.innerHTML = this.textos[0];

            botaoSim.addEventListener("click", (evento) => {
                this.comandoSN();
                this.ocultar2(); //chamada antes de ser definida, possivel por ser da mesma classe

            });
            rodapeCxMensagem.appendChild(botaoSim);

            const botaoNao = document.createElement("button");
            botaoNao.setAttribute("style", estiloBotaoCxMensag);
            //botaoNao.innerHTML = "NAO";
            botaoNao.innerHTML = this.textos[1];

            botaoNao.addEventListener("click", (evento) => {
                this.ocultar2(); //chamada antes de ser definida, possivel por ser da mesma classe

            });
            rodapeCxMensagem.appendChild(botaoNao);
        }


        
    }
    //remove a div contener do elemento
    static ocultar = () => {
        this.divMsg.remove();
    }

    //remove todas as divs conteiner de desse mesmo nome dos elementos
    static ocultar2 = () => {
        const elementosParaRemover = document.querySelectorAll("#divMsg");
        elementosParaRemover.forEach(elemEncontrado => elemEncontrado.remove());
    }
}

export {Cxmsg} //essa clase esta sendo exportada para qualquer arquivo que chamá-la externamente


