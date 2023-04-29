let contador = 0
let input = document.getElementById('list');
let btnAdd = document.getElementById('btn');
let main = document.getElementById('lista');

function addTarefa () {
    let valorList = input.value;

    if((valorList !== "") && (valorList !== null) &&(valorList !== undefined)){

        ++contador;

        let novoItem = 
        `<div id="${contador}" class="itens">
        <div onclick="selecionar(${contador})" class="select">
            <button id="seledois_${contador}" class="sele">Selecionar</button>
        </div>
        <div onclick="selecionar(${contador})" id="itens" class="tarefa">
            ${valorList}
        </div>
        <div class="del">
            <button id="${contador}" onclick="deletar(${contador})" class="dele">Deletar</button>
        </div>
        </div>`

        $('form').on('submit', function(e){
            e.preventDefault();
        })

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}
    function deletar(id){
        var tarefa = document.getElementById(id);
        tarefa.remove();
    }

    function selecionar(id) {
        var itens = document.getElementById(id);
        var classe = itens.getAttribute('class');

        if(classe=="itens"){
            itens.classList.add('selecionado');

            var seledois = document.getElementById('seledois_' + id)
            seledois.classList.remove('sele');
            seledois.classList.add('seledois');

            itens.parentNode.appendChild(itens);
        }else{
            
        itens.classList.remove('selecionado');

        var seledois = document.getElementById('seledois_' + id)
        seledois.classList.remove('seledois');
        seledois.classList.add('sele')

        }
    }

input.addEventListener("keyup",function(event){

    if (event.keycode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})