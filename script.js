let Container = document.getElementById('Container');
let ColunaAfazer = document.getElementById('IdContainerAfazer');
let ColunaFazendo = document.getElementById('IdContainerFazendo');
let ColunaFeito = document.getElementById('IdContainerFeito');
let InputNomeTarefa = document.getElementById("IdNomeTarefa");
let BtnAddTarefa = document.getElementById('IdBtnTarefa');
let Tarefas = JSON.parse(localStorage.getItem("Tarefas"))||[];
let Cards = document.querySelectorAll(".CardTarefa");    
let DraggedCard;
let Columns = document.querySelectorAll('.Columns')
let NovaTarefa = {};

BtnAddTarefa.addEventListener("click",() => {
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
    let NomeTarefaCard = document.createElement('section');
    NomeTarefaCard.className = "TituloTarefa";
    NomeTarefaCard.innerText =InputNomeTarefa.value;
    Card.className = 'CardTarefa';
    NomeTarefaCard.style.fontFamily = 'Nexa-Heavy';
    Card.draggable = "true";
    let BtnApagar = document.createElement("button");
    BtnApagar.classList.add("BotaoEditarTarefa");
    let ImgApagar = document.createElement('img');
    ImgApagar.src = "./images/rubbishbin_102620.png";
    ImgApagar.alt = "BotaoDeApagar";
    BtnApagar.append(ImgApagar);
    let BtnSalvar = document.createElement("button");
    BtnSalvar.innerText = "Salvar";
    BtnSalvar.classList.add("SalvarNovoNome");
    let CorpoBtn = document.createElement("div");
    CorpoBtn.classList.add("ContainerBtns");
    BtnSalvar.style.display = "none";
    let Id = Date.now()
    let IdCard = "Card-" +Id;
    
    NovaTarefa = {
        id: Id,
        Nome: InputNomeTarefa.value,
        IdCard: IdCard,
        Coluna: ColunaAfazer
    }
    
    
    
    NovaTarefa.Nome = NomeTarefaCard.innerText;
    Tarefas.push(NovaTarefa);
    
    
    Card.addEventListener("dblclick", () => {
        NomeTarefaCard.contentEditable = "true";
        Card.focus();
        BtnSalvar.style.display = "block";
        
        
    })
    
    
    BtnSalvar.addEventListener("click", ()=> {
        let NovoNome = NomeTarefaCard.innerText;
        NovaTarefa.Nome = NovoNome;
        let index = Tarefas.findIndex(item => item.id === Id);
        if(index === -1){
             console.log(Tarefas);
            Tarefas[index].Nome = NovoNome;
        } else {
            console.log(Tarefas);
            
        }
        localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
        BtnSalvar.style.display = "none";
        NomeTarefaCard.contentEditable = "false";
    })
    
    BtnApagar.addEventListener('click', () =>{
        Card.remove();
        Tarefas = Tarefas.filter(item => item.id !== Id);
        console.log(Tarefas);
        localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
    })

    CorpoBtn.append(BtnSalvar, BtnApagar)
    Card.append(NomeTarefaCard, CorpoBtn);
    ColunaAfazer.appendChild(Card);
    Card.addEventListener("dragstart",DragStart);
    localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
    
});





    
    
    const DragStart = (event) => {
        DraggedCard = event.target;
        event.dataTransfer.effectAllowed = "move";
        


    };
    
    Cards.forEach((card) => {
        card.addEventListener("dragstart",DragStart);
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
        if(target){
            NovaTarefa.Coluna = target;
            console.log(target);
        }
        
   };



function CarregarTarefas(){
    const TarefasSalvas = localStorage.getItem("Tarefas");
    if(TarefasSalvas) {
        Tarefas = JSON.parse(TarefasSalvas);

        Tarefas.forEach( (Tarefa) => {
            let card = document.createElement("div");
            card.classList.add("CardTarefa");
            card.id = Tarefa.IdCard;
            let NomeTarefa = document.createElement("section");
            NomeTarefa.innerText = Tarefa.Nome;
            
            
            let Id = Date.now();



             let BtnApagar = document.createElement("button");
            let ImgApagar = document.createElement('img');
            ImgApagar.src = "./images/rubbishbin_102620.png";
            ImgApagar.alt = "BotaoDeApagar";
            BtnApagar.append(ImgApagar);
            BtnApagar.classList.add("BotaoEditarTarefa");
            let BtnSalvar = document.createElement("button");
            BtnSalvar.innerText = "Salvar";
            BtnSalvar.classList.add("SalvarNovoNome");
            let CorpoBtn = document.createElement("div");
            CorpoBtn.classList.add("ContainerBtns");
            BtnSalvar.style.display = "none";

             card.addEventListener("dblclick", () => {
                NomeTarefa.contentEditable = "true";
                card.focus();
                BtnSalvar.style.display = "block";
            })
            
            
            BtnSalvar.addEventListener("click", ()=> {
                let NovoNome = NomeTarefa.innerText;
                let index = Tarefas.findIndex(item => item.id === Tarefa.id);
                if(index !== -1){
                    Tarefas[index].Nome =  NovoNome;
                }else {
                console.log(Tarefas);
                
                }
                localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
                BtnSalvar.style.display = "none";
                NomeTarefa.contentEditable = "false";
            })
        BtnApagar.addEventListener('click', () =>{
        card.remove();
        Tarefas = Tarefas.filter(item => item.id !== Tarefa.id);
        console.log(Tarefas);
        localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
})


        
        CorpoBtn.append(BtnSalvar, BtnApagar)
        card.append(NomeTarefa, CorpoBtn);
            
            
            card.addEventListener("dragstart",DragStart);
            ColunaAfazer.append(card);
            localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
            

    })
  }
};


   Columns.forEach((column) => {
    
    column.addEventListener("dragover", DragOver);
    column.addEventListener("dragenter", DragEnter);
    column.addEventListener("dragleave", DragLeave);
    column.addEventListener("drop", Drop);
    
   })

   CarregarTarefas();





