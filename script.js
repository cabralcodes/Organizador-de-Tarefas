let ColunaAfazer = document.getElementById('IdContainerAfazer');
let ColunaFazendo = document.getElementById('IdContainerFazendo');
let ColunaFeito = document.getElementById('IdContainerFeito');
let InputNomeTarefa = document.getElementById("IdNomeTarefa");
let BtnAddTarefa = document.getElementById('IdBtnTarefa');
let Tarefas = [];
let NomeTarefa = InputNomeTarefa;



BtnAddTarefa.addEventListener('click', function(){
    
    if(NomeTarefa === '' || NomeTarefa.value.length <= 2){
        InputNomeTarefa.style.borderColor = "red";
        BtnAddTarefa.style.borderColor = "red";
        BtnAddTarefa.style.color = "red";
        Card.remove();  
        
    }
    if(NomeTarefa.value.length >2){
        BtnAddTarefa.style.borderColor = "#000";
        BtnAddTarefa.style.color = "black";
        InputNomeTarefa.style.borderColor = "black";
    }       
        let Card = document.createElement('div');
        let NomeTarefaCard = document.createElement('p');
        NomeTarefaCard.className = "TituloTarefa";
        NomeTarefaCard.innerText = NomeTarefa.value;
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
            Nome: NomeTarefaCard,
            IdCard: IdCard,
        }
        Tarefas.push(NovaTarefa);

        ApagarBtn.addEventListener('click', () =>{
            Card.remove();
            Tarefas.filter(item => item.id !== Id);
            console.log(Tarefas);
        })
        
})


