function contar(){
    
    var i = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')

    var res = window.document.getElementById('res')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0 ){
        res.innerHTML = ('Impossível contar')
    }else {
        if(Number(p.value) == 0){
        p = 1
        window.alert('Passo inválido! COnsiderando PASSO 1.')
        }
        res.innerHTML = "Contando: <br>"
        var n = Number(i.value)
        
        if(Number(i.value) < Number(f.value)){
            while(n <= Number(f.value)){
            res.innerHTML += `${n} \u{1F449} `
            n += Number(p.value)
            }
        } else{
            while(n >= Number(f.value)){
                res.innerHTML += `${n} \u{1F449} `
                n -= Number(p.value)
        }
        }
        res.innerHTML += ` \u{1F3C1} `
        
        
    }
   
}