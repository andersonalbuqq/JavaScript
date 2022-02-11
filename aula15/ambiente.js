var num = [5,2,9]

num[3] = 6
num.push(89)
console.log(`Nosso vetor é o ${num}`)
console.log("O array tem tamanho: " + num.length)

num.sort()
console.log(`Nosso vetor é o ${num}`)

for(var pos in num){
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}