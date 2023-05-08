function comeu(){
        let sim = document.getElementById("S");
        let nao = document.getElementById("N");
        let res = document.getElementById("res");
        let imagem = document.getElementById("comida")
if(sim.value.length == 0 && nao.value.length == 0) {
        window.alert("digite um numero");
} else {
        let s = Number(sim.value)
        let n = Number(nao.value)
        if(s== 1 && n == 0){
          res.innerHTML = "Muito Bem!"
          imagem.src = "img/prato_sujo.jpg"
          return
        }else{
        imagem.src = "img/prato_limpo.jpg"
         res.innerHTML = "Pare de comer bobagem!"
         return
        }
}       

}

