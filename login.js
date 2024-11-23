class classeDeLogin {
    static statusLogado = false;
    static matriculaLogado = null; //variavel intencionalmente foi deixada vazia(nenhum valor)
    static nomeLogado = null;
    static acessoLogado = null;
    static formatacoesCss = null;
    static chameParaConfirmar = null;
    static chameParaNegar = null;
    // static recebeMatricula = null;
    // static recebePassword = null;
    //static procura_Essa_Matricula_No_Servidor = "111";
    //static procura_Essa_Senha_No_Servidor = "999";

    static configuracoes = {
        cor: "orange",
        img: "./images/glp.png"
    };

    static linkConexaoAoServidor = "https://230a19dd-a01a-4faa-b3b2-580727027f3a-00-2bx1vfdz5435d.worf.replit.dev/";

    //funcao aguarda receber dois param vindo do docum aula141 que importou a classeDeLogin acessando assim essa funcao
    static funcaoLogin = (parametroConfirmar, parametroNegar, recebeParametroConfiguracao = null) => {
        console.log(recebeParametroConfiguracao);
        if (recebeParametroConfiguracao != null) { //se receber o valor nulo ??????
            this.configuracoes = recebeParametroConfiguracao; //this.propriedade passa a ter o valor nulo tambem
        }
        //quando as propried abaixo q possui uma arrow-function for chamada, ela executa tmb a funcao entre parenteses como 'callback'
        this.chameParaConfirmar = () => {parametroConfirmar()};
        this.chameParaNegar = () => {parametroNegar()};
        //o link completo de acesso eh construido a partir da url do servidor concatenado as propried buscadas nele
        
        //this.linkConexaoAoServidor += `?matricula=${this.procura_Essa_Matricula_No_Servidor}&senha=${this.procura_Essa_Senha_No_Servidor}`;
        
        //--------------------------------------------------------------------------------------------------------
        this.formatacoesCss =
        ".contFundoLogin {" +
            "display: flex;" +               /*se auto ajusta para caber no conteiner*/
            "justify-content: center;" +     /*os child se auto alinham ao centro horizontalmente*/
            "align-items: center;" +         /*os child se auto alinham ao centro verticalmente*/
            "width: 100%;" +                 /*largura ocupa toda area do ecran*/
            "height: 100%;" +                /*altura ocupa toda area do ecran*/
            "position: absolute;" +    /*tera a posicao fixa que quiser dentro do seu conteiner pai. Ele eh superior aos demais*/
            "top: 0px;" +                    /*distancia entre a parte superior desse elem e a parte superior de seu pai*/
            "left: 0px;" +                   /*distancia entre a lateral esquerda desse elem e a lateral esquerda de seu pai*/
            "background-color: rgba(0,0,0,0.75);" + /*cor com leve transparencia*/
            "box-sizing: border-box;" +      /*a borda cresce pra dentro da area total do elemento*/
        "}" +
        
        ".baseLogin {" +
            "display: flex;" +               /*se auto ajusta para caber no conteiner*/
            "justify-content: center;" +     /*os child se auto alinham ao centro horizontalmente*/
            "align-items: stretch;" +        /*os child passam ter a mesma medida vertical*/
            "width: 50%;" +                  /*largura ocupa metade de toda largura do seu pai ou ecran*/
            "box-sizing: inherit;" +         /*herda o mesmo valor de seu pai (.conteudoFundoLogin)*/
        "}" +

        ".conteinerLogin {" +
            "display: flex;" +               /*se auto ajusta para caber no conteiner*/
            "justify-content: flex-start;" + /*os child se auto organizam no lado inicial esquerdo*/
            "align-items: center;" +         /*os child auto alinham ao centro vericalmente*/
            "flex-direction: column;" +      /*os child se auto empilham de cima para baixo verticalmente*/
            "width: 50%;" +                  /*largura ocupa metade de toda largura do seu pai ou ecran*/
            "background-color: #eee;" +
            "padding: 10px;" +               /*distancia entre o conteudo do elemento ate antes da borda*/
            "border-radius: 10px 0px 0px 10px;" + /*arredondamento (topo esquerdo e base esquerda)*/
            "box-sizing: inherit;" +         /*herda o mesmo valor de seu pai (.baseLogin)*/
        "}" +

        ".formularioLogotipoLogin {" +
            "display: flex;" +
            "justify-content: center;" +     /*os child se auto alinham ao centro horizontalmente*/
            "align-items: center;" +         /*os child se auto alinham ao centro verticalmente*/
            "width: 50%;" +                  /*largura ocupa metade de toda largura do seu pai ou ecran*/
            "background-color: #bbb;" +
            "padding: 10px;" +               /*distancia entre o conteudo do elemento ate antes da borda*/
            "border-radius: 0px 10px 10px 0px;" + /*arredondamento (topo direito e base direita)*/
            "box-sizing: inherit;" +         /*herda o mesmo valor de seu pai (.baseLogin)*/
        "}" +

        ".formularioLogotipoLogin img{" +    /*formatacao apenas da tag <img>*/
            "width: 50%;" +                  /*largura ocupa 90% de toda largura de seu pai ou ecran*/
            "box-sizing: inherit;" +         /*herda o mesmo valor de seu pai (.formularioLogotipoLogin)*/
        "}" +
        
        ".campoLogin {" +
            "display: flex;" +               /*se auto ajusta para caber no conteiner*/
            "justify-content: flex-start;" + /*os child se auto organizam no dado inicial esquerdo*/
            "align-items: flex-start;" +     /*os child auto alinham seus topos ao topo do do conteiner em linha horizontal*/
            "flex-direction: column;" +      /*os child se auto empilham de cima para baixo verticalmente*/
            "box-sizing: inherit;" +         /*herda o mesmo valor de seu pai (.conteinerLogin)*/
            "margin-bottom: 10px;" +         /*espacamento na parte inferior de cada elemento desse conteiner*/
        "}" +

        ".campoLogin label {" +
            "font-size: 18px;" +
            "color: blue;" +
        "}" +

        ".campoLogin input {" +               /*formatacao apenas da tag <input>*/
            "font-size: 18px;" +              /*o tamanho da fonte visualizada ao digitar no campo do input*/
            "padding: 5px;" +                 /*distancia entre o conteudo do elemento ate antes da borda*/
            "background-color: #fff;" +       /*cor de fundo*/
            "border-radius: 5px;" +           /*arredondamento*/
            "outline: none;" +                /*remove as bordas de marcação visual da caixa de digitação do input*/
            "border: 1px solid orange;" +     /*grossura, tipo e cor da borda*/
        "}" +
        
        ".botoesLogin {" +
            "display: flex;" +                /*se auto ajusta para caber no conteiner*/
            "justify-content: space-around;" +/*espaço igual entre elem na horizont e metade desse espaço nas laterais*/
            "align-items: center;" +          /*os child auto alinham ao centro verticalmente*/
            "width: 100%;" +
            "box-sizing: inherit;" +          /*herda o mesmo valor de seu pai (.conteinerLogin)*/
        "}" +
        
        ".botoesLogin button {" +             /*formatacao apenas da tag <button da classe botoesLogin>*/
            "cursor: pointer;" +              /*se o cursor passar por cima, vira uma maozinha*/
            `background-color: ${this.configuracoes.cor};` + /*cor de fundo*/
            "color: #fff;" +                  /*cor da fonte*/
            "border-radius: 5px;" +           /*arredondamento*/
            "padding: 10px 0px;" +            /*distancia entre conteudo do elem ate antes da borda (vertical, horizontal)*/
            "width: 100px;" +                 /*largura*/
            "box-sizing: inherit;" +          /*herda o mesmo valor de seu pai (.botoesLogin)*/ 
        "}"

        const linkDoEstiloCssNoHtml = document.createElement("style"); //cria o elem simulando a tag style no html
        linkDoEstiloCssNoHtml.setAttribute("id", "idEstiloLogin"); //id sera usado p/ deletar a tag style do cabecalho(head)
        linkDoEstiloCssNoHtml.setAttribute("rel", "stylesheet"); //cria o atrib 'rel' como se fosse dentro do link do html
        linkDoEstiloCssNoHtml.setAttribute("type", "text/css"); //cria o atrib 'type' como se fosse dentro do link do html
        linkDoEstiloCssNoHtml.innerHTML = this.formatacoesCss; //escreve dentro do obj do link, as formatacoes do css
        document.head.appendChild(linkDoEstiloCssNoHtml); //anexa no cabecalho do html todo conteudo do objeto, estilizando-a


        const esqueletoDeTagsDoHtml = document.body;

        const contFundoLogin = document.createElement("div");
        contFundoLogin.setAttribute("id", "contFundoLogin");
        contFundoLogin.setAttribute("class", "contFundoLogin");
        document.body.prepend(contFundoLogin); //insere este elem como o 1º, no inicio do seu conteiner pai(na tag body)

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        //baseLogin.setAttribute("style", "background-color: blue; border: 5px solid red; height: 100px"); //apenas teste
        contFundoLogin.appendChild(baseLogin); //insere este elem como 2º, indentado dentro da tag de id e class = "contFundoLogin"

        const conteinerLogin = document.createElement("div");
        conteinerLogin.setAttribute("id", "conteinerLogin");
        conteinerLogin.setAttribute("class", "conteinerLogin");
        baseLogin.appendChild(conteinerLogin); //insere este elem como 3º, indentado dentro da tag de id e class = "baseLogin"

        //-----------------------------------------------------
        const campoLoginN = document.createElement("div");
        campoLoginN.setAttribute("id", "campoLogin"); //ATENCAO, ISSO NAO EXISTE NAS FORMATACOES DO CSS
        campoLoginN.setAttribute("class", "campoLogin");
        conteinerLogin.appendChild(campoLoginN); //insere este elem como 4º, indentado dentro da tag de id e class = "conteinerLogin"

        
        const Username = document.createElement("label");
        Username.innerHTML = "Username";
        campoLoginN.appendChild(Username); //insere este elem como 4º, indentado dentro da tag de id e class = "conteinerLogin"

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id", "formularioUsername");
        inputUsername.setAttribute("type", "text");
        inputUsername.setAttribute("name", "formularioUsername");
        campoLoginN.appendChild(inputUsername); //insere este elem como 4º, indentado dentro da tag de id e class = "conteinerLogin"
        //------------------------------------------------
 

        //ATENCAO: OS COMENTARIOS ESTADO DUPLICADOS!
        const campoLoginS = document.createElement("div");
        campoLoginS.setAttribute("id", "campoLogin"); //ATENCAO, ISSO NAO EXISTE NAS FORMATACOES DO CSS
        campoLoginS.setAttribute("class", "campoLogin");
        conteinerLogin.appendChild(campoLoginS); //insere este elem como 4º, indentado dentro da tag de id e class = "conteinerLogin"

        const Senha = document.createElement("label");
        Senha.innerHTML = "Senha";
        campoLoginS.appendChild(Senha); //insere este elem como 4º, indentado dentro da tag de id e class = "conteinerLogin"

        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("id", "formularioSenha");
        inputSenha.setAttribute("type", "password");
        inputSenha.setAttribute("name", "formularioSenha");
        campoLoginS.appendChild(inputSenha); //insere este elem como 4º, indentado dentro da tag de id e class = "conteinerLogin"


        //----------------
        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("class", "botoesLogin");
        conteinerLogin.appendChild(botoesLogin);

        const botaoLogin = document.createElement("button");
        botaoLogin.setAttribute("id", "botaoDeLogar");
        botaoLogin.innerHTML = "Login"
        botaoLogin.addEventListener("click", (evento) => {
            this.verificaLogin(); //se a funcao restornar true em vez de false...
                console.log(`A verificacao retornou ${this.verificaLogin()}, parabens seu boiola!`)
                this.fechar();
                console.log("logado com sucesso!")
        })
        botoesLogin.appendChild(botaoLogin);



        const botaoCancelar = document.createElement("button");
        botaoCancelar.setAttribute("id", "botaoDeCancelar");
        botaoCancelar.innerHTML = "Cancelar";
        botaoCancelar.addEventListener("click", (evento) => {
            this.fechar();
        })
        botoesLogin.appendChild(botaoCancelar);
        //--------------------------
                        //++++++++++++

        const logotipoLogin = document.createElement("div");
        logotipoLogin.setAttribute("id", "formularioLogotipoLogin");
        logotipoLogin.setAttribute("class", "formularioLogotipoLogin");
        baseLogin.appendChild(logotipoLogin);

        const formularioLogotipoLogin = document.createElement("img");
        formularioLogotipoLogin.setAttribute("src", this.configuracoes.img);
        formularioLogotipoLogin.setAttribute("title", "Glp13");
        logotipoLogin.appendChild(formularioLogotipoLogin);

    }//termina aqui a super e gigante funcaoLogin()



    static verificaLogin =() => {
        const recebeMatricula = document.querySelector("#formularioUsername").value; //pega o que foi digitado nesses campos input
        const recebePassword = document.querySelector("#formularioSenha").value;
        console.log("matricula = " + recebeMatricula + " - - - password = " + recebePassword);

        const novoLinkAcessoServidor = "https://230a19dd-a01a-4faa-b3b2-580727027f3a-00-2bx1vfdz5435d.worf.replit.dev/?" +
                                        `matricula=${recebeMatricula}&senha=${recebePassword}`;

        //-------------------------------------------------------------------------------------------------------------------
        //console.log(this.linkConexaoAoServidor);    //imprime o link apos construi-lo
        fetch(novoLinkAcessoServidor)           //retorna uma Promisse ao tentar conectar nessa url
                                                    //"?" indica que tudo que vem depois dele sao parametros enviados ao servidor.
                                                    //"&" usado para separar multiplos parametros um dos outros
        //fetch("https://230a19dd-a01a-4faa-b3b2-580727027f3a-00-2bx1vfdz5435d.worf.replit.dev/?matricula=111&senha=999")
        .then(res => res.json())     //se a promisse da conexao de feth() obter sucesso, converte os dados em json   
        .then(res=> {                //se a conversao for bem sucedida retornando enfim propriedades, executa as instrucoes a seguir
            //console.log("segue abaixo o valor do objeto");
            console.log(res);       //imprime todo o obj retornado, podendo ter valores ou null

            if (res) { //se tiver valores nao null nas propri do obj, passa esse if, se nao, so imprime o res null acima a sai
                //console.log("o if de res passou [usuario encontrado]");
                this.statusLogado = true;
                this.matriculaLogado = recebeMatricula;
                this.nomeLogado = res.nome;
                this.acessoLogado = res.acesso;
                this.chameParaConfirmar();
                

            }
            else {
                //console.log("o if de res nao passou [usuario nao encontrado]");
                this.statusLogado = false;
                this.matriculaLogado = null;
                this.nomeLogado = null;
                this.acessoLogado = null;
                this.chameParaNegar();
            }
            //this.fechar();
        });
        
    }


    //funcao criada fora e depois da funcaoLogin(), portanto ela pode ser chamada dentro da função funcaoLogin() ou qualquer lugar
    static fechar = () => {
        const idEstiloLogin = document.querySelector("#idEstiloLogin"); //remove o id do HEAD que possui todas as formatacoes CSS
        idEstiloLogin.remove();
        const contFundoLogin = document.querySelector("#contFundoLogin");//remove o id base, que possui todas as tags no interior 
        contFundoLogin.remove();

    }
}
export {classeDeLogin};