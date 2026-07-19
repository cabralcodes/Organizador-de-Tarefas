let Container = document.getElementById('Container');
let ColunaAfazer = document.getElementById('IdContainerAfazer');
let ColunaFazendo = document.getElementById('IdContainerFazendo');
let ColunaFeito = document.getElementById('IdContainerFeito');
let InputNomeTarefa = document.getElementById("IdNomeTarefa");
let BtnAddTarefa = document.getElementById('IdBtnTarefa');
let Tarefas = [];
let Cards = document.querySelectorAll(".CardTarefa");    
let DraggedCard;
let Columns = document.querySelectorAll('.Columns')


function CriarTarefa(){
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
    Card.draggable = "true";
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
        Container.append(CorpoEditar);
        
        
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
    
    Card.addEventListener("dragstart",DragStart);
}

BtnAddTarefa.addEventListener('click', CriarTarefa)


    
    
    const DragStart = (event) => {
        DraggedCard = event.target;
        event.dataTransfer.effectAllowed = "move";
        console.log(DraggedCard);


    };
    
    Cards.forEach((card) => {
        card.addEventListener("dragstart",DragStart)
        console.log('coletando cards')
    })


   const DragOver = (event)=> {
        event.preventDefault();
   };


   

   const DragEnter = ({target})=> {
        if(target.classList.contains("Columns")) {
            target.classList.add("ColumnHighlight")
        }
   };


    const DragLeave = ({target})=> {
        target.classList.remove("ColumnHighlight");
   };


     const Drop = ({target})=> {
        target.classList.remove("ColumnHighlight");
        if(target.classList.contains("Columns")){
            target.append(DraggedCard);
            DraggedCard.classList.remove("TarefaFeito");
            DraggedCard.classList.add("CardTarefa");
        }
        if(target.classList.contains("ContainerFeito")){
            DraggedCard.className = "TarefaFeito";
            
        }
   };



   Columns.forEach((column) => {
    
    column.addEventListener("dragover", DragOver);
    column.addEventListener("dragenter", DragEnter);
    column.addEventListener("dragleave", DragLeave);
    column.addEventListener("drop", Drop);
   })





