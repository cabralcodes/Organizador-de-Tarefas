let ColunaAfazer = document.getElementById('IdContainerAfazer');
let ColunaFazendo = document.getElementById('IdContainerFazendo');
let ColunaFeito = document.getElementById('IdContainerFeito');

let InputNomeTarefa = document.getElementById("IdNomeTarefa");
let BtnAddTarefa = document.getElementById('IdBtnTarefa');



BtnAddTarefa.addEventListener('click', function(){
    let Id = Date.now()
    let IdCard = "Card- " +Id;
    let NomeTarefa = InputNomeTarefa.value;
        let Card = document.createElement('div');
        let NomeTarefaCard = document.createElement('p');
        NomeTarefaCard.innerHTML = InputNomeTarefa.value
        //NomeTarefaCard.innerText = NomeTarefa;
        Card.className = 'CardTarefa';
        NomeTarefaCard.style.fontFamily = 'Nexa-Heavy';
        Card.append(NomeTarefaCard);
        ColunaAfazer.appendChild(Card)
        
       
    })

