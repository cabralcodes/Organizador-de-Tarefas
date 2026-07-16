let ColunaAfazer = document.getElementById('IdContainerAfazer');
let ColunaFazendo = document.getElementById('IdContainerFazendo');
let ColunaFeito = document.getElementById('IdContainerFeito');
let InputNomeTarefa = document.getElementById("IdNomeTarefa");
let BtnAddTarefa = document.getElementById('IdBtnTarefa');
let Tarefas = [];




BtnAddTarefa.addEventListener('click', function(){
    
    if(InputNomeTarefa.value === '' || InputNomeTarefa.value.length <= 2){
        InputNomeTarefa.style.borderColor = "red";
        BtnAddTarefa.style.borderColor = "red";
        BtnAddTarefa.style.color = "red";
        Card.remove();  
        
    }
    if(InputNomeTarefa.value.length >2){
        BtnAddTarefa.style.borderColor = "#000";
        BtnAddTarefa.style.color = "black";
        InputNomeTarefa.style.borderColor = "black";
    }       
        let Card = document.createElement('div');
        let NomeTarefaCard = document.createElement('p');
        NomeTarefaCard.className = "TituloTarefa";
        NomeTarefaCard.innerText =InputNomeTarefa.value;
        Card.className = 'CardTarefa';
        NomeTarefaCard.style.fontFamily = 'Nexa-Heavy';
        let ContainerBtns = document.createElement('div');
        let EditarBtn = document.createElement('button');
        let ApagarBtn = document.createElement('button');
        ColunaAfazer.style.maxHeight = "850px";
        let ImgEditar = document.createElement('img');
        let ImgApagar = document.createElement('img');
        ContainerBtns.className = "ContainerBotoes";
        ApagarBtn.className = "BotaoEditarTarefa";
        EditarBtn.className = "BotaoEditarTarefa";
        ImgEditar.src = "./images/pencil_112448.png";
        ImgApagar.src = "./images/rubbishbin_102620.png";
        ImgEditar.alt = "BotaoDeEditar";
        ImgApagar.alt = "BotaoDeApagar";
        
        EditarBtn.append(ImgEditar);
        ApagarBtn.append(ImgApagar);
        ContainerBtns.append(EditarBtn, ApagarBtn)
        Card.append(NomeTarefaCard, ContainerBtns);
        ColunaAfazer.appendChild(Card)
        
        let Id = Date.now()
        let IdCard = "Card-" +Id;
        
        let NovaTarefa = {
            id: Id,
            Nome: InputNomeTarefa.value,
            IdCard: IdCard,
        }
        Tarefas.push(NovaTarefa);


        EditarBtn.addEventListener('click', () => {
            let CorpoEditar = document.createElement('div');
            let EspacoEditar = document.createElement('textarea');
            let BtnSalvar = document.createElement('button');

            CorpoEditar.className = "ContainerEspacoEditar";
            BtnSalvar.className = "SalvarNovoNome";

            BtnSalvar.textContent = 'Salvar';
            EspacoEditar.value = InputNomeTarefa.value;

            CorpoEditar.append(EspacoEditar, BtnSalvar);
           document.body.appendChild(CorpoEditar);


           BtnSalvar.addEventListener('click', () => {
            CorpoEditar.remove();
            NomeTarefaCard.innerText = EspacoEditar.value;
            NovaTarefa.Nome = EspacoEditar.value;


           })

        })


        ApagarBtn.addEventListener('click', () =>{
            Card.remove();
            Tarefas = Tarefas.filter(item => item.id !== Id);
            console.log(Tarefas);
        })
        


})

