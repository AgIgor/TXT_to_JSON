 let lista_nomes = document.getElementById("nomes").innerText.split(" ")
 console.log(lista_nomes)

 let lista_sobrenomes = document.getElementById("sobrenomes").innerText.split(",")
 console.log(lista_sobrenomes)


 for(let i = 0;i< lista_nomes.length;i++){
     let nome = ('"'+lista_nomes[i]+'", ') 
     document.getElementById("saidaNomes").innerHTML += nome
 }

 for(let i = 0;i< lista_sobrenomes.length;i++){
    let sobrenome = ('"'+lista_sobrenomes[i]+'",') 
    document.getElementById("saidaSobrenomes").innerHTML += sobrenome
}

