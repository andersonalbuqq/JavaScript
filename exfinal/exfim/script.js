var res = document.getElementById('res')
var list = []

function add(){
    let numtxt = window.document.getElementById('numtxt');
    let num = Number(numtxt.value);
    let item = document.createElement('option');
    let adicionados = document.getElementById('listadd');
    
    

    if(numtxt.value.length == 0 || list.indexOf(num) != -1 || num < 1 || num > 100){
        window.alert('Valor inválido ou já encontrado na lista');
    } else{
        item.text = `valor ${num} adicionado.`;
        adicionados.appendChild(item);
        list.push(num)
        res.innerHTML= '';
    }
    numtxt.value = '';
    numtxt.focus();
}

function result(){
    
    res.innerHTML ="";
    if(list.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else{
        res.innerHTML += `Ao todo, temos ${list.length} números cadastrados <br><br>`;
        let max = list[0];
        let min = list[0];
        let soma = 0
        for (let n in list){
            if(Number(list[n])>Number(max)){ max = list[n];}
            if(Number(list[n])<Number(max)){ min = list[n];}
            soma += list[n]
        }
        res.innerHTML += `O maior valor informado foi ${max}<br><br>`;
        res.innerHTML += `O menor valor informado foi ${min}<br><br>`;
        res.innerHTML += `A soma dos valores é  ${soma}<br><br>`;
        res.innerHTML += `A média dos valores informados é ${soma/list.length}<br><br>`;

    }
}